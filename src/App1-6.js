import logo from './logo.svg';
import "./App.css";
import { useState } from 'react';
import Sub from './Sub';

//1. <div> </div>전체는 1개만 있어야.
//2. 변수선언은 let(변수) 혹은 const(상수)로만 해야. var 쓰시 지마
//3. if사용불가. 삼항연산은 가능.
//4.조건부 렌더링:조건&&값->참일때만 화면에 보임.
//5. ccs디자인하는 방법
//  -내부에 적는방법
//  -외부에 적는 법
//  - 라이브러리 사용 가능(부트스트랩, component-styled 등)



var a=10; //변수
const b=20; //상수

function App(){
  console.log('App이 실행됨');
  
  let c;

const mystyle={
  color:"red",
}

let list=[1,2,3];//4강.

// let number=1; 상태값이 아니여서,리액트가 변경 감지 못함. 6강.
const [number,setNumber]=useState(1); //리액트안에 외부 라이브러리 hooks쓴것
//상태값 변경시, setNumber로 변경해야.

const add=()=>{ //변수형태로 함수 만들기
 //number ++;
 setNumber(number+1); //리액트에게 number값 변경할께라고 요청하는 것.
 console.log('add=', number);
}

//데이더를 받음. 6강
const[users,setUsers]=useState([]);
const download=()=>{
let sample=[
  {id:1, name:"홍길동"},
  {id:2, name:"임꺽정"},
  {id:3, name:"장보고"},
  {id:4, name:"코스"}
];

  setUsers(sample); //받은 users에 ...sample를 추가하라

}


//return--------------------------------
  return ( //return이 렌더링 시점은 상태값이 변경시 이다.
  <div>

    <div style={mystyle}> 안녕{a===10?"10입니다":"10이 아닙니다"}</div>
    <h1 className='box-style'>해당태그{b===20 && '20입니다'}  </h1>
<hr/>

<div>{list.map(n=><h1>{n}</h1>)}</div>
 
  <div>
    <h1>숫자: {number}</h1>
    <button onClick={add}>더하기</button>
    <Sub/>
    </div>

<div> //6강.

  <button onClick={download}>다운로드</button>
  {users.map(u=><h1>{u.id},{u.name}</h1>)}
</div>

  </div>

  );  
}
export default App;
