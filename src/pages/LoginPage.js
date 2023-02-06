import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';

const LoginPage = (props) => {  //Header.js에서 넘김 값 받는 것. 14강.
    console.log('LoginPage----', props);
   //console.log(props.match.params.id); <-계속 에러남.


    return (
        <div>
            <Login/>
            <button onClick={()=>props.history.push('/')}>뒤로가기</button>
        
    
        </div>
    );
};

export default LoginPage;