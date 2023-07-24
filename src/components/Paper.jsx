const Paper = ({ children }) => {
  return (
    <div
      className="
        flex
        flex-col
        rounded-xl
        shadow-md
        justify-center
        items-center
        relative
        border-2
        h-auto
        p-4
        md:p-8
    "
    >
      {children}
    </div>
  );
};

export default Paper;
