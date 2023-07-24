const PrivacyLinks = () => {
  const links = [
    {
      title: "Privacy Notice",
      link: "",
    },
    {
      title: "Terms of Use",
      link: "",
    },
    {
      title: "Do Not Share My Personal Information",
      link: "",
    },
    {
      title: "CA Supply Chain Act",
      link: "",
    },
    {
      title: "Cookie Preferences",
      link: "",
    },
  ];

  return (
    <ul className="flex flex-col lg:flex-row gap-2 mt-3 lg:items-center">
      {links.map((item, index) => (
        <li key={item.link + index} className="flex flex-col lg:flex-row cursor-pointer">
          <div
            className={`flex flex-col lg:flex-row gap-2 ${index === 0 ? "lg:pr-3" : "lg:px-3"}`}
          >
            <p className="text-black">{item.title}</p>
          </div>
          {index < links.length - 1 && <span className="hidden lg:block">|</span>}
        </li>
      ))}
    </ul>
  );
};

export default PrivacyLinks;
