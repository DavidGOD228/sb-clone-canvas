import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const FooterNav = () => {
  const categories = [
    {
      title: "About Us",
      links: [
        { title: "Our Company", link: "/company" },
        { title: "Our Coffee", link: "/company" },
        { title: "Stories and News", link: "/company" },
        { title: "Starbucks Archive", link: "/company" },
        { title: "Investor Relations", link: "/company" },
        { title: "Customer Service", link: "/company" },
      ],
    },

    {
      title: "Careers",
      links: [
        { title: "Our Company", link: "/company" },
        { title: "Our Coffee", link: "/company" },
        { title: "Stories and News", link: "/company" },
        { title: "Starbucks Archive", link: "/company" },
        { title: "Investor Relations", link: "/company" },
        { title: "Customer Service", link: "/company" },
      ],
    },
    {
      title: "Social Impact",
      links: [
        { title: "Our Company", link: "/company" },
        { title: "Our Coffee", link: "/company" },
        { title: "Stories and News", link: "/company" },
        { title: "Starbucks Archive", link: "/company" },
        { title: "Investor Relations", link: "/company" },
        { title: "Customer Service", link: "/company" },
      ],
    },
    {
      title: "For Business Partners",
      links: [
        { title: "Our Company", link: "/company" },
        { title: "Our Coffee", link: "/company" },
        { title: "Stories and News", link: "/company" },
        { title: "Starbucks Archive", link: "/company" },
        { title: "Investor Relations", link: "/company" },
        { title: "Customer Service", link: "/company" },
      ],
    },
    {
      title: "Order and Pick Up",
      links: [
        { title: "Our Company", link: "/company" },
        { title: "Our Coffee", link: "/company" },
        { title: "Stories and News", link: "/company" },
        { title: "Starbucks Archive", link: "/company" },
        { title: "Investor Relations", link: "/company" },
        { title: "Customer Service", link: "/company" },
      ],
    },
  ];

  const [open, setOpen] = useState([]);

  const handleOpen = (title) => {
    if (open.includes(title)) {
      const tmp = open.filter((o) => o !== title);
      setOpen(tmp);
    } else {
      const tmp = [...open, title];
      setOpen(tmp);
    }
  };

  const width = 100 / categories.length;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4">
      {categories.map((category) => {
        return (
          <div
            key={category.title}
            className={`
                flex
                flex-col
                items-start
                w-full
                lg:w-[${width}%]
                lg:max-w-[190px]
                lg:ml-5
            `}
          >
            <div className="hidden lg:block">
              <div className="flex mb-4 text-xl items-start">
                {category.title}
              </div>
              <ul>
                {category.links.map((item, index) => {
                  return (
                    <li
                      key={item.title + index}
                      className="mb-2 py-2 cursor-pointer text-black/[.54]"
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col w-full lg:hidden">
              <div
                onClick={() => handleOpen(category.title)}
                className="flex mb-4 text-xl items-start justify-between"
              >
                <div>{category.title}</div>
                <div>
                  {open.includes(category.title) ? (
                    <SlArrowUp size={24} />
                  ) : (
                    <SlArrowDown size={24} />
                  )}
                </div>
              </div>
              {open.includes(category.title) && (
                <ul>
                  {category.links.map((item, index) => {
                    return (
                      <li
                        key={item.title + index}
                        className="mb-2 py-2 cursor-pointer text-black/[.54]"
                      >
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterNav;
