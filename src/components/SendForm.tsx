'use client';
import { Amount } from '@/models/transaction';

interface Props {
  availableAmount: Amount;
}

const SendForm = ({ availableAmount }: Props) => {
  return (
    <div>
      this is send form
    </div>
  );
};

export default SendForm;
