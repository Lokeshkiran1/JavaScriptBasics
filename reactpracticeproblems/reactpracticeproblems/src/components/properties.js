import React from 'react';
const SayHi=(props)=>{
    console.log(props);
    return <h1>Hai, Hello {props.name}</h1>
}
export default SayHi;