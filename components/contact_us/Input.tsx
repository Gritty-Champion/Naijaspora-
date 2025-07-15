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
  labelClassName
}) => {
  return (
    <div>
      <label htmlFor={name} className={`lock text-sm sm:text-[28px] font-medium text-neutral-20 mb-2 ${labelClassName ?? ''}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-neutral-95 focus:outline-none rounded-lg  focus:border-transparent transition-colors ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
        } ${className ? className : ''}`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
