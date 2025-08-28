import { ReactNode } from 'react';
import { cn } from "@/libs/cn"

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  variant?: 'default' | 'auth';
  rightIcon?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  error,
  onChange,
  placeholder,
  className,
  labelClassName,
  variant = 'default',
  rightIcon,
}) => {
  // Define styles for each variant
  const variantStyles = {
    default: {
      label: 'text-neutral-20 sm:text-[28px]',
      input: 'bg-neutral-95 border-gray-300',
    },
    auth: {
      label: 'text-title-small text-neutral-30',
      input: 'bg-neutral-95 border-transparent focus:border-primary-base border border-neutral-90 border-2',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div>
      <label
        htmlFor={name}
        className={cn("block font-medium mb-2", currentStyles.label, labelClassName)}
      >
        {label}
      </label>
      <div className={cn(
        "flex",
        rightIcon ? "border-2 rounded-lg" : "",
        (rightIcon && error) ? "border-[#ef4444]" : rightIcon ? "border-neutral-90" : "",
        rightIcon ? "focus-within:border-primary-base" : ""
      )}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            'w-full p-3 rounded-lg focus:outline-none transition-colors text-body-large',
            currentStyles.input,
            { 'border-[#ef4444]': error },
            { 'pr-10': rightIcon },
            className,
            rightIcon ? 'border-none rounded-r-none' : ''

          )}

        />
        {/* 3. Render the icon if it exists */}
        {rightIcon && (
          <div className=" px-3 flex items-center ">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-[11px] text-[#ef4444]">{error}</p>}
    </div>
  );
};

export default InputField;