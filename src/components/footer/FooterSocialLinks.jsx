import {
  FaSpotify,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import IconButton from "../IconButton";

const FooterSocialLinks = () => {
  const social = [
    {
      icon: FaSpotify,
      link: "",
    },
    {
      icon: FaFacebookF,
      link: "",
    },
    {
      icon: FaPinterestP,
      link: "",
    },
    {
      icon: FaInstagram,
      link: "",
    },
    {
      icon: FaYoutube,
      link: "",
    },
    {
      icon: FaTwitter,
      link: "",
    },
  ];

  return (
    <ul className="flex flex-row gap-2">
      {social.map((item, index) => (
        <IconButton key={item.link + index} icon={item.icon} link={item.link} />
      ))}
    </ul>
  );
};

export default FooterSocialLinks;
