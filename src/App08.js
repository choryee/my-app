
import { useEffect, useMemo, useState } from "react";
import "./App.css";
//import React from 'react';

//useMemo-Memorization기억


//-------8강----------에러남.(강의 마지막에)


function App(){
 const[list, setList]=useState([1,2,3,4]);
 const[str, setStr]=useState("합계");



 const getAddResult=()=>{
  let sum=0;
  list.forEach(i=>sum=sum+i); //한줄로 쓰면 중괄호 생략가능
  console.log('sum함수 실행됨:', sum);
  return sum;
 }; 

 const addResult=useMemo(()=>getAddResult(), [list]);
  
  return(  
  <div>

    <button onClick={()=>{setStr('안녕');}}>문자변경</button>

    <button onClick={()=>{setList([...list, 10]);}}>리스트값 추가</button>

<div>
    {list.map((i)=><h1>{i}</h1>)}
</div>

<div>
  {str}:{addResult()}
</div>


     </div>

  );
}

export default App;
