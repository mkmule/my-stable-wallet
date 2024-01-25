'use client';

interface Props {
  summaryListSub: [string, string | null][];
  summaryListTotal: [string, string | null][];
}

const SendSummary = ({ summaryListSub, summaryListTotal }: Props) => {
  return (
    <div>
      {summaryListSub.map(([label, value]) => (
        <div key={label+value} className="flex justify-between items-center">
          <div className="text-xs">{label}</div>
          <div className="text-xs opacity-70">{value || '-'}</div>
        </div>
      ))}
      <div className="mt-2 pt-2 border-gray-200 border-t">
        {summaryListTotal.map(([label, value]) => (
          <div key={label+value} className="flex justify-between items-center">
            <div className="text-xs">{label}</div>
            <div className="text-xs opacity-70">{value || '-'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendSummary;
