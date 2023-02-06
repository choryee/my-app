import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';




//스타일 확장. 13강.
// const StyledAddButton=styled.button(StyledDeleteButton)`
//      color: ${(props)=> (props.user.username==='kim' ? 'blue':'red')};
//      background-color: green;
// `;

const StyledDeleteButton=styled.button`
color: ${(props)=> (props.user.username==='kim1' ? 'blue':'red')}; //12강. const Home = (props) => 밖에서도
// props를 받을 수 있다.
`;

// const StyledAddButton=styled.button(StyledDeleteButton)` //위 잘 만든 스타일 상속하는 방법. 매개변수에 넣는다.
// color: ${(props)=> (props.user.username==='kim1' ? 'blue':'red')}; 
//  background-color: green;
// `;

const Home = (props) => { //11강. props는 Homepage.js에서 넘긴 '모든' 데이터. 넘어온 게 하나이면, 그 이름
    //(또는 아무 이름)으로 사용해도 된다.
    //console.log(props.boards); //그중 boards만 받는 것
   // console.log(1, props);

   // const boards=props.boards; 모든 데이터중 boards만 받는 것.
    //console.log(2, boards);
    //const id=props.id;


    //위 방식으로 각각 넘어 온 것을 받는게 귀찮아서, '구조분할 할당' 사둉.
    const {boards, setBoards, user, number, addNumber}=props; //props에 있는 boards가 const {boards}에 들어감
    //const {id}=props; 다른데서 넘긴 자료중 id만 받게 해주는 것.
    



    return (
        <div>
            <h3>여기는 Home.js부분임. | 번호는 {number}입니다</h3>
          
            <Button variant="primary" className='btn btn-primary' onClick={addNumber}>번호증가</Button>
            <p/>
            <StyledDeleteButton  user={user} onClick={()=>setBoards([])}>전체삭제</StyledDeleteButton>
            <p/>

            {boards.map((board)=>
            <h3 key={board.id}>
                제목:{board.title} 내용:{board.content}</h3>)}
            
        </div>
    );
}

export default Home;