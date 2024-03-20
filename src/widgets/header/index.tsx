import "./style.scss";
import { TbBrandDiscord } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";

import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a>
          <p>
            <Link to="home" smooth={true} duration={1000}>
              COINDOM
            </Link>
          </p>
        </a>
        <nav>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li>
              <Link to="market" smooth={true} duration={1000}>
                Market
              </Link>
            </li>
            <li>
              <Link to="choose" smooth={true} duration={1000}>
                Choose Us
              </Link>
            </li>
          </ul>
        </nav>
        <span>
          <FiTwitter size={23} />
          <TbBrandDiscord size={23} />
        </span>
      </div>
    </header>
  );
};
