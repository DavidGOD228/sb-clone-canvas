const TextLink = ({ text, onClick }) => {
  return (
    <div className="relative mb-2 inline-block">
      <p
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
    </div>
  );
};

export default TextLink;
