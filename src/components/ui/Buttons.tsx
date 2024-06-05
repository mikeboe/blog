import React from 'react';
import { classNames } from '../functions/classNames';

type PrimaryButtonProps = {
  onClick: () => void;
  label: string;
  marginTop: string;
};

const PrimaryButton = ({ onClick, label, marginTop }: PrimaryButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${marginTop} rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700`}
    >
      {label}
    </button>
  );
};

type SecondaryButtonProps = {
  onClick: () => void;
  label: string;
  showBorder?: boolean;
  showArrow?: boolean;
  marginTop?: string;
};

const SecondaryButton = ({
  onClick,
  label,
  showBorder,
  showArrow,
  marginTop,
}: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames(
        showBorder
          ? 'rounded-md px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300'
          : 'px-2.5 py-1.5',
        `${marginTop} text-sm font-semibold leading-6 dark:text-white text-gray-900`,
      )}
    >
      {label} {showArrow && <span aria-hidden="true">&rarr;</span>}
    </button>
  );
};

type PrimaryLinkButtonProps = {
  to: string;
  label: string;
  inverted?: boolean;
};

const PrimaryLinkButton = ({ to, label, inverted }: PrimaryLinkButtonProps) => {
  return (
    <a
      href={to}
      className={`rounded-md ${inverted ? 'bg-white text-green-700 ' : 'bg-green-700 text-white hover:bg-green-500'} px-3 py-2 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700`}
    >
      {label}
    </a>
  );
};

type SecondaryLinkButtonProps = {
  to: string;
  label: string;
  showBorder?: boolean;
  showArrow?: boolean;
  arrowLeft?: boolean;
  marginTop?: string;
};

const SecondaryLinkButton = ({
  to,
  label,
  showBorder,
  showArrow,
  arrowLeft,
  marginTop,
}: SecondaryLinkButtonProps) => {
  return (
    <a
      href={to}
      className={classNames(
        showBorder
          ? 'rounded-md px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300'
          : 'px-2.5 py-1.5',
        `${marginTop} text-sm font-semibold leading-6 dark:text-white text-gray-900`,
      )}
    >
      {arrowLeft && <span aria-hidden="true">&larr;</span>} {label} {showArrow && <span aria-hidden="true">&rarr;</span>}
    </a>
  );
};
export {
  PrimaryButton,
  SecondaryButton,
  PrimaryLinkButton,
  SecondaryLinkButton,
};
