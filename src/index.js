import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { RoomProvider } from "./context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RoomProvider>
    <App />
  </RoomProvider>
);
