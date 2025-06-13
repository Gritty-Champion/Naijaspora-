import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode, useEffect, useRef } from "react";
import { buttonMotion } from "@/libs/motions";

type Variant = "primary" | "secondary" | "text" | "blur";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
  autoFocus?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  type = "button",
  autoFocus = false,
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autoFocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  const baseStyles =
    "rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 text-label-large font-bold font-inter";

  const sizeStyles: Record<Size, string> = {
    sm: "px-[18px] py-[8px] ",
    md: "px-[28px] py-[12px] ",
    lg: "px-[48px] py-[16px] ",
  };

  const variantStyles: Record<Variant, string> = {
    primary: "bg-primary-base text-primary-on",
    secondary: "bg-secondary-base text-secondary-on",
    text: "bg-transparent text-primary-base hover:underline",
    blur: "backdrop-blur-md bg-[rgba(255,255,255,0.10)] text-primary-on",
  };

  const combined = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    disabled || loading ? "opacity-50 cursor-not-allowed" : "",
    className
  );

  return (
    <motion.button
      ref={buttonRef}
      variants={buttonMotion}
      initial="initial"
      animate="animate"
      whileHover={!disabled && !loading ? "whileHover" : ""}
      whileTap={!disabled && !loading ? "whileTap" : ""}
      onClick={onClick}
      type={type}
      className={combined}
      disabled={disabled || loading}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-current"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {!loading && icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && icon}
    </motion.button>
  );
}
