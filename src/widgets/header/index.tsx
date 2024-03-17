import "./style.scss";
import { TbBrandDiscord } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a>
          <p>COINDOM</p>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Market</a>
            </li>
            <li>
              <a href="#">Choose Us</a>
            </li>
            <li>
              <a href="#">Join</a>
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
