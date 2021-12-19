import React from 'react';

interface Props {
  onChange?: (evt: { target: { value: any } }) => void;
  value?: string | '';
  defaultValue?: string;
}

export const Input: React.FC<Props> = ({ onChange, value, defaultValue }) => {
  return (
    <input
      className="border-2 border-gray-300 rounded p-3 w-full"
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
    />
  );
};
