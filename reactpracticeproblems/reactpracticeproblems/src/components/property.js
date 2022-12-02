import React from 'react';
const Property=(props)=>{
    console.log(props);
    return <h2>Hello {props.name}, you likes film {props.film}, right!!!</h2>
}
export default Property;