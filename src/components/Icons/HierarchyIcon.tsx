import clsx from 'clsx';

import { Icon } from '@/Types/icons';

const CloseIcon = ({ className, size }: Icon) => {
  const width = `w-${size}`;
  const height = `h-${size}`;

  return (
    <svg
      className={clsx(className, width, height)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M14 2v2h-4v-2h4zm2-2h-8v6h8v-6zm-10 20v2h-4v-2h4zm2-2h-8v6h8v-6zm14 2v2h-4v-2h4zm2-2h-8v6h8v-6zm-11-7v-3h-2v3h-8v5h2v-3h14v3h2v-5h-8z" />
    </svg>
  );
};

export default CloseIcon;