import clsx from 'clsx';
import React from 'react';

import type { IconType } from '@unity/types';

const TriangleIcon = ({ className, size }: IconType) => {
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
    >
      <path
        d="m2.095 19.882 9.248-16.5c.133-.237.384-.384.657-.384.272 0 .524.147.656.384l9.248 16.5c.064.115.096.241.096.367 0 .385-.309.749-.752.749h-18.496c-.44 0-.752-.36-.752-.749 0-.126.031-.252.095-.367z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default TriangleIcon;
