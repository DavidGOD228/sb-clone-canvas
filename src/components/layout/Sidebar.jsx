import { useCallback, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../Button";
import { useLocation, useNavigate } from "react-router-dom";

const excludedRoutes = ["/signin", "/signup"];

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setShowMenu(!excludedRoutes.includes(location.pathname));
  }, [location]);

  const items = [
    {
      label: "menu",
      href: "/menu",
    },
    {
      label: "rewards",
      href: "/rewards",
    },
    {
      label: "gift cards",
      href: "/gift-cards",
    },
  ];

  return (
    <div
      onClick={onClose}
      className="
            absolute
            bg-black/[.5]  
            w-screen
            h-screen
            z-50  
            top-[100px]
            bottom-0
            right-0
            flex
            justify-end
        "
    >
      <div
        className="
          flex
          border-neutral-800
          shadow-md
          right-0
          w-[80%]
          h-full
          flex
          flex-row
          z-50
          bg-white
        "
      >
        <div className="flex flex-col gap-4 ml-2 w-full p-6">
          {items.map((item) => (
            <p key={item.href} className="text-xl cursor-pointer">
              {item.label.toUpperCase()}
            </p>
          ))}
          <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-200" />
          <div className="flex flex-row gap-2">
            {!username && (
              <>
                <Button
                  label="Sign in"
                  secondary
                  onClick={() => navigate("signin")}
                />
                <Button label="Join now"
                onClick={() => navigate("signup")}
                />
              </>
            )}
            {username && <Button label="Logout" onClick={() => {}} />}
          </div>
          <div className="flex items-center mr-6 gap-2 ">
            <FaLocationDot size={24} className="cursor-pointer" />
            <p className="text-sm font-semibold cursor-pointer">Find a store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
