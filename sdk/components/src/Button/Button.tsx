import clsx from 'clsx';
import React from 'react';

import FilterIcon from '../Icons/Filter';
import PlusIcon from '../Icons/Plus';

type ButtonDefaultProps = {
  size: 'small';
  color: 'black';
  isFull: boolean;
  children: React.ReactNode;
};

type ButtonWithoutIconProps = ButtonDefaultProps;

type ButtonWithIconProps = ButtonDefaultProps & {
  iconPosition: 'left' | 'right';
  icon: Icons;
};

type Icons = 'plus' | 'filter';

type ButtonIconProps = {
  icon: Icons;
};

type ButtonProps = ButtonWithoutIconProps | ButtonWithIconProps;

const ButtonIcon = ({ icon }: ButtonIconProps) => (
  <>
    {icon === 'plus' && <PlusIcon size="4" className="h-full" />}
    {icon === 'filter' && <FilterIcon size="4" className="h-full" />}
  </>
);

const Button = (props: ButtonProps) => {
  const { size, color, isFull, children } = props;

  const hasIcon = (propsToCheck: ButtonProps): propsToCheck is ButtonWithIconProps =>
    'iconPosition' in propsToCheck && 'icon' in propsToCheck;

  const colorTheme = `${color}-${isFull ? 'full' : 'inverted'}`;

  return (
    <div
      data-component="Button"
      className={clsx(
        'flex cursor-pointer rounded border border-solid p-2 transition-colors',
        size === 'small' && 'text-sm',
        colorTheme === 'black-full' && 'border-black bg-black text-white hover:bg-white hover:text-black',
        colorTheme === 'black-inverted' && 'border-black bg-white text-black hover:bg-black hover:text-white'
      )}
    >
      {hasIcon(props) && (
        <div
          className={clsx(props.iconPosition === 'left' && 'pr-2', props.iconPosition === 'right' && 'order-last pl-8')}
        >
          <ButtonIcon icon={props.icon} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Button;
