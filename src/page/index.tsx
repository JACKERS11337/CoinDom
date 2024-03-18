import { Market } from "../components/market";
import { TrackAndTrade } from "../widgets/track&trade";
import "./style.scss";

export const Home = () => {
  return (
    <div className="home">
      <TrackAndTrade />
      <Market />
    </div>
  );
};
