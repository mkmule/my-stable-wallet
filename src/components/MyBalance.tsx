import { Amount } from '@/models/transaction';
import DisplayCurrency from '@/components/DisplayCurrency';
import DisplayAmount from '@/components/DisplayAmount';
import { CURRENCY_USD } from '@/models/currency';


interface Props {
  availableAmount: Amount;
}

const MyBalance = ({ availableAmount }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <DisplayCurrency currency={availableAmount.currency} />
      <div className="ml-2">
        <DisplayAmount amount={availableAmount} referenceCurrency={CURRENCY_USD} />
      </div>
    </div>
  );
};

export default MyBalance;
