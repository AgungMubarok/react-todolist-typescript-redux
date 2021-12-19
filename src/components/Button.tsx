import React from 'react';

interface Props {
  title: string;
  color?: string;
  size?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  block?: boolean;
}

export const Button: React.FC<Props> = ({
  title,
  color,
  size,
  type,
  onClick,
  block,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        font-bold rounded capitalize transition ease-in-out hover:bg-cyan-900 hover:text-white duration-200
        ${block ? 'w-full' : 'w-40'}
        ${size === 'medium' ? 'p-1' : 'p-3'}
        ${
          color === 'secondary'
            ? 'bg-blue-50 text-cyan-600'
            : 'bg-cyan-600 text-white'
        }
      `}
    >
      {title}
    </button>
  );
};
