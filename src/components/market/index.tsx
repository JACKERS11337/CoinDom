import "./style.scss";
import { CryptoCoin } from "../cryptoCoin/";
import { useEffect, useState } from "react";

export const Market = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const recordsProdPage = 10;
  const lastIndex = currentPage * recordsProdPage;
  const firstIndex = lastIndex - recordsProdPage;
  const quantityCoin = data.slice(firstIndex, lastIndex);
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

  const url: string =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false";

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    };

    dataFetch();
  }, []);

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
