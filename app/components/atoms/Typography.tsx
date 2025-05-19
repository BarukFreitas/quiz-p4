import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const Typography: React.FC<TypographyProps> = ({ children, variant, ...props }) => {
  const Tag = variant;
  let className = '';

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

  return <Tag {...props} className={`${className} ${props.className}`}>{children}</Tag>;
};

export default Typography;