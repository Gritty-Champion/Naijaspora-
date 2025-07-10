interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  labelClassName?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  rows = 6,
  labelClassName
}) => {
  return (
    <div>
      <label htmlFor={name} className={`block text-sm sm:text-[28px] font-medium text-neutral-20 mb-2 ${labelClassName ?? ''}`}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-neutral-95 focus:outline-none rounded-lg focus:ring-2 focus:ring-neutral-90 focus:border-transparent transition-colors resize-none ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default TextareaField;
