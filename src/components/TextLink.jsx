import { useState } from "react";

const TextLink = ({ text, link, action, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (onClick) onClick();
  };

  return (
    <div className="relative mb-2 inline-block flex flex-row">
      <p
        onClick={handleClick}
        className="
          text-green-800
          underline
          font-bold
          hover:no-underline
          cursor-pointer
        "
      >
        {text}
      </p>
      {action && clicked && (
        <span
          onClick={handleClick}
          className="font-normal no-underline ml-2 cursor-pointer"
        >
          {"   "}&#5169;
        </span>
      )}
      {action && !clicked && (
        <span
          onClick={handleClick}
          className="font-normal no-underline  ml-2 cursor-pointer"
        >
          {"   "}&#5167;
        </span>
      )}
    </div>
  );
};

export default TextLink;
