import MyBalance from '@/components/MyBalance';
import ManageFunds from '@/components/ManageFunds';
import MyTransactions from '@/components/MyTransactions';
import { CURRENCY_MSC } from '@/models/currency';
import { Amount, Transaction, TransactionType } from '@/models/transaction';


const availableAmount: Amount = {
  currency: CURRENCY_MSC,
  value: 12.44,
};
const transactions: Transaction[] = [
  {
    amount: {
      value: 124.65444,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 04, 2023, 9:42 PM',
    fee: {
      value: 12,
      currency: CURRENCY_MSC,
    },
    id: 'something-unique-1',
    toAddress: 'bc1qlkgp5zm347mawhq77dqv7zzn9',
    type: TransactionType.WITHDRAW,
  },
  {
    amount: {
      value: 655.123,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 10, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: 'something-unique-2',
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.DEPOSIT,
  },
  {
    amount: {
      value: 655.123,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 11, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: 'something-unique-3',
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.BUY,
  },
  {
    amount: {
      value: 655.123,
      currency: CURRENCY_MSC,
    },
    date: 'Sep 14, 2023, 9:42 PM',
    fee: {
      value: 44,
      currency: CURRENCY_MSC,
    },
    id: 'something-unique-4',
    toAddress: 'bc1qlkgp5ax347mawhq77dqv7zzn9',
    type: TransactionType.SELL,
  },
];

const DashboardPage = async () => {

  return (
    <div className="flex items-center justify-center">
      <div className="w-full grid grid-cols-12 gap-4 p-2">
        <div className="col-span-12 xl:col-span-3">
          <div>
            <h4 className="text-xl border-gray-200 border-b mb-2">Available balance</h4>
            <MyBalance availableAmount={availableAmount} />
          </div>
          <div className="mt-4">
            <h4 className="text-xl border-gray-200 border-b mb-2">Manage funds</h4>
            <ManageFunds availableAmount={availableAmount} />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-9">
          <h4 className="text-xl border-gray-200 border-b mb-2">My Transactions</h4>
          <MyTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
