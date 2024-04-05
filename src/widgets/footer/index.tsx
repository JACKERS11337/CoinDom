import "./style.scss";
import { TbBrandDiscord } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <ul>
            <li>
              <FiTwitter />
            </li>
            <li>
              <TbBrandDiscord />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <FaFacebookF />
            </li>
          </ul>
          <div className="footer-content__text">
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
