import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline-light";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * Reusable button component.
 * - primary: dark green fill (default CTA)
 * - secondary: outlined dark green
 * - outline-light: outlined white (for dark backgrounds)
 */
export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-block px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 rounded-none cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-dark-green text-white border border-dark-green hover:bg-mid-green hover:border-mid-green",
    secondary:
      "bg-transparent text-dark-green border border-dark-green hover:bg-dark-green hover:text-white",
    "outline-light":
      "bg-transparent text-white border border-white hover:bg-white hover:text-dark-green",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
