export type SelectionOptionValue = string | number;

export interface SelectionOption {
  value: SelectionOptionValue;
  label: string;
}

export interface SelectProps {
  options: SelectionOption[];
  ariaLabel: string;
  ariaDescribedBy: string;
  testId: string;
  onChange?: (value: SelectionOptionValue) => void;
  value?: SelectionOptionValue;
  defaultValue?: string;
  className?: string;
}

export const Select = ({
  options,
  ariaLabel,
  ariaDescribedBy,
  testId,
  value,
  defaultValue,
  onChange,
  className,
}: SelectProps) => {
  return (
    <select
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      data-testid={testId}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={className}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
