import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

const IconButton = ({ icon: Icon, link }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="
        rounded-full
        h-10
        w-10
        p-0
        flex
        items-center
        bg-black
        justify-center
        hover:bg-opacity-70
        cursor-pointer
        transition"
    >
      <Icon size={24} color="white" />
    </div>
  );
};

export default IconButton;
