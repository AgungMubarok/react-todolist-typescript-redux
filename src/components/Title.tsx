import React from 'react';

interface Props {
  text: string;
}

export const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="text-center font-extrabold text-xl md:text-3xl">{text}</div>
  );
};
