import { Market } from "../widgets/market";
import { ChooseUs } from "../widgets/choose-us";
import { TrackAndTrade } from "../widgets/track&trade";
import "./style.scss";

export const Home = () => {
  return (
    <div className="home">
      <TrackAndTrade />
      <Market />
      <ChooseUs />
    </div>
  );
};
