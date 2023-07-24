import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/logo.svg";
import Button from "./Button";

const excludedRoutes = ["/signin", "/signup"];

const Header = ({ label, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState();

  // const { user, logout } = useAuth();

  // useEffect(() => {
  //   setUsername(user.username);
  // }, [user]);

  useEffect(() => {
    setShowMenu(!excludedRoutes.includes(location.pathname));
  }, [location]);

  const handleSidebar = () => {
    setOpen(!open);
    toggleSidebar();
  };

  // const handleLogout = async () => {
  //   localStorage.clear();
  //   logout();
  //   await onRequestAsync("POST", "/api/auth/logout", {});
  // };

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
      className="
          border-neutral-800
          px-[40px]
          shadow
          h-[100px]
          flex
          flex-row
          items-center
          z-51
        "
    >
      <div className="flex gap-2">
        <img
          src={logo}
          alt="Starbucks"
          width={50}
          height={50}
          className="mr-3 md:mr-4 lg:mr-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        {showMenu && (
          <div className="flex flex-row items-center gap-4 ml-2 hidden md:flex">
            {items.map((item) => (
              <p key={item.href} className="font-bold text-sm cursor-pointer">
                {item.label.toUpperCase()}
              </p>
            ))}
          </div>
        )}
      </div>
      {showMenu && (
        <div className="flex gap-2 ml-auto">
          <div className="flex items-center mr-6 gap-2 hidden md:flex">
            <FaLocationDot size={24} className="cursor-pointer" />
            <p className="text-sm font-semibold cursor-pointer">Find a store</p>
          </div>
          <div className="flex gap-2 hidden md:flex">
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
            {username && (
              <div className="flex items-center gap-4">
                <p>Welcome, {username}!</p>
                <Button label="Log out" onClick={() => {}} />
              </div>
            )}
          </div>
          <div className="md:hidden flex justify-end" onClick={handleSidebar}>
            {open ? (
              <HiXMark size={32} className="cursor-pointer" />
            ) : (
              <BiMenu size={32} className="cursor-pointer" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
