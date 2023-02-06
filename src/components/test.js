import React, { useState } from 'react';

const test = () => {

const[time,setTime]=useState(1);

const handleClick=()=>{
    setTime(time+1);
}



    return (
        <div>
            <span>현재 시각: {time} 시</span>
            <button onClick={handleClick}>Update</button>
            
        </div>
    );
};

export default test;