import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ConsultaReservaVeiculoModel } from '../../models/reserva-veiculo.models';
import { TabsManutencaoReservaVeiculo } from './page-manutencao-reserva-veiculo.enum';

@Component({
    selector: 'linx-manutencao-reserva-veiculo',
    templateUrl: './page-manutencao-reserva-veiculo.component.html',
    styleUrls: ['./page-manutencao-reserva-veiculo.component.scss']
})
export class PageManutencaoReservaVeiculoComponent implements OnInit  {

    readonly TAB_CONSULTA = TabsManutencaoReservaVeiculo.TAB_CONSULTA;
    readonly TAB_MANUTENCAO = TabsManutencaoReservaVeiculo.TAB_MANUTENCAO;

    public selected = new FormControl(this.TAB_CONSULTA);

    public dadosVeiculo: ConsultaReservaVeiculoModel;

    isDisabledManutencao: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    tabChange(event: MatTabChangeEvent): void {
        this.selected.setValue(event.index);
        if (this.selected.value === 0) this.isDisabledManutencao = true;
    }

    veiculoSelecionado(veiculo: ConsultaReservaVeiculoModel): void {
        this.dadosVeiculo = veiculo;
        if(this.dadosVeiculo) this.isDisabledManutencao = false;
    }

    verificaCancelarReserva(cancelarReservaMudaAba: boolean): void {
        if(cancelarReservaMudaAba) this.selected.setValue(this.TAB_CONSULTA);
    }

}
