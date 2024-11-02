import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  isLoading = false,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-600",
    danger: "bg-red-500 hover:bg-red-600 focus:ring-red-600",
  };

  return (
    <button
      className={`w-full py-3 px-5 text-white rounded cursor-pointer text-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
        variantStyles[variant]
      } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      type={type}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
