'use client';
import { Amount } from '@/models/transaction';
import Input from '@/components/Input';
import Button from '@/components/Button';

const transactionFee = 0.03;

interface Props {
  availableAmount: Amount;
}

const SendForm = ({ availableAmount }: Props) => {

  const handleSendAmountChange = (value: string) => {

  };
  const handleConfirmButtonClick = () => {

  };

  return (
    <div>
      <p className="text-sm opacity-70">
        You can only send amounts below your available balance.
        Amount should include estimated transaction fee of {transactionFee * 100}%.</p>
      <div className="mt-2">
        <Input
          label={`Amount (in ${availableAmount.currency.code})`}
          placeholder={'Ex: 12.55'}
          handleChange={handleSendAmountChange}
        />
      </div>
      <div className="mt-2">
        <Input
          label={'Destination address'}
          placeholder={'Ex: n0yrf2493p83kkfjhx0wlh'}
          handleChange={handleSendAmountChange}
        />
      </div>
      <div className="mt-2">
        <Button label={'Confirm'} fullWidth handleClick={handleConfirmButtonClick} />
      </div>
    </div>
  );
};

export default SendForm;
