import { CryptoSlider } from "../../components/cryptoSlide";
import { CryptoTitle } from "../../components/cryptoTitle";
import "./style.scss";

export const TrackAndTrade = () => {
  return (
    <div className="track-trade">
      <CryptoTitle />
      <CryptoSlider />
    </div>
  );
};
