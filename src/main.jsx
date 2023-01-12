import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
const  App = React.lazy(()=>import("./App"));
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RPCProvider } from "./contexts/WalletRPC/RPCContext";
import { MarketplaceProvider } from "./contexts/Marketplace/MarketplaceContext";
import { FixtureProvider } from "./contexts/Fixture/FixtureContext";
import { PredictionsProvider } from "./contexts/Predictions/PredictionsContext";
import { inject } from "@vercel/analytics";

inject();

const Loader = ()=><p>Loading</p>

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RPCProvider>
      <MarketplaceProvider>
        <FixtureProvider>
          <PredictionsProvider>
          <Suspense fallback={<Loader />}>
            <App />
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            </Suspense>
          </PredictionsProvider>
        </FixtureProvider>
      </MarketplaceProvider>
    </RPCProvider>
  </BrowserRouter>
);
