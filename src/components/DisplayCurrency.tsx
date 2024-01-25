import { Currency } from '@/models/currency';
import Image from 'next/image';

interface Props {
  currency: Currency;
}

const DisplayCurrency = ({ currency }: Props) => {
  return (
    <div className="flex whitespace-nowrap">
      <Image src={currency.iconUrl} alt={`${currency.name} preview icon`} width="36" height="36" />
      <div className="pl-2">
        <div className="text-m">{currency.code}</div>
        <div className="text-sm">{currency.displayName}</div>
      </div>
    </div>
  );
};

export default DisplayCurrency;
