import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { JokeProvider } from "./contexts/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <JokeProvider>
    <App />
  </JokeProvider>
);
