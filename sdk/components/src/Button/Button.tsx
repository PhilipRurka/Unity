// TODO: Allow for Link to be a prop and refactor to handle this. <Link> button </Link>
import clsx from 'clsx';
import React from 'react';

import { EditIcon, PlusInCircleIcon, XInCircleIcon } from '../Icons';
import FilterIcon from '../Icons/Filter';
import PlusIcon from '../Icons/Plus';

type ButtonDefaultProps = {
  size: 'small';
  children: React.ReactNode;
  color: 'black';
  isFull?: boolean;
  onClick?: () => void;
  type?: HTMLButtonElement['type'];
};

type ButtonWithoutIconProps = ButtonDefaultProps;

type ButtonWithIconProps = ButtonDefaultProps & {
  iconPosition: 'left' | 'right';
  icon: Icons | undefined;
};

export type Icons = 'plus' | 'filter' | 'plusInCircle' | 'xInCircle' | 'edit';

type ButtonIconProps = {
  icon: Icons | undefined;
};

type ButtonProps = ButtonWithoutIconProps | ButtonWithIconProps;

const ButtonIcon = ({ icon }: ButtonIconProps) => (
  <>
    {icon === 'edit' && <EditIcon size="5" className="h-full" />}
    {icon === 'filter' && <FilterIcon size="5" className="h-full" />}
    {icon === 'plus' && <PlusIcon size="5" className="h-full" />}
    {icon === 'plusInCircle' && <PlusInCircleIcon size="5" className="h-full" />}
    {icon === 'xInCircle' && <XInCircleIcon size="5" className="h-full" />}
  </>
);

const Button = (props: ButtonProps) => {
  const { size, color, isFull, onClick, children } = props;

  const hasIcon = (propsToCheck: ButtonProps): propsToCheck is ButtonWithIconProps =>
    'iconPosition' in propsToCheck && 'icon' in propsToCheck;

  const colorTheme = `${color}-${isFull ? 'full' : 'inverted'}`;

  const attributes = props.type ? { type: props.type } : {};

  return (
    <button
      data-component="Button"
      className={clsx(
        'flex cursor-pointer items-center rounded-lg border border-solid p-2 transition-colors',
        size === 'small' && 'text-sm',
        colorTheme === 'black-full' && 'border-black bg-black text-white hover:bg-white hover:text-black',
        colorTheme === 'black-inverted' && 'border-black bg-white text-black hover:bg-black hover:text-white'
      )}
      onClick={onClick}
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

export default Button;
