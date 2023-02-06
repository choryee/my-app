
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
import { Button } from "react-bootstrap";
import Navigation from "./components/Navigation";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";




//15강.
function App(){
 

  
  //16강에서 밑 return있는 거 삭제함. ListPage는 목록보여주기, WritePage는 글쓰기한 것을 DB에 넣고 하는 건데
  //DB를 사용 안하니, Listpage에서 모두 처리할 려고 함.
  return(  
    <div>
      <Navigation/>

     <Routes>
      <Route path="/" exact={true} element={<ListPage/>}/>
      <Route path="/write" exact={true} element={<WritePage/>}/>
     </Routes>
     </div>

  );
}

export default App;
