'use client';

interface Props {
  label: string;
  labelFor: string;
  value: string;
  placeholder?: string;
  type?: string;
  handleChange: (val: string) => void;
}

const Input = ({ label, labelFor, type = 'text', value, placeholder, handleChange }: Props) => {
  return (
    <div>
      <label
        htmlFor={labelFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={labelFor}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
