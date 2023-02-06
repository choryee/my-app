
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





function App(){
  const[number, setNumber]=useState(1);

  const addNumber=()=>{
        setNumber(number+1);
  }

  const downNumber=()=>{
    setNumber(number-1);
  }

  const[users, setUsers]=useState([{id:0, name:"Jon"}]);

  const download=()=>{
    let sample=[
      {id:1, name:"kim"},
      {id:2, name:"lee"},
      {id:3, name:"park"}
    ];

    // let add=
    //   {id:3, name:"Liz"};
    

    //const newUser=

    setUsers([...users, ...sample]);
  }
  //console.log(setUsers);
  
  return(  
    <div>
      <h2>현재 시각은 {number}시 입니다.</h2>
      <p/>
      <Button onClick={addNumber} className="btn btn-primary">UP</Button>
      <p/>
      <Button onClick={downNumber} className="btn btn-primary">DOWN</Button>
      <p/>
      <p/>
      <Button onClick={download} className="btn btn-primary">download</Button>
      

       {users.map(user=><h1>{user.id}, {user.name}</h1>)}

     </div>

  );
}

export default App;
