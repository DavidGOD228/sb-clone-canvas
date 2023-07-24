// import Image from "next/image";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const FeedItem = ({
  title,
  content,
  img,
  actionLabel,
  bg,
  textColor,
  handleClick,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-0 my-5 h-max-[650px]">
      <div className={`flex flex-col lg:flex-row ${bg}`}>
        <div className="flex justify-center items-center w-full lg:w-[50%]">
          {/* img */}
          <img
            src={img}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* content */}
        <div
          className={`
            flex
            flex-col
            justify-center
            items-center
            text-center
            py-5
            px-10
            w-full
            h-full
            lg:w-[50%]
            lg:h-auto
            ${textColor}`}
        >
          <h2 className="font-semibold mb-4 text-2xl">{title}</h2>
          <p className="text-xl mb-5">{content}</p>
          <Button
            label={actionLabel}
            outline
            onClick={() => navigate("/customizer")}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
