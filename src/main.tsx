import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CoinProvider } from "./context/coinContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CoinProvider>
      <App />
    </CoinProvider>
  </React.StrictMode>
);
