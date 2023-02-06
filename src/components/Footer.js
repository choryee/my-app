//rsc 침

import React from 'react';
import styled from 'styled-components';

// 재사용가능하게 HeaderList라는 컴포넌트 만든 것
//styled-components 장점: js,css파일 관리 쉬움

const StyledFooterDiv=styled.div`
 border: 1px solid black;
 height: 300px;
`;

const Footer = () => {
    return (
        <div>

        <StyledFooterDiv>
         <ul>
            <li>오시는길 : 서울 강남구</li>
            <li>전화번호 : 02 3333</li>

         </ul>

        </StyledFooterDiv>






            
        </div>
    );
};

export default Footer;