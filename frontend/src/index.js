import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./components/header";
import reportWebVitals from './reportWebVitals';
import { transitions, positions,types, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {BrowserRouter} from "react-router-dom"

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "100px",
  type: types.SUCCESS,
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDOM.render(
  <BrowserRouter>
   <AlertProvider template={AlertTemplate} {...options}>
      <App />
      </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

