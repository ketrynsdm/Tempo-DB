import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseRequestService, LinxDialogConfirmationModel, SelRegistro } from '@linx/shared-libraries/utils';
import {
    AtualizaPermissoesReservaRequest,
    AtualizaPermissoesReservaResult,
    CancelarReservaVeiculoRequest,
    ConsultaReservaVeiculoModel,
    ConsultaReservaVeiculoRequest,
    GerDepartamentoModuloSelRegistro,
    SalvaReservaVeiculoRequest,
    SelRegistroClienteRequest,
    SelRegistroDepartamentoVendedorRequest,
    SelRegistroReservaVeiculoVendedorRequest,
    TipoReservaUsuarioResult
} from '../models/reserva-veiculo.models';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ReservaVeiculoContextService extends BaseRequestService {

	/**
	 * Consulta dos veiculos em reserva da tela de Manutenção de Reserva Veículos
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/ConsultaReservaVeiculo
	 *
	 * @param request -
	 */
	consultaReservaVeiculo(request: ConsultaReservaVeiculoRequest): Observable<ConsultaReservaVeiculoModel[]> {
		return this.post<ConsultaReservaVeiculoModel[]>(
			'Veiculos/Cadastros/ReservaVeiculos/ConsultaReservaVeiculo',
			request
		);
	}

	/**
	 * Salva a reserva do veiculo
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/SalvaReservaVeiculo
	 *
	 * @param pFiltro -
	 */
	salvaReservaVeiculo(pFiltro: SalvaReservaVeiculoRequest): Observable<string> {
		return this.post<string>(
			'Veiculos/Cadastros/ReservaVeiculos/SalvaReservaVeiculo',
			pFiltro
		);
	}

	/**
	 * Retorna o status atual na iniciação da tela que cada botão precisa ficar na tela de Manutenção reserva.
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/AtualizaPermissoesReserva
	 *
	 * @param request -
	 */
	atualizaPermissoesReserva(request: AtualizaPermissoesReservaRequest): Observable<AtualizaPermissoesReservaResult> {
		return this.post<AtualizaPermissoesReservaResult>(
			'Veiculos/Cadastros/ReservaVeiculos/AtualizaPermissoesReserva',
			request
		);
	}

	/**
	 * SelRegistro de selecao de Departamentos da tela de Manutenção de Reserva Veículos
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/SelRegistroDepartamento
	 *
	 * @param request -
	 */
	selRegistroDepartamento(request: GerDepartamentoModuloSelRegistro): Observable<SelRegistro> {
		return this.post<SelRegistro>(
			'Veiculos/Cadastros/ReservaVeiculos/SelRegistroDepartamento',
			request
		);
	}

	/**
	 * SelRegistro de selecao de Vendedores da tela de Manutenção de Reserva Veículos
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/SelRegistroVendedor
	 *
	 * @param request -
	 */
	selRegistroVendedor(request: SelRegistroDepartamentoVendedorRequest): Observable<SelRegistro> {
		return this.post<SelRegistro>(
			'Veiculos/Cadastros/ReservaVeiculos/SelRegistroVendedor',
			request
		);
	}

    /**
	 * SelRegistro de selecao de Cliente da tela de Manutenção de Reserva Veículos
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/SelRegistroCliente
	 *
	 * @param request -
	 */
	selRegistroCliente(request: SelRegistroClienteRequest): Observable<SelRegistro> {
		return this.post<SelRegistro>(
			'Veiculos/Cadastros/ReservaVeiculos/SelRegistroCliente',
			request
		);
	}

	/**
	 * Consulta tipos de reserva para aquele usuario, usados na tela de Manutenção de Reserva Veículos
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/ListaTipoReservaUsuario/{empresa}/{revenda}
	 *
	 * @param empresa -
	 * @param usuario -
	 * @param revenda -
	 */
	listaTipoReservaUsuario(empresa: number | string,  revenda: number | string, usuario?: number): Observable<TipoReservaUsuarioResult[]> {
		const mandatoryParams = [empresa, revenda];
		let optionalParams = new HttpParams();

		if (usuario !== undefined && usuario !== null)
			optionalParams = optionalParams.set('usuario', `${usuario}`);

		return this.get<TipoReservaUsuarioResult[]>(
			'Veiculos/Cadastros/ReservaVeiculos/ListaTipoReservaUsuario',
			{ mandatoryParams, optionalParams }
		);
	}

	/**
	 * SelRegistro de selecao de Vendedores da tela de Manutenção de Reserva Veículos na aba de Manuenção
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/SelRegistroReservaVeiculoVendedor
	 *
	 * @param pFiltro -
	 */
	selRegistroReservaVeiculoVendedor(pFiltro: SelRegistroReservaVeiculoVendedorRequest): Observable<SelRegistro> {
		return this.post<SelRegistro>(
			'Veiculos/Cadastros/ReservaVeiculos/SelRegistroReservaVeiculoVendedor',
			pFiltro
		);
	}

	/**
	 * Cancela TODAS as reservas de todos os veiculos consultados
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/CancelarTodasReservas
	 *
	 * @param request -
	 */
	cancelarTodasReservas(request: ConsultaReservaVeiculoRequest): Observable<string | LinxDialogConfirmationModel> {
		return this.post<string | LinxDialogConfirmationModel>(
			'Veiculos/Cadastros/ReservaVeiculos/CancelarTodasReservas',
			request
		);
	}

	/**
	 * Cancela a reserva daquele veiculo selecionado
	 *
	 * Endpoint: /Veiculos/Cadastros/ReservaVeiculos/CancelarReservaVeiculo
	 *
	 * @param pFiltro -
	 */
	cancelarReservaVeiculo(pFiltro: CancelarReservaVeiculoRequest): Observable<string | LinxDialogConfirmationModel> {
		return this.post<string | LinxDialogConfirmationModel>(
			'Veiculos/Cadastros/ReservaVeiculos/CancelarReservaVeiculo',
			pFiltro
		);
	}
}
