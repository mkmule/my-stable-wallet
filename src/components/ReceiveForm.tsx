'use client';

import { Wallet } from '@/models/transaction';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

interface Props {
  wallet: Wallet;
}

const ReceiveForm = ({ wallet }: Props) => {

  const handleAddressClick = () => {
    navigator.clipboard.writeText(wallet.address);

  };

  return (
    <div>
      <div className="text-m">Your wallet address:</div>
      <button className="text-sm opacity-70 cursor-pointer hover:opacity-100" onClick={handleAddressClick}>
        <ClipboardDocumentListIcon className="w-4 h-4 inline-block mr-1" />
        {wallet.address}
      </button>
    </div>
  );
};

export default ReceiveForm;
