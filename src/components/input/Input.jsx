import { IconType } from "react-icons/lib";

const Input = ({
  placeholder,
  value,
  required,
  disabled,
  type,
  help,
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
          placeholder=" "
        />
        {help && <p className="pt-2 px-4">{help}</p>}

        {/* <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[19px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-800 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-800 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"> */}
        <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >
          {required ? "* " + placeholder : placeholder}
        </label>
      </div>
    </div>
  );
};

export default Input;
