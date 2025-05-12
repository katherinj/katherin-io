import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
