import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"
import Cookies from "js-cookie"
const App = props => {
  let path = window.location.pathname;
  if(path !== '/pages/login'){
    const token = Cookies?.get('token');
    const redirectToRoute = (route) => {
      window.location.pathname = route;
    };
  
      if(token ===null || token===undefined || token.length === 0) redirectToRoute("/pages/login");
  }
  return <Router />
}

export default App
