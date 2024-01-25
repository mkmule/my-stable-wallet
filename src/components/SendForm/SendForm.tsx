'use client';
import { Amount } from '@/models/transaction';
import Input from '@/components/Input';
import Button from '@/components/Button';
import SendSummary from '@/components/SendForm/SendSummary';
import { useState } from 'react';

const transactionFee = 0.03;
const summaryListTemplate: [string, string | null][] = [
  ['Inserted amount', null],
  ['Estimated fee', null],
  ['You are sending', null],
];

interface Props {
  availableAmount: Amount;
}

const SendForm = ({ availableAmount }: Props) => {
  const [summaryList, setSummaryList] = useState(summaryListTemplate);

  const handleSendAmountChange = (value: string) => {

  };
  const handleConfirmButtonClick = () => {

  };

  return (
    <div>
      <p className="text-sm opacity-70">
        You can only send amounts below your available balance.
        Amount should include an estimated transaction fee of {transactionFee * 100}%.</p>
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
        <h4 className="text-sm font-medium text-gray-900">Summary</h4>
        <div className="mt-1">
          <SendSummary summaryList={summaryList} />
        </div>
      </div>
      <div className="mt-2">
        <Button label={'Confirm'} fullWidth handleClick={handleConfirmButtonClick} />
      </div>
    </div>
  );
};

export default SendForm;
