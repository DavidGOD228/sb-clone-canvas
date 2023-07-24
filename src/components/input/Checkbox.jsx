import React from "react";

const Checkbox = ({
  checked,
  label,
  link,
  linkText,
  help,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="
            w-6
            h-6
            accent-green-800
            bg-gray-100
            border-gray-300
            rounded
        "
        />
        {label && (
          <label className="ml-2" onClick={onChange}>
            {label}
            {link && (
              <>
                {" "}
                <a href={link} className="text-green-800 underline">
                  {linkText}
                </a>
              </>
            )}
          </label>
        )}
      </div>
      {help && <p className="pt-2 ml-4 px-4 text-black/[.54]">{help}</p>}
    </div>
  );
};

export default Checkbox;
