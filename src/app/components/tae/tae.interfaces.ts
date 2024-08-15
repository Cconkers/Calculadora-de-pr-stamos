export interface TaePayload {
  capital: number;
  gastosOrigen: number;
  gastosPeriodicos: number;
  periodo: PeriodoEnum;
  tin: number;
  plazo: number;
  tipoPlazo: PeriodoEnum;
  hasTinPosterior: boolean;
  tinPosterior: number;
  cambioTin: number;
}

export type PeriodoEnum = 'MENSUAL' | 'TRIMESTRAL' | 'SEMESTRAL' | 'ANUAL';

export interface TaeResponse {
  tasa: number;
  tasaLCCI: number;
}

