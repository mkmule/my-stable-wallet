import { Transaction, TransactionType } from '@/models/transaction';
import {
  ArrowDownOnSquareIcon,
  ArrowUpOnSquareIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { useMemo } from 'react';
import DisplayAmount from '@/components/DisplayAmount';
import { CURRENCY_USD } from '@/models/currency';

interface Props {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: Props) => {
  const typeIcon = useMemo(() => {
    switch (transaction.type) {
      case TransactionType.BUY:
        return <PlusCircleIcon className="text-green-500" />;
      case TransactionType.SELL:
        return <MinusCircleIcon className="text-red-500" />;
      case TransactionType.DEPOSIT:
        return <ArrowUpOnSquareIcon className="text-green-500" />;
      case TransactionType.WITHDRAW:
        return <ArrowDownOnSquareIcon className="text-red-500" />;
      default:
        console.error('Unknown transaction type', transaction.type);
        return <QuestionMarkCircleIcon />;
    }
  }, [transaction]);

  const typeDisplayText = useMemo(() => {
    let prefix = 'Unknown Action';
    switch (transaction.type) {
      case TransactionType.BUY:
        prefix = 'Bought';
        break;
      case TransactionType.SELL:
        prefix = 'Sold';
        break;
      case TransactionType.DEPOSIT:
        prefix = 'Received';
        break;
      case TransactionType.WITHDRAW:
        prefix = 'Sent';
        break;
      default:
        console.error('Unknown transaction type', transaction.type);
    }

    return `${prefix} ${transaction.amount.currency.displayName}`;
  }, [transaction]);

  return (
    <div className="flex justify-between items-center">
      <div className="h-8 w-8">{typeIcon}</div>
      <div className="ml-2 flex flex-col">
        <div className="text-m">{typeDisplayText}</div>
        <div className="text-sm opacity-70">{transaction.date}</div>
      </div>
      <div className="ml-2 flex-grow">
        <DisplayAmount amount={transaction.amount} referenceCurrency={CURRENCY_USD} />
      </div>
    </div>
  );
};

export default TransactionItem;
