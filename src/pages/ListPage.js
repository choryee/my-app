import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledItemBoxDiv=styled.div`
display: flex;
justify-content: space-between;
 border: 1px solid black;
 padding: 10px;
 height: 100px;
 margin: 20px;
 align-items: center;
`;

const ListPage = () => {

    const [no, setNo]=useState(6);

    const [post, setPost]=useState({
        id:no,
        title:"",
        content:""
    })

const[posts, setPosts]=useState([  //초기 테이터 넣은것.
    {id:1, title:"제목1", content:"내용1"},
    {id:2, title:"제목2", content:"내용2"},
    {id:3, title:"제목3", content:"내용3"},
    {id:4, title:"제목4", content:"내용4"},
    {id:5, title:"제목5", content:"내용5"},
]);

const handleWrite=()=>{
    //Listpage의 setPosts에 무엇을 담아야 할까?
    //let post={id:6, title:"인풋값"};
    //setPosts();
    
   //  let title=document.querySelector("#inputTitle");
   //  alert(title.value);
   //e.preventDefault(); // 16강 맨뒤. form태그가 하려는 액션을 중지 시키는 것.
   setPosts([...posts, post]); //...posts기존에 있는 것 모두, post:새로 창에 쳐 넣은 것.
   setNo(no+1);
   }

    //onChange는 어떤 변화가 있으면 계속 반응하는 이벤트(e)임.
   const handleChangeTitle=(e)=>{
    console.log(e.target.value);
    setPost({title:e.target.value});

   }

   const handleChangeContent=(e)=>{
    console.log(e);
    setPost({content:e.target.value});
}

//위의 단점은 입력창이 10개면, 위를 10개 만들어야. 그래서, 밑처럼
const handleForm=(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);

    //computed property names문법(키값을 동적으로 할당할 수 있다. JS에만 있다.)
    setPost({...post, [e.target.name]:e.target.value}); //...post,없는 기존 값이 모두 없으지므로, 이것 있어야.
    console.log(post.title);
    console.log(post.content);
}

//<form>태그 쓸따는, value에 상태값을 넣는다.value={post.title}
// 상태가 변할때 마다 onChange={handleForm}
//name="title" 쓰는 이유는 computed property names문법쓸려고, 함수하나로 2개이상을 컨트롤 가능.

    return (
        <div>
            <h1>리스트 페이지</h1>
            <form>
                {/*<input type="text" id="inputTitle" placeholder='제목을 입력하세요' value={post.title} onChange={handleChangeTitle}/> */}
                <input type="text" id="inputTitle" placeholder='제목을 입력하세요' value={post.title} onChange={handleForm} name="title" />
                
                {/*<input type="text" id="inputTitle" placeholder='내용을 입력하세요' value={post.content} onChange={handleChangeContent}/> */}
                <input type="text" id="inputTitle" placeholder='내용을 입력하세요' value={post.content} onChange={handleForm} name="content" />
                <Button type='button' onClick={handleWrite}>글쓰기</Button>

            </form>
        <hr/>
            {posts.map((p)=><StyledItemBoxDiv>
                <div>
              번호: {p.id} | 제목: {p.title} | 내용: {p.content} 
              </div> 
            <Button>삭제</Button>
            </StyledItemBoxDiv>)};
        </div>
    );
};

export default ListPage;