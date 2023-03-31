import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import {
    DatepickerConfiguration,
    IDatepickerConfiguration,
    LinxDate,
    LinxDialogConfirmationModel,
    LoadingService,
    ModalService,
    SelRegistro,
    SubscriptionsComponent
} from '@linx/shared-libraries/utils';
import { ToasterService } from 'angular2-toaster';
import { Observable } from 'rxjs';
import { AuthSessionDataService } from '../../../../authentication/services';
import {
    AtualizaPermissoesReservaRequest,
    AtualizaPermissoesReservaResult,
    CancelarReservaVeiculoRequest,
    ConsultaReservaVeiculoModel,
    SalvaReservaVeiculoRequest,
    SelRegistroDepartamentoVendedorRequest,
    TipoReservaUsuarioResult
} from '../../models/reserva-veiculo.models';
import { ReservaVeiculoContextService } from '../../services/reserva-veiculo-context.service';
@Component({
    selector: 'linx-aba-manutencao-reserva-veiculo',
    templateUrl: './manutencao-reserva-veiculo.component.html',
    styleUrls: ['./manutencao-reserva-veiculo.component.scss']
})
export class ManutencaoReservaVeiculoComponent extends SubscriptionsComponent implements OnInit {

    @Input() dadosVeiculo: ConsultaReservaVeiculoModel;
    @Output() cancelarReservaMudaAba = new EventEmitter();

    public form: FormGroup = this._fb.group({
        Veiculo: [null],
        Modelo: [null],
        DesModelo: [null],
        Situacao: [null],
        Cliente: [null],
        VendedorReserva: [null],
        TipoReserva: [null],
        ObservacaoReserva: [null],
        LocContratoReserva: [null],
        Reservado: [null],
        DtaReserva: [null],
        DtaFimReserva: [null],
    });

    listaReserva: TipoReservaUsuarioResult[] = [];

    public permissoes: AtualizaPermissoesReservaResult;

    disableSave: boolean = true;
    disableEdit: boolean = true;
    disableCancelReserva: boolean = true;

    nomePropostaContrato: string = 'Proposta/Contrato Locação';
    textoSituacao: string = '';

    public configDataInicioRes: IDatepickerConfiguration = new DatepickerConfiguration({
        id: 'DtaReserva',
        readonlyInput: true,
        dateFormat: 'dd/mm/yy',
        showTime: false,
        field: this.form.get('DtaReserva'),
        disabled: true,
        backendInitialValue: false
    });

    public configDataFimRes: IDatepickerConfiguration = new DatepickerConfiguration({
        id: 'DtaFimReserva',
        readonlyInput: true,
        dateFormat: 'dd/mm/yy',
        showTime: true,
        field: this.form.get('DtaFimReserva'),
        disabled: true,
        backendInitialValue: false
    });

    constructor(
        private _fb: FormBuilder,
        private _session: AuthSessionDataService,
        private _loading: LoadingService,
        private _reservaVeiculoContextService: ReservaVeiculoContextService,
        private _toasterService: ToasterService,
        private _modal: ModalService,
    ) {
        super();
        this.form.disable();
    }

    ngOnInit(): void {
        this.atualizaPermissoesReserva();
        this.listaTipoReservaUsuario();

        if (this.dadosVeiculo)
            this._carregarForm(this.dadosVeiculo);
    }

    selRegistroReservaVeiculoVendedor(): Observable<SelRegistro> {
        const selRegistroDepartamentoVendedorRequest: SelRegistroDepartamentoVendedorRequest = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda
        }
        return this._reservaVeiculoContextService.selRegistroReservaVeiculoVendedor(selRegistroDepartamentoVendedorRequest);
    }

    listaTipoReservaUsuario(): void {
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.listaTipoReservaUsuario(this._session.empresa, this._session.revenda, this._session.usuario).subscribe(
                (lista: TipoReservaUsuarioResult[]) => {
                    this.listaReserva = lista;
                }).add(() => { this._loading.stop(); })
        );
    }

    modalCancelarReserva(): void {
        const cancelarReservaVeiculoRequest: CancelarReservaVeiculoRequest = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda,
            Usuario: this._session.usuario,
            Veiculo: this.dadosVeiculo.Veiculo,
            PerguntaCancelarReserva: null
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.cancelarReservaVeiculo(cancelarReservaVeiculoRequest).subscribe(
                (retorno: LinxDialogConfirmationModel) => {
                    this._modal.confirmDialog({
                        TextoDeConfirmacao: retorno.TextoDeConfirmacao,
                        IdentificadorIcone: retorno.IdentificadorIcone,
                        ListaDeBotoes: retorno.ListaDeBotoes
                    }).subscribe(
                        resp => {
                            if (resp === 'U') {
                                this.cancelarReservaVeiculo();
                            } else {
                                return;
                            }
                        });
                }).add(() => { this._loading.stop(); })
        );
    }

    cancelarReservaVeiculo(): void {
        const cancelarReservaVeiculoRequest: CancelarReservaVeiculoRequest = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda,
            Usuario: this._session.usuario,
            Veiculo: this.dadosVeiculo.Veiculo,
            PerguntaCancelarReserva: 'S'
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.cancelarReservaVeiculo(cancelarReservaVeiculoRequest).subscribe(
                (retorno: string) => {
                    this.cancelarReservaMudaAba.emit(true);
                    this._toasterService.pop('success', '', retorno);
                }).add(() => { this._loading.stop(); })
        );

    }

    salvar(): void {
        this.carregarDadosSalvar();
        const salvaReservaVeiculoRequest: SalvaReservaVeiculoRequest = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda,
            Usuario: this._session.usuario,
            Veiculo: this.dadosVeiculo.Veiculo,
            InfoVeiculo: this.dadosVeiculo
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.salvaReservaVeiculo(salvaReservaVeiculoRequest).subscribe(
                (retorno) => {
                    this._toasterService.pop('success', '', retorno);
                    this.form.disable();
                    this.disableEdit = false;
                    this.disableSave = true;
                }).add(() => { this._loading.stop(); })
        );

    }

    carregarDadosSalvar(): void {
        const _formLocal = this.form;
        this.dadosVeiculo.Veiculo = _formLocal.get('Veiculo').value;
        this.dadosVeiculo.Modelo = _formLocal.get('Modelo').value;
        this.dadosVeiculo.DesModelo = _formLocal.get('DesModelo').value;
        this.dadosVeiculo.Situacao = _formLocal.get('Situacao').value;
        this.dadosVeiculo.TipoReserva = _formLocal.get('TipoReserva').value;
        this.dadosVeiculo.ObservacaoReserva = _formLocal.get('ObservacaoReserva').value;
        this.dadosVeiculo.LocContratoReserva = _formLocal.get('LocContratoReserva').value;
        this.dadosVeiculo.Reservado = _formLocal.get('Reservado').value;
        this.dadosVeiculo.ClienteReserva = _formLocal.get('Cliente').value;
        this.dadosVeiculo.VendedorReserva = _formLocal.get('VendedorReserva').value;
        this.dadosVeiculo.DtaReserva = (_formLocal.get('DtaReserva').value != null ? new LinxDate(_formLocal.get('DtaReserva').value) : null);
        this.dadosVeiculo.DtaFimReserva = (_formLocal.get('DtaFimReserva').value != null ? new LinxDate(_formLocal.get('DtaFimReserva').value) : null);
    }

    editar(): void {
        this.disableEdit = true;
        this.verificaPermissoes();
    }

    atualizaPermissoesReserva(): void {
        const atualizaPermissoesReservaRequest: AtualizaPermissoesReservaRequest = {
            Empresa: this._session.empresa,
            Revenda: this._session.revenda,
            Usuario: this._session.usuario,
            Veiculo: this.dadosVeiculo.Veiculo
        }
        this._loading.start();
        this.subscriptions.add(
            this._reservaVeiculoContextService.atualizaPermissoesReserva(atualizaPermissoesReservaRequest).subscribe(
                (result: AtualizaPermissoesReservaResult) => {
                    this.permissoes = result;
                    this.btnCancelarReserva(this.permissoes.BotaoCancelarReserva, this.form.get('Reservado').value);
                    if (this.permissoes.MostraSituacaoNegociacao) {
                        this.textoSituacao = this.permissoes.TextoSituacaoNegociacao;
                        this.disableCancelReserva = true;
                    } else {
                        if (this.permissoes.TelaManutencaoReserva) {
                            if (this.dadosVeiculo.Situacao === 'VE') {
                                this._toasterService.pop('warning', 'Atenção!', 'Situação do veículo está como Vendido.');
                            } else {
                                this.disableEdit = false;
                            }
                        }
                    }
                }).add(() => { this._loading.stop(); })
        );
    }

    btnCancelarReserva(permissao: boolean, reservado: string): void {
        this.disableCancelReserva = (permissao && reservado === 'N' ? true : false);
    }

    verificaPermissoes(): void {
        this.disableSave = false;
        if (this.permissoes.AbaReservaFuncao53) {
            this.form.get('TipoReserva').enable();
            this.btnCancelarReserva(this.permissoes.BotaoCancelarReserva, this.form.get('Reservado').value);
            if (this.permissoes.ClienteReserva) this.habilitaCampo(this.form.get('Cliente'));
            if (this.permissoes.VendedorRes) this.habilitaCampo(this.form.get('VendedorReserva'));
            if (this.permissoes.PropostaContratoCampoNome) this.nomePropostaContrato = this.permissoes.PropostaContratoCampoNome;
            if (this.permissoes.ObsReserva) this.habilitaCampo(this.form.get('ObservacaoReserva'));
            if (this.permissoes.DataInicioRes) this.configDataInicioRes.disabled = false;
            if (this.permissoes.DataFimRes) this.configDataFimRes.disabled = false;
        } else {
            this.desabilitaCampos();
        }
    }

    habilitaCampo(campo: AbstractControl): void {
        campo.enable();
    }

    desabilitaCampos(): void {
        this.form.get('Cliente').disable();
        this.form.get('TipoReserva').disable();
        this.form.get('VendedorReserva').disable();
        this.form.get('ObservacaoReserva').disable();
        this.form.get('LocContratoReserva').disable();
        this.form.get('Reservado').disable();
        if (this.permissoes.DataInicioRes) this.configDataInicioRes.disabled = true;
        if (this.permissoes.DataFimRes) this.configDataFimRes.disabled = true;
    }

    private _carregarForm(resp: ConsultaReservaVeiculoModel): void {
        this.disableCancelReserva = (resp.Reservado === 'N' ? true : false);
        this.form.patchValue({
            Veiculo: resp.Veiculo,
            Modelo: resp.Modelo,
            DesModelo: resp.DesModelo,
            Situacao: resp.Situacao,
            Cliente: resp.ClienteReserva,
            VendedorReserva: resp.VendedorReserva,
            TipoReserva: resp.TipoReserva,
            ObservacaoReserva: resp.ObservacaoReserva,
            LocContratoReserva: resp.LocContratoReserva,
            Reservado: resp.Reservado,
            DtaFimReserva: (resp.DtaFimReserva != null ? new LinxDate(resp.DtaFimReserva) : null),
            DtaReserva: (resp.DtaFimReserva != null ? new LinxDate(resp.DtaReserva) : null),
        });
    }

}
