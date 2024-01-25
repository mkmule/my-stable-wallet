'use client';

interface Props {
  summaryList: [string, string | null][];
}

const SendSummary = ({ summaryList }: Props) => {
  const lastItem = summaryList[summaryList.length - 1];
  const subItems = summaryList.slice(0, summaryList.length - 1);

  return (
    <div>
      {subItems.map(([label, value]) => (
        <div className="flex justify-between items-center">
          <div className="text-xs">{label}</div>
          <div className="text-xs opacity-70">{value || '-'}</div>
        </div>
      ))}
      <div className="mt-2 pt-2 border-gray-200 border-t">
        <div className="flex justify-between items-center">
          <div className="text-xs">{lastItem[0]}</div>
          <div className="text-xs opacity-70">{lastItem[1] || '-'}</div>
        </div>
      </div>
    </div>
  );
};

export default SendSummary;
