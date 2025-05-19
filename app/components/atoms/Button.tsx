import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const primaryClasses = 'bg-[#ffe52c] hover:bg-[#faa622] text-black font-bold py-2 px-4 rounded shadow-md transition duration-300';
  const secondaryClasses = 'bg-[#c4d70c] hover:bg-[#7fe6ef] text-black font-bold py-2 px-4 rounded shadow-md transition duration-300';

  return (
    <button {...props} className={`${variant === 'primary' ? primaryClasses : secondaryClasses} ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;