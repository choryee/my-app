
import userEvent from "@testing-library/user-event";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
//import test from "./test";
//import {Route} from 'react-router-dom';
import { BrowserRouter,Route, Link,Switch, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


//-------10강~14강.----------

// const a={
//   backgroudColor:'red',
// };

// let T=document.createElement('h1');
// T.style.color='red';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App(){
  
 
  
  return(  
    <div>
    {/* <div style={a}>  안녕     </div>
    <div className="box-style">hello</div> */}
    
    <div><Title>hello</Title></div>

    <hr/>

    <Header/>
   {/* <HomePage/> 14강에서 지움.*/}

    <Routes>  {/*component={LoginPage}이게 아니고, element={<LoginPage/>}여야 */}
      <Route path="/" exact={true}  element={<HomePage/>} />
      <Route path="/login/:id" exact={true} element={<LoginPage/>}/> {/*<LoginPage/에  /login/:id의 id를 넘긴것. matchparams라고 함*/}
    </Routes>

    <Footer/>


     </div>

  );
}

export default App;
