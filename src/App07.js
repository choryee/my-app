
import { useEffect, useState } from "react";
import "./App.css";
//import React from 'react';




//-------7강부터----------
function App(){

  const[data, setData]=useState(0);
  const[search, setSearch]=useState(0);

  const download=()=>{
    //통신을 통해 다운로드 받고
    let downloadData=5;
    setData(downloadData);
  }


  //실행시점: 
  //1. App()함수가 최초 실행될 때(마운트될때)
//2.상태변수가 변경될때=App()이 실행됨=return이 실행됨.
//3.의존리스트로 관리할 수 있다. (그게 dependencyList에 등록돼어 있어야 함)

  useEffect(()=>{
    console.log('useEffect()실행됨')
    download();
  }, [search]); //, [] 여기 비면 어디에도 의존하지 않아, 숫자 증가함.


  return(  
  <div>

    <button onClick={()=>{setSearch(2)}}>검색하기</button>
    
    <h1>테이터:{data}</h1>
    <button onClick={()=>{setData(data+1)}}>더하기</button>


     </div>

  );
}

export default App;
