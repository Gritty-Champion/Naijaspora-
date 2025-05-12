import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  appearance?: "plain" | "filled" | "outline";
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  to?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  appearance = "filled",
  prefixIcon,
  suffixIcon,
  to,
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-500 cursor-pointer";

  const variantStyles = {
    primary: {
      filled: "bg-[#0070C9] text-[#ffffff]",
      outline:
        "outline outline-2 outline-[#0070C9] text-[#0070C9] hover:bg-[#0070C9] hover:text-[#ffffff]",
      plain: "text-[#ffffff] hover:underline",
    },
    secondary: {
      filled: "bg-[#4B5563] text-[#ffffff] hover:bg-[#14181F]",
      outline: "border-2 border-[#4B5563] text-[#4B5563] hover:bg-[#4B5563] hover:text-[#ffffff]",
      plain: "text-[#4B5563] hover:underline",
    },
    link: {
      filled: "text-[#0070C9] hover:text-[#14181F] p-0",
      outline:
        "border-2 border-[#0070C9] text-[#0070C9] hover:bg-[#0070C9] hover:text-[#ffffff] p-0",
      plain: "text-[#0070C9] hover:underline p-0",
    },
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant][appearance]} ${className}`;

  if (variant === "link" && to) {
    return (
      <Link href={to} className={buttonClasses}>
        {prefixIcon && (
          <div className="flex items-center gap-2 h-full">
            <span className="button-prefix">{prefixIcon}</span>
          </div>
        )}
        <div className="flex items-center gap-2 h-full">{children}</div>
        {suffixIcon && (
          <div className="flex items-center gap-2 h-full">
            <span className="button-suffix">{suffixIcon}</span>{" "}
          </div>
        )}
      </Link>
    );
  }

  return (
    <button {...props} className={buttonClasses}>
      {prefixIcon && (
        <div className="flex items-center gap-2 h-full border">
          <span className="button-prefix">{prefixIcon}</span>
        </div>
      )}
      <div className="flex items-center gap-2 h-full">{children}</div>
      {suffixIcon && (
        <div className="flex items-center gap-2 h-full">
          <span className="button-suffix">{suffixIcon}</span>{" "}
        </div>
      )}
    </button>
  );
};

export default Button;
