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

//15강 까지만
const ListPage = () => {

const[posts, setPosts]=useState([  //초기 테이터 넣은것.
    {id:1, title:"내용1"},
    {id:2, title:"내용2"},
    {id:3, title:"내용3"},
    {id:4, title:"내용4"},
    {id:5, title:"내용5"},
]);



    return (
        <div>
            <h1>리스트 페이지</h1>
            <Button className='btn btn-primary' onClick={ListPage}>리스트 보기</Button>
            {posts.map((p)=><StyledItemBoxDiv>
                <div>
              번호: {p.id} | 제목: {p.title}
              </div> 
            <Button>삭제</Button>
            </StyledItemBoxDiv>)};
        </div>
    );
};

export default ListPage;