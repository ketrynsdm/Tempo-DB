import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    DynamicTableColumn,
    DynamicTableColumnDataType,
    DynamicTableColumnFilterType,
    DynamicTableOptions,
    LoadingService,
    SubscriptionsComponent,
} from '@linx/shared-libraries/utils';
import { ToasterService } from 'angular2-toaster';
import { PecFlagItemEstoqueItemModel, PecFlagItemEstoqueModel } from './models';
import { PecFlagItemEstoqueContextService } from './services';

@Component({
    templateUrl: './flag-item.component.html',
    styleUrls: ['./flag-item.component.scss'],
})
export class FlagItemComponent extends SubscriptionsComponent implements OnInit {
    form: FormGroup = this.fbFlag.group({
        Id: [null],
        Nome: [null, Validators.required],
        
    });

    tableColumnsConfig: DynamicTableColumn<PecFlagItemEstoqueModel>[] = [
        new DynamicTableColumn(
            'Id',
            'Código',
            DynamicTableColumnDataType.STRING,
            10,
            DynamicTableColumnFilterType.TEXTO
        ),
        new DynamicTableColumn(
            'Nome',
            'Descrição',
            DynamicTableColumnDataType.STRING,
            50,
            DynamicTableColumnFilterType.TEXTO
        ),
    ];
    tableColumnsConfigEst: DynamicTableColumn<PecFlagItemEstoqueModel>[] = 
    [
        new DynamicTableColumn(
            'Flag',
            'Cód.Flag',
            DynamicTableColumnDataType.STRING,
            10,
            DynamicTableColumnFilterType.TEXTO
        ),
        new DynamicTableColumn(
            'Codigo',
            'Cód.Item',
            DynamicTableColumnDataType.STRING,
            10,
            DynamicTableColumnFilterType.TEXTO
        ),
        new DynamicTableColumn(
            'TipoCod',
            'Tipo',
            DynamicTableColumnDataType.STRING,
            10,
            DynamicTableColumnFilterType.TEXTO
        ),
        new DynamicTableColumn(
            'Empresa',
            'Emp.',
            DynamicTableColumnDataType.STRING,
            10,
            DynamicTableColumnFilterType.TEXTO
        ),
        new DynamicTableColumn(
            'Revenda',
            'Rev.',
            DynamicTableColumnDataType.STRING,
            10,
            DynamicTableColumnFilterType.TEXTO
        ),
    ];

    tableOptionsConfig = new DynamicTableOptions('pecas.flag.item.itens', '')
        .setGeneralFilter(true)
        .setGeneralActionsButton(false)
        .setColumnsButton(true)
        .setLinesNumber(20)
        .setPaginator(true)
        .setFilterColumns(true)
        .setLoadPersonalSettings(false)
        .setBtnExcel(true, 'flag-item-estoque')
        .setBtnRestore(true)
        .setMenu(true);
        
    tableOptionsConfigEst = new DynamicTableOptions('pecas.flag.item.est', '')
        .setColumnsButton(false)
        .setLinesNumber(10)
        .setPaginator(true);

    constructor(
        private fbFlag: FormBuilder,
        private _loading: LoadingService,
        private _toaster: ToasterService,
        private flagItemEstoque: PecFlagItemEstoqueContextService
    ) {
        super();
    }

    ngOnInit() {
        this.getFlagItemEstoqueList();
    }

    onSubmit(): void {
        if (Number(this.form.get('Id').value) > 0) {
            this.putFlagItemEstoque();
        } else {
            this.postFlagItemEstoque();
        }
    }

    onInsert(): void {
        this.form.reset();
    }

    onDelete(): void {
        if (Number(this.form.get('Id').value) > 0) {
            this.deleteFlagItemEstoque();
        } else {
            this.form.reset();
        }
        this.getFlagItemEstoqueList();
    }

    onSelectingItem(item: PecFlagItemEstoqueModel): void {
        this.getFlagItemEstoque(item.Id);
    }

    private getFlagItemEstoqueList(): void {
        this._loading.start();
        this.subscriptions.add(
            this.flagItemEstoque
                .obterListaFlagItemEstoque()
                .subscribe((res: PecFlagItemEstoqueModel[]) => {
                    this.tableOptionsConfig.data = res;
                    if (Boolean(res[0].Id)) this.getFlagItemEstoque(res[0].Id);
                })
                .add(() => this._loading.stop())
        );
    }

    private getFlagItemEstoque(id: number): void {
        this._loading.start();
        this.subscriptions.add(
            this.flagItemEstoque
                .obterFlagItemEstoque(id)
                .subscribe((res: PecFlagItemEstoqueItemModel) => {
                    this.form.patchValue(res);
                    this.tableOptionsConfigEst.data = res.FlagsItemRevenda;
                })
                .add(() => this._loading.stop())
        );
    }

    private postFlagItemEstoque(): void {
        this._loading.start();
        this.subscriptions.add(
            this.flagItemEstoque
                .inserirFlagItemEstoque({
                    Id: 0,
                    Nome: this.form.get('Nome').value,
                })
                .subscribe((res: string) => {
                    this._toaster.pop('success', '', res);
                    this.getFlagItemEstoqueList();
                })
                .add(() => this._loading.stop())
        );
    }

    private putFlagItemEstoque(): void {
        console.log('sjkahdfkj', this.form.getRawValue())
        this._loading.start();
        this.subscriptions.add(
            this.flagItemEstoque
                .alterarFlagItemEstoque(this.form.getRawValue(), this.form.get('Id').value)
                .subscribe((res: string) => {
                    this._toaster.pop('success', '', res);
                    this.getFlagItemEstoqueList();
                })
                .add(() => this._loading.stop())
        );
    }

    private deleteFlagItemEstoque(): void {
        this._loading.start();
        this.subscriptions.add(
            this.flagItemEstoque
                .deletarFlagItemEstoque(this.form.get('Id').value)
                .subscribe((res: string) => {
                    this._toaster.pop('success', '', res);
                    this.getFlagItemEstoqueList();
                })
                .add(() => this._loading.stop())
        );
    }
}
