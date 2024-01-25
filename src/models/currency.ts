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

export const CURRENCY_MSC: Currency = {
  code: 'MSC',
  displayName: 'My Stable Coin',
  iconUrl: 'https://static.m2.com/img/mmx.svg',
  name: 'My Stable Coin',
  precision: 8,
  type: CurrencyType.DIGITAL,
};

export const CURRENCY_USD: Currency = {
  code: 'USD',
  displayName: 'US Dollar',
  iconUrl: 'https://something',
  name: 'US Dollar',
  precision: 2,
  type: CurrencyType.FIAT,
};
