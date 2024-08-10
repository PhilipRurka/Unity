import clsx from 'clsx';

export type PillProps = {
  text: string;
  color: 'green' | 'yellow' | 'red';
};

const Pill = ({ text, color }: PillProps) => (
  <div
    data-component="Pill"
    className={clsx(
      'inline-block rounded-full border border-solid px-4 py-1',
      color === 'green' && 'border-green-600 bg-green-200 text-green-600',
      color === 'yellow' && 'border-yellow-600 bg-yellow-200 text-yellow-600',
      color === 'red' && 'border-red-600 bg-red-200 text-red-600'
    )}
  >
    {text}
  </div>
);

export default Pill;
