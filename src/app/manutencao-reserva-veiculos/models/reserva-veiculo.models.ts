import { LinxDate } from "@linx/shared-libraries/utils";

export interface ConsultaReservaVeiculoRequest {
	Empresa: number;

	Revenda: number;

	Usuario: number;

	Placa?: string;

	Veiculo?: string;

	Chassi?: string;

	Departamento?: string;

	DepartamentosSelecionados?: string;

	VendedoresSelecionados?: string;

	Cliente?: number;

	PeriodoDataInicial?: LinxDate;

	PeriodoDataFinal?: LinxDate;

	/**
	 * 0 = Sim
	 * 1 = Não
	 * 2 = Todos
	 */
	Reservado?: number;

	/**
	 * 0 = Sim
	 * 1 = Não
	 * 2 = Todos
	 */
	Vendido?: number;

	/**
	 * 0 = Sim
	 * 1 = Não
	 * 2 = Todos
	 */
	Negociado?: number;

	PerguntaCancelarTodasReservas?: string;
}

export interface ConsultaReservaVeiculoModel {
    Dta(Dta: any): unknown;
	NomeVendedor?: string;

	NomeCliente?: string;

	DesModelo?: string;

	Proposta?: number;

	Placa?: string;

	/**
	 * VEI_VEICULO.EMPRESA
	 */
	Empresa: number;

	/**
	 * VEI_VEICULO.VEICULO
	 */
	Veiculo: string;

	/**
	 * VEI_VEICULO.COR
	 */
	Cor: string;

	/**
	 * VEI_VEICULO.CHASSI
	 */
	Chassi: string;

	/**
	 * VEI_VEICULO.TRIBUTA_FRETE
	 */
	TributaFrete: number;

	/**
	 * VEI_VEICULO.TRIBUTA_SEGURO
	 */
	TributaSeguro: number;

	/**
	 * VEI_VEICULO.TRIBUTA_VEICULO
	 */
	TributaVeiculo: number;

	/**
	 * VEI_VEICULO.TRIBUTA_OPCIONAIS
	 */
	TributaOpcionais: number;

	/**
	 * VEI_VEICULO.DEPARTAMENTO
	 */
	Departamento: number;

	/**
	 * VEI_VEICULO.REVENDA_ORIGEM
	 */
	RevendaOrigem: number;

	/**
	 * VEI_VEICULO.FORMULA
	 */
	Formula: string;

	/**
	 * VEI_VEICULO.CLIENTE_RESERVA
	 */
	ClienteReserva?: number;

	/**
	 * VEI_VEICULO.PEDIDO
	 */
	Pedido?: number;

	/**
	 * VEI_VEICULO.SITUACAO
	 */
	Situacao: string;

	/**
	 * VEI_VEICULO.MODELO
	 */
	Modelo: string;

	/**
	 * VEI_VEICULO.TIPO_COMERCIALIZACAO
	 */
	TipoComercializacao: string;

	/**
	 * VEI_VEICULO.DES_VEICULO
	 */
	DesVeiculo: string;

	/**
	 * VEI_VEICULO.NOVO_USADO
	 */
	NovoUsado: string;

	/**
	 * VEI_VEICULO.DTA_ENTRADA
	 */
	DtaEntrada: LinxDate;

	/**
	 * VEI_VEICULO.DTA_FAT_FABRICA
	 */
	DtaFatFabrica: LinxDate;

	/**
	 * VEI_VEICULO.DTA_INICIO_CORRECAO
	 */
	DtaInicioCorrecao: LinxDate;

	/**
	 * VEI_VEICULO.VAL_COMPRA
	 */
	ValCompra: number;

	/**
	 * VEI_VEICULO.VAL_CUSTO_CONTABIL
	 */
	ValCustoContabil: number;

	/**
	 * VEI_VEICULO.ALIQUOTA_IPI
	 */
	AliquotaIpi: number;

	/**
	 * VEI_VEICULO.RESERVADO
	 */
	Reservado: string;

	/**
	 * VEI_VEICULO.TIPO_VEICULO
	 */
	TipoVeiculo: string;

	/**
	 * VEI_VEICULO.DTA_VENDA
	 */
	DtaVenda?: LinxDate;

	/**
	 * VEI_VEICULO.DTA_FIM_CORRECAO
	 */
	DtaFimCorrecao?: LinxDate;

	/**
	 * VEI_VEICULO.DTA_COMPRA_FABRICA
	 */
	DtaCompraFabrica?: LinxDate;

	/**
	 * VEI_VEICULO.PRECO_CONCESSIONARIA
	 */
	PrecoConcessionaria?: number;

	/**
	 * VEI_VEICULO.NOTIFICACAO_CREDITO
	 */
	NotificacaoCredito?: number;

	/**
	 * VEI_VEICULO.DTA_NOTIFICACAO_CREDITO
	 */
	DtaNotificacaoCredito?: LinxDate;

	/**
	 * VEI_VEICULO.VAL_COMISSAO_CONCESSIONARIA
	 */
	ValComissaoConcessionaria?: number;

	/**
	 * VEI_VEICULO.VAL_COMISSAO_VENDEDOR
	 */
	ValComissaoVendedor?: number;

	/**
	 * VEI_VEICULO.FOTO_FRENTE
	 */
	FotoFrente?: string;

	/**
	 * VEI_VEICULO.FOTO_TRASEIRA
	 */
	FotoTraseira?: string;

	/**
	 * VEI_VEICULO.FOTO_LATERAL
	 */
	FotoLateral?: string;

	/**
	 * VEI_VEICULO.FOTO_INTERNA
	 */
	FotoInterna?: string;

	/**
	 * VEI_VEICULO.DTA_RECOMPRA
	 */
	DtaRecompra?: LinxDate;

	/**
	 * VEI_VEICULO.PLANO_CAPITALIZACAO
	 */
	PlanoCapitalizacao?: number;

	/**
	 * VEI_VEICULO.POSICAO_FISCAL
	 */
	PosicaoFiscal?: number;

	/**
	 * VEI_VEICULO.DTA_RESERVA
	 */
	DtaReserva?: LinxDate;

	/**
	 * VEI_VEICULO.EMPRESA_VENDEDOR_RESERVA
	 */
	EmpresaVendedorReserva?: number;

	/**
	 * VEI_VEICULO.REVENDA_VENDEDOR_RESERVA
	 */
	RevendaVendedorReserva?: number;

	/**
	 * VEI_VEICULO.VENDEDOR_RESERVA
	 */
	VendedorReserva?: number;

	/**
	 * VEI_VEICULO.DTA_FIM_RESERVA
	 */
	DtaFimReserva?: LinxDate;

	/**
	 * VEI_VEICULO.OBSERVACAO_RESERVA
	 */
	ObservacaoReserva?: string;

	/**
	 * VEI_VEICULO.EMPRESA_VENDEDOR_VEICULO
	 */
	EmpresaVendedorVeiculo?: number;

	/**
	 * VEI_VEICULO.REVENDA_VENDEDOR_VEICULO
	 */
	RevendaVendedorVeiculo?: number;

	/**
	 * VEI_VEICULO.VENDEDOR_VEICULO
	 */
	VendedorVeiculo?: number;

	/**
	 * VEI_VEICULO.EMPRESA_VENDEDOR_VD
	 */
	EmpresaVendedorVd?: number;

	/**
	 * VEI_VEICULO.REVENDA_VENDEDOR_VD
	 */
	RevendaVendedorVd?: number;

	/**
	 * VEI_VEICULO.VENDEDOR_VD
	 */
	VendedorVd?: number;

	/**
	 * VEI_VEICULO.EMPRESA_NFFRETE
	 */
	EmpresaNffrete?: number;

	/**
	 * VEI_VEICULO.REVENDA_NFFRETE
	 */
	RevendaNffrete?: number;

	/**
	 * VEI_VEICULO.NUMERO_NOTA_FISCAL_NFFRETE
	 */
	NumeroNotaFiscalNffrete?: number;

	/**
	 * VEI_VEICULO.SERIE_NOTA_FISCAL_NFFRETE
	 */
	SerieNotaFiscalNffrete?: string;

	/**
	 * VEI_VEICULO.TIPO_TRANSACAO_NFFRETE
	 */
	TipoTransacaoNffrete?: string;

	/**
	 * VEI_VEICULO.CONTADOR_NFFRETE
	 */
	ContadorNffrete?: number;

	/**
	 * VEI_VEICULO.EMPRESA_NFSAIDA
	 */
	EmpresaNfsaida?: number;

	/**
	 * VEI_VEICULO.REVENDA_NFSAIDA
	 */
	RevendaNfsaida?: number;

	/**
	 * VEI_VEICULO.NUMERO_NOTA_NFSAIDA
	 */
	NumeroNotaNfsaida?: number;

	/**
	 * VEI_VEICULO.SERIE_NOTA_FISCAL_NFSAIDA
	 */
	SerieNotaFiscalNfsaida?: string;

	/**
	 * VEI_VEICULO.TIPO_TRANSACAO_NFSAIDA
	 */
	TipoTransacaoNfsaida?: string;

	/**
	 * VEI_VEICULO.CONTADOR_NFSAIDA
	 */
	ContadorNfsaida?: number;

	/**
	 * VEI_VEICULO.NUMERO_PORTAS
	 */
	NumeroPortas?: number;

	/**
	 * VEI_VEICULO.NUMERO_NOTA_VENDA_DIRETA
	 */
	NumeroNotaVendaDireta?: number;

	/**
	 * VEI_VEICULO.SERIE_NOTA_FISCAL_VENDA_DIRETA
	 */
	SerieNotaFiscalVendaDireta?: string;

	/**
	 * VEI_VEICULO.TIPO_TRANSACAO_VENDA_DIRETA
	 */
	TipoTransacaoVendaDireta?: string;

	/**
	 * VEI_VEICULO.CONTADOR_VENDA_DIRETA
	 */
	ContadorVendaDireta?: number;

	/**
	 * VEI_VEICULO.EMPRESA_NFENTRADA
	 */
	EmpresaNfentrada?: number;

	/**
	 * VEI_VEICULO.REVENDA_NFENTRADA
	 */
	RevendaNfentrada?: number;

	/**
	 * VEI_VEICULO.NUMERO_NOTA_NFENTRADA
	 */
	NumeroNotaNfentrada?: number;

	/**
	 * VEI_VEICULO.SERIE_NOTA_NFENTRADA
	 */
	SerieNotaNfentrada?: string;

	/**
	 * VEI_VEICULO.TIPO_TRANSACAO_NFENTRADA
	 */
	TipoTransacaoNfentrada?: string;

	/**
	 * VEI_VEICULO.CONTADOR_NFENTRADA
	 */
	ContadorNfentrada?: number;

	/**
	 * VEI_VEICULO.VAL_PRESENTE_VENDA
	 */
	ValPresenteVenda?: number;

	/**
	 * VEI_VEICULO.QUILOMETRAGEM
	 */
	Quilometragem?: number;

	/**
	 * VEI_VEICULO.OPCIONAIS
	 */
	Opcionais?: string;

	/**
	 * VEI_VEICULO.REVENDA_BANCO
	 */
	RevendaBanco?: number;

	/**
	 * VEI_VEICULO.BANCO
	 */
	Banco?: number;

	/**
	 * VEI_VEICULO.VALOR_GARANTIA
	 */
	ValorGarantia?: number;

	/**
	 * VEI_VEICULO.DTA_INCLUSAO_GARANTIA
	 */
	DtaInclusaoGarantia?: LinxDate;

	/**
	 * VEI_VEICULO.DTA_BAIXA_GARANTIA
	 */
	DtaBaixaGarantia?: LinxDate;

	/**
	 * VEI_VEICULO.NUMERO_NOTA_GARANTIA
	 */
	NumeroNotaGarantia?: string;

	/**
	 * VEI_VEICULO.SITUACAO_AUXILIAR
	 */
	SituacaoAuxiliar?: string;

	/**
	 * VEI_VEICULO.LOCALIZACAO
	 */
	Localizacao?: string;

	/**
	 * VEI_VEICULO.FORNECEDOR_VENDADIRETA
	 */
	FornecedorVendadireta?: number;

	/**
	 * VEI_VEICULO.MODALIDADE_VENDA_HONDA
	 */
	ModalidadeVendaHonda?: number;

	/**
	 * VEI_VEICULO.IPI_VENDA
	 */
	IpiVenda?: string;

	/**
	 * VEI_VEICULO.PRECO_MINIMO_COMERCIALIZACAO
	 */
	PrecoMinimoComercializacao?: number;

	/**
	 * VEI_VEICULO.TIPO_VENDA
	 */
	TipoVenda?: string;

	/**
	 * VEI_VEICULO.CATEGORIA_VEICULO
	 */
	CategoriaVeiculo: number;

	/**
	 * VEI_VEICULO.VAL_HOLDBACK
	 */
	ValHoldback?: number;

	/**
	 * VEI_VEICULO.VAL_BONUS
	 */
	ValBonus?: number;

	/**
	 * VEI_VEICULO.VAL_FLOOR_PLAN
	 */
	ValFloorPlan?: number;

	/**
	 * VEI_VEICULO.VAL_CONTRIBUICAO
	 */
	ValContribuicao?: number;

	/**
	 * VEI_VEICULO.FORMA_AQUISICAO
	 */
	FormaAquisicao?: string;

	/**
	 * VEI_VEICULO.FOTO_DOCUMENTO
	 */
	FotoDocumento?: string;

	/**
	 * VEI_VEICULO.ENVIA_FOTO_FRENTE
	 */
	EnviaFotoFrente?: string;

	/**
	 * VEI_VEICULO.ENVIA_FOTO_TRASEIRA
	 */
	EnviaFotoTraseira?: string;

	/**
	 * VEI_VEICULO.ENVIA_FOTO_LATERAL
	 */
	EnviaFotoLateral?: string;

	/**
	 * VEI_VEICULO.ENVIA_FOTO_INTERNA
	 */
	EnviaFotoInterna?: string;

	/**
	 * VEI_VEICULO.ENVIA_FOTO_DOCUMENTO
	 */
	EnviaFotoDocumento?: string;

	/**
	 * VEI_VEICULO.PAGO_FABRICA
	 */
	PagoFabrica?: string;

	/**
	 * VEI_VEICULO.VD_PAGA_FABRICA
	 */
	VdPagaFabrica?: string;

	/**
	 * VEI_VEICULO.EMPRESA_AFX
	 */
	EmpresaAfx?: number;

	/**
	 * VEI_VEICULO.REVENDA_AFX
	 */
	RevendaAfx?: number;

	/**
	 * VEI_VEICULO.BEM_AFX
	 */
	BemAfx?: number;

	/**
	 * VEI_VEICULO.AGREGADO_AFX
	 */
	AgregadoAfx?: number;

	/**
	 * VEI_VEICULO.LOCADO_CONTROLE_LOCACOES
	 */
	LocadoControleLocacoes?: string;

	/**
	 * VEI_VEICULO.LOC_PROPOSTA_RESERVA
	 */
	LocPropostaReserva?: number;

	/**
	 * VEI_VEICULO.LOC_CONTRATO_RESERVA
	 */
	LocContratoReserva?: number;

	/**
	 * VEI_VEICULO.ALIENADO
	 */
	Alienado?: string;

	/**
	 * VEI_VEICULO.FP_JUROS1
	 */
	FpJuros1?: number;

	/**
	 * VEI_VEICULO.FP_DIAS1
	 */
	FpDias1?: number;

	/**
	 * VEI_VEICULO.FP_JUROS2
	 */
	FpJuros2?: number;

	/**
	 * VEI_VEICULO.FP_DIAS2
	 */
	FpDias2?: number;

	/**
	 * VEI_VEICULO.FP_JUROS3
	 */
	FpJuros3?: number;

	/**
	 * VEI_VEICULO.FP_DIAS3
	 */
	FpDias3?: number;

	/**
	 * VEI_VEICULO.FP_JUROS4
	 */
	FpJuros4?: number;

	/**
	 * VEI_VEICULO.FP_DIAS4
	 */
	FpDias4?: number;

	/**
	 * VEI_VEICULO.FP_JUROS5
	 */
	FpJuros5?: number;

	/**
	 * VEI_VEICULO.FP_DIAS5
	 */
	FpDias5?: number;

	/**
	 * VEI_VEICULO.DTA_REVISAO_ENTREGA
	 */
	DtaRevisaoEntrega?: LinxDate;

	/**
	 * VEI_VEICULO.USU_REVISAO_ENTREGA
	 */
	UsuRevisaoEntrega?: number;

	/**
	 * VEI_VEICULO.ENVIADO_H3S
	 */
	EnviadoH3s?: string;

	/**
	 * VEI_VEICULO.EXIBE_ESTOQUEVEIC_MMC
	 */
	ExibeEstoqueveicMmc?: string;

	/**
	 * VEI_VEICULO.PCT_PIS_IMPORTA
	 */
	PctPisImporta?: number;

	/**
	 * VEI_VEICULO.PCT_COFINS_IMPORTA
	 */
	PctCofinsImporta?: number;

	/**
	 * VEI_VEICULO.PCT_BASE_PIS
	 */
	PctBasePis?: number;

	/**
	 * VEI_VEICULO.PCT_BASE_COFINS
	 */
	PctBaseCofins?: number;

	/**
	 * VEI_VEICULO.DTA_INICIO_CORRECAO_POSVENDA
	 */
	DtaInicioCorrecaoPosvenda?: LinxDate;

	/**
	 * VEI_VEICULO.DTA_FIM_CORRECAO_POSVENDA
	 */
	DtaFimCorrecaoPosvenda?: LinxDate;

	/**
	 * VEI_VEICULO.VERSAO_RENAULT
	 */
	VersaoRenault?: string;

	/**
	 * VEI_VEICULO.EXIBE_SITE_CARCLICK
	 */
	ExibeSiteCarclick?: string;

	/**
	 * VEI_VEICULO.QTD_PARCELAS
	 */
	QtdParcelas?: number;

	/**
	 * VEI_VEICULO.CODIGO_FCI
	 */
	CodigoFci?: string;

	/**
	 * VEI_VEICULO.PRC_IMPORTACAO_CI
	 */
	PrcImportacaoCi?: number;

	/**
	 * VEI_VEICULO.ORIGEM_VEICULO
	 */
	OrigemVeiculo?: string;

	/**
	 * VEI_VEICULO.PCT_IMPOSTO_IMPORTACAO
	 */
	PctImpostoImportacao?: number;

	/**
	 * VEI_VEICULO.ALIQ_MAJORACAO_COFINS
	 */
	AliqMajoracaoCofins?: number;

	/**
	 * VEI_VEICULO.VEI_OBS
	 */
	VeiObs?: string;

	/**
	 * VEI_VEICULO.DTA_ENTRADA_ESTOQUE
	 */
	DtaEntradaEstoque?: LinxDate;

	/**
	 * VEI_VEICULO.COM_AVALIAS
	 */
	ComAvalias?: string;

	/**
	 * VEI_VEICULO.DES_AVALIAS
	 */
	DesAvalias?: string;

	/**
	 * VEI_VEICULO.USU_RESP_COMUNICADO
	 */
	UsuRespComunicado?: number;

	/**
	 * VEI_VEICULO.DTA_COMUNICADO
	 */
	DtaComunicado?: LinxDate;

	/**
	 * VEI_VEICULO.USU_RESP_TRANSFERENCIA
	 */
	UsuRespTransferencia?: number;

	/**
	 * VEI_VEICULO.DTA_TRANSFERENCIA
	 */
	DtaTransferencia?: LinxDate;

	/**
	 * VEI_VEICULO.CFOP_VENDA_DIRETA
	 */
	CfopVendaDireta?: number;

	/**
	 * VEI_VEICULO.CEST
	 */
	Cest?: number;

	/**
	 * VEI_VEICULO.CODIGO_EXTARIFARIO
	 */
	CodigoExtarifario?: number;

	/**
	 * VEI_VEICULO.TIPO_RESERVA
	 */
	TipoReserva?: number;

	/**
	 * VEI_VEICULO.SITUACAO_DESBLOQUEIO
	 */
	SituacaoDesbloqueio?: string;

	/**
	 * VEI_VEICULO.MOTIVO_BLOQUEIO
	 */
	MotivoBloqueio?: string;

	/**
	 * VEI_VEICULO.PRECO_TEMP
	 */
	PrecoTemp?: number;

	/**
	 * VEI_VEICULO.COD_EAN_GTIN
	 */
	CodEanGtin?: string;

	/**
	 * VEI_VEICULO.COD_EAN_TRIB_GTIN
	 */
	CodEanTribGtin?: string;

	/**
	 * VEI_VEICULO.ID_VERSAO
	 */
	IdVersao?: number;

	/**
	 * VEI_VEICULO.ENVIADO_DATALAKE
	 */
	EnviadoDatalake?: string;

	/**
	 * VEI_VEICULO.DTA_ENVIADO_DATALAKE
	 */
	DtaEnviadoDatalake?: LinxDate;

	/**
	 * VEI_VEICULO.COD_SEGMENTO_NCM
	 */
	CodSegmentoNcm?: number;

	/**
	 * VEI_VEICULO.COD_FIPE
	 */
	CodFipe?: string;

	/**
	 * VEI_VEICULO.DTA_CANC_NOTA_VENDA_DIRETA
	 */
	DtaCancNotaVendaDireta?: LinxDate;

	/**
	 * VEI_VEICULO.REVENDA_TRANSF_TOYOTA
	 */
	RevendaTransfToyota?: number;

	/**
	 * VEI_VEICULO.COR_INTERNA
	 */
	CorInterna?: string;

	/**
	 * VEI_VEICULO.FOTO_EXTRA_1
	 */
	FotoExtra1?: string;

	/**
	 * VEI_VEICULO.FOTO_EXTRA_2
	 */
	FotoExtra2?: string;

	/**
	 * VEI_VEICULO.FOTO_CHASSI
	 */
	FotoChassi?: string;

	/**
	 * VEI_VEICULO.DESPACHANTE_RESTRICAO
	 */
	DespachanteRestricao?: string;

	/**
	 * VEI_VEICULO.DESPACHANTE_COMENTARIO
	 */
	DespachanteComentario?: string;

	/**
	 * VEI_VEICULO.M_ORDEM
	 */
	MOrdem?: number;

	/**
	 * VEI_VEICULO.PER_COMISSAO_CONCESSIONARIA
	 */
	PerComissaoConcessionaria?: number;

	/**
	 * VEI_VEICULO.DISPONIVEL_ECOMMERCE
	 */
	DisponivelEcommerce?: string;

	/**
	 * VEI_VEICULO.PRECO_ECOMMERCE
	 */
	PrecoEcommerce?: number;
}

export interface SalvaReservaVeiculoRequest {
	Empresa: number;

	Revenda: number;

	Usuario: number;

	Veiculo: string;

	DataProcessamento?: LinxDate;

	InfoVeiculo?: ConsultaReservaVeiculoModel;

	InserirReserva?: boolean;
}

export interface AtualizaPermissoesReservaRequest {
	Empresa: number;

	Revenda: number;

	Usuario: number;

	Veiculo?: string;
}

export interface AtualizaPermissoesReservaResult {
	PropostaContratoCampoNome: string;

	NomeCampoChassi: string;

	BotaoProcuraReserva: boolean;

	ClienteReserva: boolean;

	NomeReserva: boolean;

	ObsReserva: boolean;

	VendedorRes: boolean;

	DataInicioRes: boolean;

	DataFimRes: boolean;

	TelaManutencaoReserva: boolean;

	AbaReservaFuncao53: boolean;

	BotaoCancelarReserva: boolean;

	MostraSituacaoNegociacao: boolean;

	TextoSituacaoNegociacao: string;
}

export interface GerDepartamentoModuloSelRegistro {
	Empresa: number;

	Revenda: number;

	MutiplaEscolha: boolean;

	/**
	 * Itens a serem marcados como selecionados no retorno do endpoint.
	 */
	Selecionados: string;
}

export interface SelRegistroDepartamentoVendedorRequest {
	Empresa: number;

	Revenda: number;

	DepartamentosSelecionados?: string;

	Selecionados?: string;
}

export interface TipoReservaUsuarioResult {
	TipoReserva: number;

	DesTipoReserva: string;

	Usuario: number;
}

export interface SelRegistroReservaVeiculoVendedorRequest {
	Empresa: number;

	Revenda: number;

	Veiculo?: string;

	Selecionados?: string;
}

export interface CancelarReservaVeiculoRequest {
	Empresa: number;

	Revenda: number;

	Usuario: number;

	Veiculo?: string;

	AlteraStatusVeiculo?: boolean;

	PerguntaCancelarReserva?: string;
}

export interface listaReservaVeiculo{
    label: string;

    value: number;
}

export interface SelRegistroClienteRequest {
	Empresa: number;

	Revenda: number;

	ClienteSelecionados?: string;

	Selecionados?: string;
}
