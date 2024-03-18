import { createContext, useState, useEffect } from "react";
import { Coin } from "../modules/cryptoCoin";

type ContextProps = {
  children: React.JSX.Element;
};

type ReactContext = {
  data: Array<Coin> | null;
  loading: boolean | null;
};

export const CoinContext = createContext<ReactContext | null>(null);
export const CoinProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <CoinContext.Provider
      value={{
        data,
        loading,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};
