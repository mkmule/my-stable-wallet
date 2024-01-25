import MyBalance from '@/components/MyBalance';
import SendForm from '@/components/SendForm';
import MyTransactions from '@/components/MyTransactions';
import { CURRENCY_MSC } from '@/models/currency';
import { Amount } from '@/models/transaction';


const availableAmount: Amount = {
  currency: CURRENCY_MSC,
  value: 12.44,
};

const DashboardPage = async () => {

  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="p-2">
            <h4 className="text-xl border-gray-200 border-b mb-2">Available balance</h4>
            <MyBalance availableAmount={availableAmount} />
          </div>
          <div className="bg-amber-300">
            <SendForm />
          </div>
        </div>
        <div className="col-span-9 bg-amber-400">
          <MyTransactions />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
