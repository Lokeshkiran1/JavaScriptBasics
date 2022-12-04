import React from "react";
function FunctionClick1(){
    function clickHandler(){
        console.log('you clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}
export default FunctionClick1;