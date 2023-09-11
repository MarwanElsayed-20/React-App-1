import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
