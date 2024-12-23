import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./pages/App.js";
import Error from "./pages/Error.js";
import Infos from "./pages/Infos.js";
import Logement from "./pages/Logements.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="*"
          element={<Error />}
        />
        <Route
          path="/infos"
          element={<Infos />}
        />
        <Route
          path="/logement/:id"
          element={<Logement />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
