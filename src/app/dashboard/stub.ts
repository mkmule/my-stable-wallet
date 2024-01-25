import { Amount, Transaction, TransactionType } from '@/models/transaction';
import { CURRENCY_MSC } from '@/models/currency';
import { v4 as uuidv4 } from 'uuid';

export const availableAmount: Amount = {
  currency: CURRENCY_MSC,
  value: 1250000.00,
};
export const transactions: Transaction[] = [
  {
    amount: {
      value: 1500.0005,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 04, 2023, 9:42 PM',
    fee: {
      value: 12,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5zm347mawhq77dqv7zzn9',
    type: TransactionType.WITHDRAW,
  },
  {
    amount: {
      value: 4500.5,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 10, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.DEPOSIT,
  },
  {
    amount: {
      value: 55500,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 11, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.BUY,
  },
  {
    amount: {
      value: 1500.0005,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 04, 2023, 9:42 PM',
    fee: {
      value: 12,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5zm347mawhq77dqv7zzn9',
    type: TransactionType.WITHDRAW,
  },
  {
    amount: {
      value: 4500.5,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 10, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.DEPOSIT,
  },
  {
    amount: {
      value: 55500,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 11, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.BUY,
  },
  {
    amount: {
      value: 32555,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 14, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.SELL,
  },
  {
    amount: {
      value: 32555,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 14, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.SELL,
  },
  {
    amount: {
      value: 32555,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 14, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.SELL,
  },
  {
    amount: {
      value: 32555,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 14, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: uuidv4(),
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.SELL,
  },
];
