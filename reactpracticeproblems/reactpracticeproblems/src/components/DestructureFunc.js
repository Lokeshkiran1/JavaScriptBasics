import React from "react";
// const Destr=({name,movie})=>{
    const Destr=props=>{
        const {name,movie}=props
        return(
            <div>
                <h1>
                    Hello {name} likes {movie}
                </h1>
            </div>
        )
    }
export default Destr;