'use client';

interface Props {
  label: string;
  fullWidth?: boolean;
  handleClick: () => void;
}

const Button = ({ label, fullWidth, handleClick }: Props) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${fullWidth ? 'w-full' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
