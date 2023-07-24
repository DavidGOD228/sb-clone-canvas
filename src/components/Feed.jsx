import { useEffect, useMemo, useState } from "react";
import FeedItem from "./feed/FeedItem";

const Feed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = () => {
      return [
        {
          title: "Enjoy summer savings with DashPass",
          content:
            "Now is a great time to save with DashPass. Enjoy $10 off Starbucks orders of $20+ on DoorDash. Offer valid 7/13-7/19 from 12 p.m. – 3 p.m. only. Max discount of $10.*",
          img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84755.jpg",
          actionLabel: "Order now",
          bg: "bg-emerald-900",
          textColor: "text-white",
          contentAdditional:
            "From 7/13- 7/19, enjoy $10 off your Starbucks order of $20 or more through the DoorDash app, excluding taxes and fees. Valid 12pm to 3pm for DashPass members only. Offer valid for one (1) redemption per customer. Restrictions and other taxes/fees/gratuity still apply. See DoorDash app for details and location availability. Fees subject to change. Menu limited. Restricted delivery area. Available at participating locations only. All deliveries subject to availability. Must have or create a valid DoorDash account with valid form of accepted payment on file. No cash value. Non-transferable. Prices for Starbucks® items purchased through DoorDash may be higher than as marked or posted in stores. May not be combined with other offers, discounts, or promotions. See DoorDash terms and conditions at",
          link: "https://help.doordash.com/consumers/s/article/offer-terms-conditions.",
        },
      ];
    };
    setItems(getData());
  }, []);

  const additional = useMemo(() => {
    return items
      .filter((item) => item.link && item.contentAdditional)
      .map((item) => ({ link: item.link, content: item.contentAdditional }));
  }, [items]);

  const handleClck = (item, e) => {
    // const { title, content, actionLabel, img } = item;
    // const position = { x: e.clientY, y: e.clientY };
    // const userInfo = {
    //   ip: "",
    //   agent: "",
    //   screen: {
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   },
    // };
    // if (localStorage) {
    //   userInfo.agent = localStorage.getItem("ua") || "";
    //   userInfo.ip = localStorage.getItem("ip") || "";
    // }
    // const bannerInfo = {
    //   title: title,
    //   content: content,
    //   img: img,
    //   position: position,
    // };
    // const log = {
    //   btnContent: actionLabel,
    //   content: bannerInfo.content,
    //   title: bannerInfo.title,
    //   img: bannerInfo.img,
    //   bannerX: bannerInfo.position.x,
    //   bannerY: bannerInfo.position.y,
    //   ip: userInfo.ip,
    //   userAgent: userInfo.agent,
    //   userScreenWidth: userInfo.screen.width,
    //   userScreenHeight: userInfo.screen.height,
    // };
    // onRequest("POST", "/api/log", log, ({ error, message }) => {
    //   console.log("error", error);
    //   console.log("message", message);
    // });
  };

  return (
    <div>
      {items.map((item, indx) => (
        <FeedItem key={item.title + indx} handleClick={handleClck} {...item} />
      ))}
      {additional && (
        <div className="flex flex-col w-[100%] justify-center items-center">
          <div className="flex flex-col my-5 lg:max-w-[50%]">
            {additional.map((item, indx) => {
              return (
                <div
                  key={item.link + indx}
                  className="flex py-5 px-2 justify-center text-center flex-col text-sm"
                >
                  {"*".repeat(indx + 1) + item.content}
                  <span>{item.link}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
