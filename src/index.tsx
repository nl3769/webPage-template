import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- importer HashRouter
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter> {/* <-- enveloppe ton App */}
      <App />
    </HashRouter>
  </React.StrictMode>
);