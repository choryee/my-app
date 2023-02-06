
import userEvent from "@testing-library/user-event";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
//import React from 'react';

//useRef-디자인하고 플때
//dom을 변경할 때 사용함


//-------9강----------


function App(){
  const myRef=useRef(null);
  

  const[list, setList]=useState([{id:1, name:'kim'},{id:2, name:'lee'}])

  const myRefs=Array.from({length:list.length}).map(()=>createRef());

 
  
  return(  
  <div>

    
  <button onClick={()=>{
    console.log(myRef); 
    myRefs[0].current.style.backgroundColor='red'}}>
      
      색변경</button>


 <div ref={myRef}>박스</div>
  
  {list.map((user, index)=>(
  <h1 ref={myRefs[index]}>{user.name}</h1>))}

     </div>

  );
}

export default App;
