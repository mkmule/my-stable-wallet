'use client';

import Tabs from '@/components/Tabs';
import { useState } from 'react';
import SendForm from '@/components/SendForm';
import { Amount } from '@/models/transaction';
import ReceiveForm from '@/components/ReceiveForm';

const wallet = {
  id: 'my-fancy-wallet-id',
  address: 'n0yrf2493p83kkfjhx0wlh',
};
const tabs = [
  {
    id: 'send-tab',
    displayText: 'Send',
  },
  {
    id: 'receive-tab',
    displayText: 'Receive',
  },
];

interface Props {
  availableAmount: Amount;
}

const ManageFunds = ({ availableAmount }: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="">
      <div>
        <Tabs tabs={tabs} active={activeTab} handleTabChange={setActiveTab} fullWidth />
      </div>
      <div className="bg-gray-100 rounded-b-lg p-4">
        {activeTab.id === 'send-tab' && <SendForm availableAmount={availableAmount} />}
        {activeTab.id === 'receive-tab' && <ReceiveForm wallet={wallet} />}
      </div>
    </div>
  );
};

export default ManageFunds;
