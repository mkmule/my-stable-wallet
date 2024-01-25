import { Currency } from '@/models/currency';

export interface Amount {
  currency: Currency;
  value: number;
}

export enum TransactionType {
  BUY,
  SELL,
  DEPOSIT,
  WITHDRAW,
}

export interface Transaction {
  amount: Amount;
  date: string; // TODO: user Moment
  fromAddress: string;
  id: string;
  toAddress: string;
  type: TransactionType,
}
