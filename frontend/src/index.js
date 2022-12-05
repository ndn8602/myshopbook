import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { StoreProvider } from "./Store";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <PayPalScriptProvider deferLoading={true}>
          <App/>
        </PayPalScriptProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

