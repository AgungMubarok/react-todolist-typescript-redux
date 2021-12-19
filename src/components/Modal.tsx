import React from 'react';

interface Props {
  show?: boolean;
  title?: string;
  onClose?: () => void;
}

export const Modal: React.FC<Props> = ({ show, title, children, onClose }) => {
  return (
    <div
      className={`
        fixed black-sy w-screen h-screen inset-0 flex justify-center items-center text-black transform transition duration-200 ease-in-out
        ${show ? 'scale-100' : 'scale-0'}
      `}
    >
      <div className="bg-gray-200 rounded">
        <button
          className="text-3xl font-bold px-3"
          onClick={onClose}
          type="button"
        >
          &#x2715;
        </button>
        <div className="px-3 pb-3">
          <p className="font-bold text-center capitalize">{title}</p>
          <div className="py-10">{children}</div>
        </div>
      </div>
    </div>
  );
};
