import {BrowserRouter} from 'react-router-dom';
// import ReactDOM from "react-dom/client";
import React, { useState } from "react"; 
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 4️⃣ Posiziono BrowserRouter ALTO nella gerarchia
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
