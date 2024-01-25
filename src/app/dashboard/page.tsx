import MyBalance from '@/components/MyBalance';
import SendForm from '@/components/SendForm';
import MyTransactions from '@/components/MyTransactions';

const DashboardPage = async () => {

  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <div className="bg-amber-200">
            <MyBalance />
          </div>
          <div className="bg-amber-300">
            <SendForm />
          </div>
        </div>
        <div className="col-span-10 bg-amber-400">
          <MyTransactions />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
