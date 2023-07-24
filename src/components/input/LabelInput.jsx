import { IconType } from "react-icons/lib";

const LabelInput= ({
  placeholder,
  value,
  label,
  required,
  disabled,
  type,
  icon: Icon,
  onChange,
}) => {
  return (
    <div
      className="
            w-full
            mt-3
            mb-2
            p-0
        "
    >
      <label>{label}</label>
      <div
        className="
            relative
            h-auto
            w-full
            min-w-[200px]
        "
      >
        {Icon && (
          <div
            className="
                absolute
                top-2/4
                right-3
                grid
                h-5
                w-5
                -translate-y-2/4
                place-items-center
                text-blue-gray-500
            "
          >
            <Icon size={24} color="green-800" />
          </div>
        )}
        <input
          disabled={disabled}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={required ? "* " + placeholder : placeholder}
          type={type}
          className="
            peer
            h-full
            w-full
            rounded-lg
            border
            border-black
            bg-transparent
            px-4
            py-3
            !pr-9
            text-lg
            font-sans
            font-normal
            outline
            outline-0
            transition-all
            placeholder-shown:border
            placeholder-shown:border-blue-gray-200
            placeholder-shown:border-t-blue-gray-200
            focus:border-2
            focus:border-green-800
            focus:border-t-transparent
            focus:outline-0
            disabled:border-0
            disabled:bg-blue-gray-50
          "
        />
      </div>
    </div>
  );
};

export default LabelInput;
