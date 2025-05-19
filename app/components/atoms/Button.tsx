import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const primaryClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
  const secondaryClasses = 'bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded';

  return (
    <button {...props} className={`${variant === 'primary' ? primaryClasses : secondaryClasses} ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;