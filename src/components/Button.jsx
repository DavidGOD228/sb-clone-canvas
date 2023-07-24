const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
  bgColor,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick ? (e) => onClick(e) : undefined}
      className={`
              disabled:bg-grey-700
              disabled:cursor-not-allowed
              rounded-full
              font-semibold
              hover:opacity-80
              transition
              border-2
              ${fullWidth ? "w-full" : "w-fit"}
              ${large ? "text-xl" : "text-sm"}
              ${large ? "px-5" : "px-4"}
              ${large ? "py-3" : "py-2"}
              ${secondary ? "bg-white" : bgColor ? `bg-${bgColor}` : "bg-black"}
              ${
                secondary
                  ? "text-black"
                  : bgColor
                  ? `text-${bgColor}`
                  : "text-white"
              }
              ${
                secondary
                  ? "border-black"
                  : bgColor
                  ? `border-${bgColor}`
                  : "border-black"
              }
              ${outline ? "bg-transparent" : ""}
              ${
                outline && !bgColor
                  ? "border-white"
                  : bgColor
                  ? `border-${bgColor}`
                  : ""
              }
              ${
                outline && !bgColor
                  ? "text-white"
                  : bgColor
                  ? `text-${bgColor}`
                  : ""
              }
             
          `}
    >
      {label}
    </button>
  );
};

export default Button;
