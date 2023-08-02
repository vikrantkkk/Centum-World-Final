import React, { useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_a569f") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
          interval: "1",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          backgroundColor: "rgba(1, 4, 28, 1)",
          hide_top_toolbar: true,
          hide_legend: true,
          save_image: false,
          container_id: "tradingview_a569f",
        });
      }
    }
  }, []);

  const handleTradeNowClick = () => {
    window.open("http://trader.jettradefx.in/", "_self");
  };

  return (
    <>
      <div>
        <div className="tradingview-widget-container sm:h-[600px] max-w-7xl mx-auto px-2">
          <div id="tradingview_a569f" className="h-full" />
        </div>
        <div className="max-w-7xl mx-auto ">
        <button
          className="trade-now-button text-secondary flex items-center gap-1 border rounded-md mt-2 p-1 hover:bg-secondary hover:text-black transition-all duration-200"
          onClick={handleTradeNowClick}
        >
          Trade Now <AiOutlineArrowRight />
        </button>
        </div>
      </div>
    </>
  );
}
