import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import RoutesConfig from "./routes.js";
// import ReactQueryProvider from "./utils/react-query-provider.js";
import "@/styles/globals.css";
import "@/styles/custom.module.css";
import RoutesConfig from "./routes.js";
import AppLayout from "./components/app-layout.js";

// import dotenv from "dotenv";
// dotenv.config();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ReactQueryProvider> */}
      <AppLayout>
        <RoutesConfig />
      </AppLayout>
      {/* </ReactQueryProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
