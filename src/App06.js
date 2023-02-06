import logo from './logo.svg';
import "./App.css";
import { useState } from 'react';
import Sub from './Sub';


// 6강--useState----------------------------

function App(){ //App()이게 실행된다는 거서은 밑의 return이 실행된다는 것.
  console.log('App이 실행됨');
  

//데이터를 받음. 6강.24'14
//1번- const[users,setUsers]=useState([{id:5, name:"러브"}]);
const[users,setUsers]=useState([]);//useState([]);여기 대괄호에는 최초 데이터 넣는 것.

const download=()=>{ //download함수.밑 다운로드 버튼 누르면, setUsers(sample);에 sample넣는 것.
 //그후, setUsers를 users로 대입함. 그게 상태값useState([]);이 된다.
  let sample=[
  {id:1, name:"홍길동"},
  {id:2, name:"임꺽정"},
  {id:3, name:"장보고"},
  {id:4, name:"코스"}
];

  //1번- setUsers([...users,...sample]); //받은 users에 ...sample를 추가하라
  //즉, {id:5, name:"러브"}에 sample의 배열 4개를 추가하는 것.

  setUsers(sample);
}//---download함수


//return--------------------------------
  return ( //return이 렌더링 시점은 상태값이 변경시 이다.
  <div>


<div> 
  <button onClick={download}>다운로드</button>
  {users.map(u=><h1>{u.id},{u.name}</h1>)}
  // users에 있는 데이터 만큼 돌면서, 뿌려라(map)
</div>

  </div>

  );  
}

export default App;
