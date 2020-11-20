import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import StickyHeadTable from "./views/test";
import BrokersTable from "./components/TableComponent";
import SignIn from "./views/login";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


// ReactDOM.render(
//   <React.Suspense>
//   <BrokersTable />
// </React.Suspense>,
// document.getElementById("table_view")
// )

ReactDOM.render(
    <SignIn />
  ,
  document.getElementById('login')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



document.addEventListener('click', e => e.preventDefault)