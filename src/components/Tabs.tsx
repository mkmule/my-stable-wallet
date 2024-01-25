'use client';

interface Tab {
  id: string;
  displayText: string;
}

interface Props {
  fullWidth?: boolean;
  tabs: Tab[];
  active?: Tab;
  handleTabChange: (tab: Tab) => void;
}

const Tabs = ({ tabs, active, handleTabChange, fullWidth }: Props) => {

  return (
    <div>
      <ul
        className={`flex flex-wrap text-sm font-medium text-center text-gray-500 ${fullWidth ? 'w-full' : ''}`}
      >
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="me-2"
          >
            <button
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${tab.id === active?.id ? 'text-blue-600 bg-gray-100' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.displayText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
