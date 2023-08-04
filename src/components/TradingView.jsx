import React, { useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

// let tvScriptLoadingPromise;

// export default function TradingViewWidget() {
//   const onLoadScriptRef = useRef();

//   useEffect(() => {
//     onLoadScriptRef.current = createWidget;

//     if (!tvScriptLoadingPromise) {
//       tvScriptLoadingPromise = new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.id = "tradingview-widget-loading-script";
//         script.src = "https://s3.tradingview.com/tv.js";
//         script.type = "text/javascript";
//         script.onload = resolve;

//         document.head.appendChild(script);
//       });
//     }

//     tvScriptLoadingPromise.then(
//       () => onLoadScriptRef.current && onLoadScriptRef.current()
//     );

//     return () => (onLoadScriptRef.current = null);

//     function createWidget() {
//       if (
//         document.getElementById("tradingview_a569f") &&
//         "TradingView" in window
//       ) {
//         new window.TradingView.widget({
//           autosize: true,
//           symbol: "NASDAQ:AAPL",
//           interval: "1",
//           timezone: "Asia/Kolkata",
//           theme: "dark",
//           style: "1",
//           locale: "in",
//           toolbar_bg: "#f1f3f6",
//           enable_publishing: true,
//           backgroundColor: "rgba(1, 4, 28, 1)",
//           hide_top_toolbar: false,
//           hide_legend: true,
//           save_image: true,
//           container_id: "tradingview_a569f",
//           hotlist:true,
//           show_popup_button: true,
//         });
//       }
//     }
//   }, []);

const handleTradeNowClick = () => {
  window.open("http://trader.jettradefx.in/", "_self");
};


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
        document.getElementById("tradingview_51688") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "OKX:BNBUSDC",
          interval: "D",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_51688",
          show_popup_button: true,
          hotlist: true,
        });
      }
    }
  }, []);

  return (
    <>
    <div className="tradingview-widget-container sm:h-[600px] max-w-7xl mx-auto">
      <div id="tradingview_51688" className="h-full border-none" />
      <div className="tradingview-widget-copyright"></div>
    </div>
    </>
  );
}
