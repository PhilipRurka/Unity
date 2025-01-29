import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { EditIcon, PlusInCircleIcon, XInCircleIcon } from '../Icons';
import FilterIcon from '../Icons/Filter';
import PlusIcon from '../Icons/Plus';
import SaveIcon from '../Icons/SaveIcon';
import TriangleDownCircle from '../Icons/TriangleDownCircle';
import TriangleUpCircle from '../Icons/TriangleUpCircle';

type ButtonProps = ButtonContentProps & {
  link?: string;
};

type ButtonDefaultProps = {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  color: 'black' | 'red' | 'green';
  isFull?: boolean;
  onClick?: () => void;
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
};

type ButtonWithoutIconProps = ButtonDefaultProps;

type ButtonWithIconProps = ButtonDefaultProps & {
  iconPosition: 'left' | 'right';
  icon: Icons | undefined;
};

export type Icons =
  | 'plus'
  | 'filter'
  | 'plusInCircle'
  | 'xInCircle'
  | 'edit'
  | 'save'
  | 'triangleUpCircle'
  | 'triangleDownCircle';

type ButtonIconProps = {
  icon: Icons | undefined;
};

type ButtonContentProps = ButtonWithoutIconProps | ButtonWithIconProps;

const ButtonIcon = ({ icon }: ButtonIconProps) => (
  <>
    {icon === 'edit' && <EditIcon size="5" className="h-full" />}
    {icon === 'filter' && <FilterIcon size="5" className="h-full" />}
    {icon === 'plus' && <PlusIcon size="5" className="h-full" />}
    {icon === 'plusInCircle' && <PlusInCircleIcon size="5" className="h-full" />}
    {icon === 'xInCircle' && <XInCircleIcon size="5" className="h-full" />}
    {icon === 'save' && <SaveIcon size="5" className="h-full" />}
    {icon === 'triangleDownCircle' && <TriangleDownCircle size="5" className="h-full" />}
    {icon === 'triangleUpCircle' && <TriangleUpCircle size="5" className="h-full" />}
  </>
);

const ButtonContent = (props: ButtonContentProps) => {
  const { size, color, isFull, onClick, children, disabled } = props;

  const hasIcon = (propsToCheck: ButtonContentProps): propsToCheck is ButtonWithIconProps =>
    'iconPosition' in propsToCheck && 'icon' in propsToCheck;

  const colorTheme = `${color}-${isFull ? 'full' : 'inverted'}`;

  const attributes = props.type ? { type: props.type } : {};

  return (
    <button
      className={clsx(
        'flex items-center rounded-lg border border-solid transition-colors',
        size === 'small' && 'p-2 text-sm',
        size === 'medium' && 'px-6 py-2 text-base font-medium',
        size === 'large' && 'px-8 py-3 text-lg font-medium',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',

        colorTheme === 'black-full' && 'border-black bg-black text-white hover:bg-white hover:text-black',
        colorTheme === 'black-inverted' && 'border-black bg-white text-black hover:bg-black hover:text-white',

        colorTheme === 'red-full' && 'border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500',
        colorTheme === 'red-inverted' && 'border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white',

        colorTheme === 'green-full' && 'border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-500',
        colorTheme === 'green-inverted' &&
          'border-green-500 bg-white text-green-500 hover:bg-green-500 hover:text-white'
      )}
      onClick={onClick}
      disabled={disabled}
      {...attributes}
    >
      {hasIcon(props) && (
        <div
          className={clsx(props.iconPosition === 'left' && 'pr-1', props.iconPosition === 'right' && 'order-last pl-8')}
        >
          <ButtonIcon icon={props.icon} />
        </div>
      )}
      {children}
    </button>
  );
};

const Button = ({ link, children, ...rest }: ButtonProps) => (
  <div data-component="Button">
    {link ? (
      <Link href={link}>
        <ButtonContent {...rest}>{children}</ButtonContent>
      </Link>
    ) : (
      <ButtonContent {...rest}>{children}</ButtonContent>
    )}
  </div>
);

export default Button;
