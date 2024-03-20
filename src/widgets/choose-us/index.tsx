import "./style.scss";
import choose from "../../../public/choose-main.png";
import { ChooseBox } from "../../components/chooseBox";
import { LuWallet } from "react-icons/lu";
import { TbPencilBolt } from "react-icons/tb";
import { TbChecklist } from "react-icons/tb";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { PiStackSimple } from "react-icons/pi";

export const ChooseUs = () => {
  return (
    <div id="choose" className="choose-us">
      <h2>
        WHY <span>CHOOSE US</span>
      </h2>
      <div className="choose-boxes-container">
        <div className="choose-boxes-1">
          <ChooseBox
            image={<LuWallet />}
            text="Use Trust Wallet, Metamask or to connect to the app."
            title="CONNECT YOUR WALLET"
          />
          <ChooseBox
            image={<TbPencilBolt />}
            text="Upload your crypto and set a title, description and price."
            title="SELECT YOUR QUANTITY"
          />
          <ChooseBox
            image={<TbChecklist />}
            text="Earn by selling your crypto on our marketplace."
            title="CONFIRM TRANSACTION"
          />
        </div>
        <img className="choose-us-img" src={choose} alt="chose-us" />
        <div className="choose-boxes-2">
          <ChooseBox
            image={<TbDeviceMobileMessage />}
            text="Invest all your crypto at one place on one platform."
            title="
            RECEIVE YOUR OWN NFTS"
          />
          <ChooseBox
            image={<TbMoneybag />}
            text="Discover, collect the right crypto collections to buy or sell."
            title="TAKE A MARKET TO SELL"
          />
          <ChooseBox
            image={<PiStackSimple />}
            text="We make it easy to Discover, Invest and manage."
            title="DRIVE YOUR COLLECTION"
          />
        </div>
      </div>
    </div>
  );
};
