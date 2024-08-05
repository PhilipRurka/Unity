import clsx from 'clsx';
import React from 'react';

import type { IconType } from '@unity/types';

const PlusIcon = ({ className, size }: IconType) => {
  const width = `w-${size}`;
  const height = `h-${size}`;

  return (
    <svg
      className={clsx(className, width, height)}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default PlusIcon;
