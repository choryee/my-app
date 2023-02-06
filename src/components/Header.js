//rsc 침

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import { Container,Navbar,Nav } from 'react-bootstrap';


// 재사용가능하게 HeaderList라는 컴포넌트 만든 것
//styled-components 장점: js,css파일 관리 쉬움

const StyledHeaderDiv=styled.div`
 border: 1px solid black;
 height: 150px;
 background-color: ${(props)=>props.backgroundColor};
`;

const StyledHeadLink=styled(Link)`// "react-router-dom"이 가진 (Link)객체를 상속받아서 사용.14강. <Link>에 걸린 애를 디자인 하는 것.
 color: blue;
`;

const Header = () => {


    return (
        <div>

        <StyledHeaderDiv backgroundColor='lightgray'>
         <ul>
            <li>
                <Link to="/"> 홈</Link> {/*리액트에서는 <a href=>사용하면 전체를 다시 읽어서, 사용 비추천. */}
            </li>

            <li>
            <StyledHeadLink to="/login/10"> 로그인</StyledHeadLink>
             </li>

         </ul>
        </StyledHeaderDiv>

         <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>홈</Link> {/*className='nav-link'는 bootstrap이 디자인 먹히라고 쓰는 것. */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      

      
      </>
            
        </div>
    );
};

export default Header;