import FooterNav from "./footer/FooterNav";
import FooterSocialLinks from "./footer/FooterSocialLinks";
import PrivacyLinks from "./footer/PrivacyLinks";

const Footer = () => {

  return (
    <div
      className="
          py-4
          relative
          border-slate-300
          border-t-2
          px-[40px]
          shadow
          items-center
        "
    >
      <FooterNav />
      <hr className="py-5"/>
      <FooterSocialLinks />
      <PrivacyLinks />
      <p className="py-3 text-black/[.58] text-sm">© 2023 Starbucks Coffee Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
