import "./style.scss";
import { CryptoCoin } from "../cryptoCoin/";
import { useContext, useState } from "react";
import { Coin } from "../../modules/cryptoCoin";
import { CoinContext } from "../../context/coinContext";

export const Market = () => {
  const { data, loading } = useContext(CoinContext);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsProdPage = 10;
  const lastIndex = currentPage * recordsProdPage;
  const firstIndex = lastIndex - recordsProdPage;
  const quantityCoin: Array<Coin> = data.slice(firstIndex, lastIndex);
  const quantityPage = Math.ceil(data.length / recordsProdPage);

  const pagination = [];
  for (let i = 1; i <= quantityPage; i++) {
    pagination.push(
      <button
        className={currentPage === i ? "active" : ""}
        key={i}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="market">
      <h2>Market Update</h2>
      <div className="market-update">
        <div className="market-content">
          <p>Coin</p>
          <div className="market-title">
            <p>Price</p>
            <p>24h Change</p>
            <p>Market Cap</p>
          </div>
        </div>
        <div className="market-coins">
          {loading ? (
            <img src="/Loader.svg" alt="Loading..." />
          ) : (
            <>
              {quantityCoin.map((coin) => (
                <CryptoCoin key={coin.id} data={coin} />
              ))}
            </>
          )}
        </div>
        <div className="market-btn">{pagination}</div>
      </div>
    </div>
  );
};
