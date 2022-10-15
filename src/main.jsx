import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TransactionsProvider } from "./context/TransactionContext";
import { BrowserRouter } from "react-router-dom";

import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from "./config";
/* existing imports */

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <React.StrictMode>
      <BrowserRouter>
        <DAppProvider config={DAPP_CONFIG}>
          <App />
        </DAppProvider>{" "}
      </BrowserRouter>
    </React.StrictMode>
  </TransactionsProvider>
);
