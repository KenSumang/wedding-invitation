const variants = {
  primary: "bg-black text-white border-black",
  secondary: "bg-white text-black border-gray-400",
};

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        px-10 py-4
        border
        text-sm font-medium
        tracking-[0.2em]
        uppercase
        transition-colors
        hover:opacity-80
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
