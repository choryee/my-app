import React from 'react';
import { Button } from 'react-bootstrap';

const WritePage = () => {

const handleWrite=()=>{
 //Listpage의 setPosts에 무엇을 담아야 할까?
 let post={id:6, title:"인풋값"};
 //setPosts();
 
//  let title=document.querySelector("#inputTitle");
//  alert(title.value);

}

    return (
        <div>
            <h1>글쓰기 페이지</h1>
            <hr/>
            <form>
                <input type="text" id="inputTitle" placeholder='제목을 입력하세요'/>
                <Button type='button' onClick={handleWrite}>글쓰기</Button>

            </form>
        </div>
    );
};

export default WritePage;