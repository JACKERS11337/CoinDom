import { useContext } from "react";
import { Coin } from "../../modules/cryptoCoin";
import { CoinContext } from "../../context/coinContext";
import "./style.scss";

export const CryptoSlider = () => {
  const { data, loading } = useContext(CoinContext);

  const crypto: Array<Coin> = data.slice(0, 4);

  return (
    <div>
      <div className="slider">
        {loading ? (
          <img src="/Loader.svg" alt="Loading..." />
        ) : (
          <>
            {crypto.map((crypt) => (
              <div key={crypt.id} className="slider-content">
                <img src={crypt.image} alt={crypt.name} />
                <p className="slider-name">
                  {crypt.name} &nbsp;
                  <span
                    className={
                      crypt.price_change_percentage_24h > 0 ? "green" : "red"
                    }
                  >
                    {crypt.price_change_percentage_24h.toFixed(2) + "%"}
                  </span>
                </p>
                <p className="slider-price">
                  {"$" + " " + crypt.current_price.toFixed(2)}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
