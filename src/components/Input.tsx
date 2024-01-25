'use client';

import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props<T> {
  label: string;
  placeholder?: string;
  type?: string;
  handleChange: (val: T) => void;
}

const Input = <T, >({ label, type = 'text', placeholder, handleChange }: Props<T>) => {
  const uuid = useMemo(() => uuidv4(), []);

  return (
    <div>
      <label
        htmlFor={uuid}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={uuid}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
