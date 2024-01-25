'use client';

import { Amount } from '@/models/transaction';
import Input from '@/components/Input';
import Button from '@/components/Button';
import SendSummary from '@/components/SendForm/SendSummary';
import { useEffect, useMemo, useState } from 'react';
import { formatCurrencyNumber, parseFormattedNumber } from '@/utils/formatting';
import { CURRENCY_USD } from '@/models/currency';

const ADDRESS_LENGTH = 22;
const referenceCurrency = CURRENCY_USD;
const exchangeRateStub = 0.5;
const transactionFee = 0.03;
const summaryListSubTemplate: [string, string | null][] = [
  ['Inserted amount', null],
  ['Estimated fee', null],
];
const summaryListTotalTemplate: [string, string | null][] = [
  ['You are sending', null],
  [`You are sending (in ${referenceCurrency.code})`, null],
];

interface Props {
  availableAmount: Amount;
}

const SendForm = ({ availableAmount }: Props) => {
  const [insertedAmount, setInsertedAmount] = useState('');
  const [insertedAddress, setInsertedAddress] = useState('');

  const [parsedAmount, setParsedAmount] = useState(0);
  const [feeAmount, setFeeAmount] = useState(0);
  const [expectedSendAmount, setExpectedSendAmount] = useState(0);

  const [warningMessageAmount, setWarningMessageAmount] = useState('');
  const [warningMessageAddress, setWarningMessageAddress] = useState('');

  const [summaryListSub, setSummaryListSub] = useState(summaryListSubTemplate);
  const [summaryListTotal, setSummaryListTotal] = useState(summaryListTotalTemplate);

  useEffect(() => {
    const parsedAmount = parseFormattedNumber(insertedAmount, availableAmount.currency.precision);

    if (parsedAmount != null) {
      const calculatedFee = parsedAmount * transactionFee;
      const totalCost = parsedAmount + calculatedFee;

      if (totalCost < availableAmount.value) {
        setParsedAmount(parsedAmount);
        setFeeAmount(calculatedFee);
        setExpectedSendAmount(parsedAmount - calculatedFee);
        setWarningMessageAmount('');
      } else {
        setWarningMessageAmount('Please set a valid amount, lower then your balance');
      }

      return;
    }

    setParsedAmount(0);
    setFeeAmount(0);
    setExpectedSendAmount(0);
  }, [availableAmount, insertedAmount]);

  useEffect(() => {
    const newSummaryListSub = [...summaryListSubTemplate];
    newSummaryListSub[0][1] = formatCurrencyNumber(parsedAmount, availableAmount.currency.precision);
    newSummaryListSub[1][1] = formatCurrencyNumber(feeAmount, availableAmount.currency.precision);

    const newSummaryListTotal = [...summaryListTotalTemplate];
    newSummaryListTotal[0][1] = formatCurrencyNumber(expectedSendAmount, availableAmount.currency.precision);
    newSummaryListTotal[1][1] = formatCurrencyNumber(expectedSendAmount * exchangeRateStub, referenceCurrency.precision);

    setSummaryListSub(newSummaryListSub);
    setSummaryListTotal(newSummaryListTotal);
  }, [availableAmount, parsedAmount, feeAmount, expectedSendAmount]);

  useEffect(() => {
    // Possible to write using useMemo also which will avoid usage of state

    if (insertedAddress.length && insertedAddress.length != ADDRESS_LENGTH) {
      setWarningMessageAddress(`Please insert a valid address, ${ADDRESS_LENGTH} characters`);
    } else {
      setWarningMessageAddress('');
    }
  }, [insertedAddress]);

  const handleConfirmButtonClick = () => {

  };

  const confirmButtonDisabled = useMemo(() => {
    if (warningMessageAmount) {
      // Check warnings
      return true;
    }

    // Check inputs
    return !parsedAmount || !insertedAddress;
  }, [parsedAmount, insertedAddress, warningMessageAmount]);

  return (
    <div>
      <p className="text-sm opacity-70">
        You can only send amounts below your available balance.
        Amount should include an estimated transaction fee of {transactionFee * 100}%.</p>
      <div className="mt-2">
        <Input
          label={`Amount (in ${availableAmount.currency.code})`}
          labelFor="input-amount"
          placeholder={'Ex: 12.55'}
          value={insertedAmount}
          handleChange={setInsertedAmount}
        />
        {warningMessageAmount && <div className="text-xs text-red-500 mt-0.5 ml-3">{warningMessageAmount}</div>}
      </div>
      <div className="mt-2">
        <Input
          label={'Destination address'}
          labelFor="input-address"
          placeholder={'Ex: n0yrf2493p83kkfjhx0wlh'}
          value={insertedAddress}
          handleChange={setInsertedAddress}
        />
        {warningMessageAddress && <div className="text-xs text-red-500 mt-0.5 ml-3">{warningMessageAddress}</div>}
      </div>
      <div className="mt-2">
        <h4 className="text-sm font-medium text-gray-900">Summary</h4>
        <div className="mt-1">
          <SendSummary summaryListSub={summaryListSub} summaryListTotal={summaryListTotal} />
        </div>
      </div>
      <div className="mt-2">
        <Button label={'Confirm'} fullWidth disabled={confirmButtonDisabled} handleClick={handleConfirmButtonClick} />
      </div>
    </div>
  );
};

export default SendForm;
