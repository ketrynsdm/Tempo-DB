import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcuraClienteService } from '@linx/shared-libraries/geral';
import {
    DatepickerConfiguration,
    DynamicTableColumn,
    DynamicTableColumnDataType,
    DynamicTableColumnFilterType,
    DynamicTableColumnsCollection,
    DynamicTableOptions,
    IDatepickerConfiguration,
    LinxDialogConfirmationModel,
    LoadingService,
    ModalService,
    SelRegistro,
    SubscriptionsComponent
} from '@linx/shared-libraries/utils';
import { ToasterService } from 'angular2-toaster';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthSessionDataService } from '../../../../authentication/services';
import { AtualizaPermissoesReservaRequest,
    AtualizaPermissoesReservaResult,
    ConsultaReservaVeiculoModel,
    ConsultaReservaVeiculoRequest,
    GerDepartamentoModuloSelRegistro,
    listaReservaVeiculo,
    SelRegistroDepartamentoVendedorRequest
} from '../../models/reserva-veiculo.models';
import { ReservaVeiculoContextService } from '../../services/reserva-veiculo-context.service';

@Component({
    selector: 'linx-aba-consulta-reserva-veiculo',
    templateUrl: './consulta-reserva-veiculo.component.html',
    styleUrls: ['./consulta-reserva-veiculo.component.scss']
})
export class ConsultaReservaVeiculoComponent extends SubscriptionsComponent implements OnInit {

    @Output() veiculoSelecionadoChange = new EventEmitter<ConsultaReservaVeiculoModel>();
    @Output() pesquisaVeiculosChange = new EventEmitter<ConsultaReservaVeiculoModel[]>();

    @Input() pesquisaDadosVeiculo: ConsultaReservaVeiculoModel[];

    public selectedVeiculo: ConsultaReservaVeiculoModel;

    public form: FormGroup = this._fb.group({
        Empresa: [this._session.empresa, Validators.required],
        Revenda: [this._session.revenda, Validators.required],
        Usuario: [this._session.usuario, Validators.required],
        Placa: [null],
        Chassi: [null],
        Veiculo: [null],
        VendedoresSelecionados: [null],
        DepartamentosSelecionados: [null],
        Cliente: [null],
        PeriodoDataInicial: [null],
        PeriodoDataFinal: [null],
        Reservado: [1],
        Vendido: [1],
        Negociado: [1]
    });

    public configPeriodoDataInicial: IDatepickerConfiguration = new DatepickerConfiguration({
        id: 'PeriodoDataInicial',
        readonlyInput: true,
        placeholder: 'Selecione a data',
        dateFormat: 'dd/mm/yy',
        showTime: false,
        field: this.form.get('PeriodoDataInicial')
    });

    public configPeriodoDataFinal: IDatepickerConfiguration = new DatepickerConfiguration({
        id: 'PeriodoDataFinal',
        readonlyInput: true,
        placeholder: 'Selecione a data',
        dateFormat: 'dd/mm/yy',
        showTime: false,
        field: this.form.get('PeriodoDataFinal'),
    });

    public listaReservaVeiculo: listaReservaVeiculo[] = [
        { label: 'Sim', value: 0 },
        { label: 'Não', value: 1 },
        { label: 'Todas', value: 2 }
    ];

    public jsonConfig: DynamicTableColumnsCollection = new DynamicTableColumnsCollection([
        new DynamicTableColumn('Veiculo', 'Veiculo', DynamicTableColumnDataType.STRING, 100, DynamicTableColumnFilterType.TEXTO),
        new DynamicTableColumn('DesModelo', 'Modelo', DynamicTableColumnDataType.STRING, 200, DynamicTableColumnFilterType.TEXTO),
        new DynamicTableColumn('DtaFimReserva', 'Data Fim da Reserva', DynamicTableColumnDataType.DATE_TIME, 140, DynamicTableColumnFilterType.DATA),
        new DynamicTableColumn('NomeVendedor', 'Vendedor', DynamicTableColumnDataType.STRING, 250, DynamicTableColumnFilterType.TEXTO),
        new DynamicTableColumn('Situacao', 'Situação', DynamicTableColumnDataType.STRING, 80, DynamicTableColumnFilterType.TEXTO),
        new DynamicTableColumn('Reservado', 'Reservado', DynamicTableColumnDataType.STRING, 80, DynamicTableColumnFilterType.TEXTO),
        new DynamicTableColumn('NomeCliente', 'Cliente', DynamicTableColumnDataType.STRING, 150, DynamicTableColumnFilterType.TEXTO),
        new DynamicTableColumn('Chassi', 'Chassi', DynamicTableColumnDataType.STRING, 150, DynamicTableColumnFilterType.TEXTO, 'Chassi'),
        new DynamicTableColumn('Proposta', 'Proposta', DynamicTableColumnDataType.STRING, 150, DynamicTableColumnFilterType.TEXTO),
        new DynamicTableColumn('Placa', 'Placa', DynamicTableColumnDataType.STRING, 100, DynamicTableColumnFilterType.TEXTO),
    ]);

    optionsConfig = new DynamicTableOptions<ConsultaReservaVeiculoModel>('ConsultaReservaVeiculo', '', 1)
        .setGeneralFilter(false)
        .setGeneralActionsButton(false)
        .setColumnsButton(false)
        .setPaginator(true)
        .setLoadPersonalSettings(false)
        .setLinesNumber(10)
        .setColumnsButton(true)
        .setContextMenu(true)
        .setMenu(true);

    btnCancelarTodasReservas: MenuItem = { label: 'Cancelar todas as reservas (77)', icon: '', command: () => { this.modalCancelarTodasReservas(); } };

    actionsMenuTableItens: MenuItem[] = [
        this.btnCancelarTodasReservas
    ];

    constructor(
        private _fb: FormBuilder,
        private _loading: LoadingService,
        private _toaster: ToasterService,
        private _session: AuthSessionDataService,
        private _reservaVeiculoContextService: ReservaVeiculoContextService,
        public _procuraCliente: ProcuraClienteService,
        private _modal: ModalService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.optionsConfig.data = [];
        if (this.pesquisaDadosVeiculo)
            this.optionsConfig.data = this.pesquisaDadosVeiculo;
    }

    selRegistroVendedor(): Observable<SelRegistro> {
        const selRegistroDepartamentoVendedorRequest: SelRegistroDepartamentoVendedorRequest = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda
        }
        return this._reservaVeiculoContextService.selRegistroVendedor(selRegistroDepartamentoVendedorRequest);
    }

    selRegistroDepartamento(): Observable<SelRegistro> {
        const gerDepartamentoModuloSelRegistro: GerDepartamentoModuloSelRegistro = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda,
            MutiplaEscolha: true,
            Selecionados: this.form.get('DepartamentosSelecionados').value
        }
        return this._reservaVeiculoContextService.selRegistroDepartamento(gerDepartamentoModuloSelRegistro);
    }

    consultar(): void {
        this.atualizaPermissoesReserva();

        const consultaReservaVeiculoRequest: ConsultaReservaVeiculoRequest = {
            ...this.form.value
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.consultaReservaVeiculo(consultaReservaVeiculoRequest).subscribe(
                (retorno: ConsultaReservaVeiculoModel[]) => {
                    if (retorno)
                        this.optionsConfig.data = retorno;
                },
                err => {
                    this.limpar();
                }).add(() => { this._loading.stop(); })
        );
    }

    limpar(): void {
        this.form.reset();
        this.form.get('Empresa').setValue(this._session.empresa);
        this.form.get('Revenda').setValue(this._session.revenda);
        this.form.get('Usuario').setValue(this._session.usuario);
        this.form.get('Reservado').setValue(1);
        this.form.get('Vendido').setValue(1);
        this.form.get('Negociado').setValue(1);
        this.optionsConfig.setData([]);
    }

    veiculoSelecionado(selecionado: ConsultaReservaVeiculoModel): void {
        this.selectedVeiculo = selecionado;
        this.veiculoSelecionadoChange.emit(this.selectedVeiculo);
        this.pesquisaVeiculosChange.emit(this.optionsConfig.data);
    }

    modalCancelarTodasReservas(): void {
        const consultaReservaVeiculoRequest: ConsultaReservaVeiculoRequest = {
            ...this.form.value,
            Veiculo: null,
            PerguntaCancelarTodasReservas: null
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.cancelarTodasReservas(consultaReservaVeiculoRequest).subscribe(
                (retorno: LinxDialogConfirmationModel) => {
                    this._modal.confirmDialog({
                        TextoDeConfirmacao: retorno.TextoDeConfirmacao,
                        IdentificadorIcone: retorno.IdentificadorIcone,
                        ListaDeBotoes: retorno.ListaDeBotoes
                    }).subscribe(
                        resp => {
                            if (resp === 'U') {
                                this.cancelarTodasReservas();
                            } else {
                                return;
                            }
                        });
                }).add(() => { this._loading.stop(); })
        );
    }

    cancelarTodasReservas(): void {
        const consultaReservaVeiculoRequest: ConsultaReservaVeiculoRequest = {
            ...this.form.value,
            Veiculo: null,
            PerguntaCancelarTodasReservas: 'S'
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.cancelarTodasReservas(consultaReservaVeiculoRequest).subscribe(
                (retorno: string) => {
                    this._toaster.pop('success', '', retorno);
                    this.limpar();
             }).add(() => { this._loading.stop(); })
        )
    }

    atualizaPermissoesReserva(): void {
        const atualizaPermissoesReserva: AtualizaPermissoesReservaRequest = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda,
            Usuario: this._session.usuario,
            Veiculo: this.form.get('Veiculo').value
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.atualizaPermissoesReserva(atualizaPermissoesReserva).subscribe(
                (permissoes: AtualizaPermissoesReservaResult) => {
                    if (permissoes.NomeCampoChassi) this.jsonConfig.get('Chassi').header = permissoes.NomeCampoChassi;
                }).add(() => { this._loading.stop(); })
        );
    }
}
