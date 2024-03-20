import "./style.scss";
import bitcoin from "../../../public/bitcoin.png";
import ethereum from "../../../public/ethereum.png";

export const CryptoTitle = () => {
  return (
    <div className="crypto-title">
      <img className="btc-float" src={bitcoin} alt="bitcoin" />
      <h1>
        Track and Trade
        <br /> <span>Crypto currencies</span>
      </h1>
      <img className="eth-float" src={ethereum} alt="ethereum" />
    </div>
  );
};
