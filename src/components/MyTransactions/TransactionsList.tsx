'use client'
import { Transaction } from '@/models/transaction';
import TransactionItem from '@/components/MyTransactions/TransactionItem';

interface Props {
  transactions: Transaction[];
}

const TransactionsList = ({ transactions }: Props) => {

  const handleTransactionClick = (transaction: Transaction) => {
    alert(`Showing transaction details: ${transaction.id}`);
  };

  return (
    <div>
      <ul>
        {transactions.map(transaction => (
          <div
            key={transaction.id}
            className="mb-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
            onClick={() => handleTransactionClick(transaction)}
          >
            <TransactionItem transaction={transaction} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
