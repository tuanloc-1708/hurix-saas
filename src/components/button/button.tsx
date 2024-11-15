import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-pink-gradient
        text-black font-medium transition-all duration-300 rounded ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
