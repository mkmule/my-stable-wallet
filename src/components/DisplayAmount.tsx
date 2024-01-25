import { Currency } from '@/models/currency';
import { Amount } from '@/models/transaction';
import { useMemo } from 'react';
import { formatCurrencyNumber } from '@/utils/formatting';

const exchangeRateStub = 0.5;

interface Props {
  amount: Amount;
  referenceCurrency: Currency;
}

const DisplayAmount = ({ amount, referenceCurrency }: Props) => {

  const formattedValue = useMemo(() => {
    return formatCurrencyNumber(amount.value, amount.currency.precision);
  }, [amount]);
  const formattedReferenceValue = useMemo(() => {
    const convertedAmountValue = amount.value * exchangeRateStub;
    return formatCurrencyNumber(convertedAmountValue, referenceCurrency.precision);
  }, [amount, referenceCurrency]);

  return (
    <div className="whitespace-nowrap text-right">
      <div className="text-m">{amount.currency.code} {formattedValue}</div>
      <div className="text-sm">{referenceCurrency.code} {formattedReferenceValue}</div>
    </div>
  );
};

export default DisplayAmount;
