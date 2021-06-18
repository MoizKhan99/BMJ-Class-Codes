import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import App2 from './App2';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from "./contexts/UserProvider"
import { store } from "./store/store";
import "fontsource-roboto";

// ReactDOM.render(
//   <Provider store={ store }>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <UserProvider>
    <App2 />
  </UserProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
