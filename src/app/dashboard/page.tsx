import MyBalance from '@/components/MyBalance';
import ManageFunds from '@/components/ManageFunds';
import MyTransactions from '@/components/MyTransactions';
import { availableAmount, transactions } from '@/app/dashboard/stub';


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
