import React from 'react';
const Props=props=>{
    return(
        <div>
            <h2>
                Hello {props.name}, you likes and plays {props.sport}
            </h2>
        {props.children}
        </div>
    )
}
export default Props;