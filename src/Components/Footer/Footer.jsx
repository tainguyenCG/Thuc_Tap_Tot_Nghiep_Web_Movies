import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <Link to="https://www.facebook.com/Ferocious.Monster03" target="_blank">
          <img src={facebook_icon} alt="" />
        </Link>

        <Link to="https://www.youtube.com/@thanhtai1363" target="_blank">
          <img src={youtube_icon} alt="" />
        </Link>
        <Link>
          <img src={instagram_icon} alt="" />
        </Link>
        <Link>
          <img src={twitter_icon} alt="" />
        </Link>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Infomation</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        Thực Tập Tốt Nghiệp. Nguyễn Thành Tài_211A010293. Gmail: Nguyenthanhtai0392k3@gmail.com.
        Phone/Zalo: 0347336293
      </p>
    </div>
  );
};

export default Footer;
