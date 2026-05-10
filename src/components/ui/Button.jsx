export function Button({
  className = "",
  variant = "primary",
  children,
  ...props
}) {
  const style = {
    primary:
      "bg-black text-white hover:bg-white hover:text-black border border-black",

    secondary:
      "bg-white text-black hover:bg-black hover:text-white border border-black",
  };

  return (
    <button
      className={`w-fit px-6 py-2 rounded-md outline-none transition-all duration-300 ${style[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
