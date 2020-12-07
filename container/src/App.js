import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingIndex from "./components/MarketingIndex";
import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingIndex />
      </div>
    </BrowserRouter>
  );
};
