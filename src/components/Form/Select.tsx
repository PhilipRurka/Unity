import { HTMLProps, forwardRef } from 'react';

type SelectProps = HTMLProps<HTMLSelectElement> & {
  options: string[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ options, ...rest }, ref) => (
  <select id="priority" {...rest} ref={ref}>
    {options.map((option) => (
      <option key={`form-${option}`} value={option}>
        {option}
      </option>
    ))}
  </select>
));

Select.displayName = 'Select';

export default Select;
