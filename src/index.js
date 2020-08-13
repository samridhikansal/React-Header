import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Main from "./App/Main";

const GlobalStyle = createGlobalStyle`

body
{
  margin:0;
  padding:0;
  font-size: 20px;
  min-height: 100px;
  background-color:#D7F4CB;
}

.container
{
  font-size : 2rem;
  min-height:100%;
  background-color: #D7F4CB;
  position:relative;
  display:flex;
  flex-direction:column;
  
  

}






`;

const wrapper = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
  </React.StrictMode>,
  wrapper
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
