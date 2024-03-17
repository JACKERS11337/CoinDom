import "./style.scss";
import { Coin } from "../../modules/cryptoCoin";

type PropsCoin = {
  data: Coin;
  key: string;
};

export const CryptoCoin = ({ data }: PropsCoin) => {
  return (
    <a className="crypto-content" href="#">
      <span>
        <img src={data.image} alt={data.name} />
        {data.name}
      </span>
      <p>{"$" + " " + data.current_price.toFixed(2)}</p>
      <p className={data.price_change_percentage_24h > 0 ? "green" : "red"}>
        {data.price_change_percentage_24h.toFixed(2) + "%"}
      </p>
      <p> {"$" + " " + data.market_cap}</p>
    </a>
  );
};
