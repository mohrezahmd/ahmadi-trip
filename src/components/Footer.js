import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        تمامی خدمات این وب سایت دارای مجوزهای لازم از مراجع مربوطه می باشد و
        فعالیت های این سایت تابع قوانین و مقررات جمهوری اسلامی ایران است.
      </p>
    </footer>
  );
};
export default Footer;
