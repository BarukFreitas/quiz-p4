import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  color?: 'primary' | 'secondary' | 'accent' | 'text-base' | 'text-secondary';
}

const Typography: React.FC<TypographyProps> = ({ children, variant, color, ...props }) => {
  const Tag = variant;
  let className = '';
  const colorClasses = {
    primary: 'text-[#ffe52c]',
    secondary: 'text-[#7fe6ef]',
    accent: 'text-[#faa622]',
    'text-base': 'text-gray-800',
    'text-secondary': 'text-gray-600',
  };

  switch (variant) {
    case 'h1':
      className = 'text-3xl font-bold';
      break;
    case 'h2':
      className = 'text-2xl font-semibold';
      break;
    case 'h3':
      className = 'text-xl font-medium';
      break;
    case 'p':
      className = 'text-base';
      break;
    case 'span':
      className = 'text-sm';
      break;
    default:
      className = 'text-base';
  }

  const textColorClass = colorClasses[color || 'text-base'] || 'text-gray-800';

  return (
    <Tag {...props} className={`${className} ${textColorClass} ${props.className}`}>
      {children}
    </Tag>
  );
};

export default Typography;