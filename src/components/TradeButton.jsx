import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const TradeButton = () => {
  const handleTradeNowClick = () => {
    window.open("http://trader.jettradefx.in/", "_self");
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <button
          className="trade-now-button text-secondary flex items-center gap-1 border rounded-md p-1 hover:bg-secondary hover:text-black transition-all duration-200 mt-2"
          onClick={handleTradeNowClick}
        >
          Trade Now <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};

export default TradeButton;
