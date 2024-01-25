export enum CurrencyType {
  DIGITAL,
  FIAT,
}

export interface Currency {
  code: string;
  displayName: string;
  iconUrl: string;
  name: string;
  precision: number;
  type: CurrencyType;
}
