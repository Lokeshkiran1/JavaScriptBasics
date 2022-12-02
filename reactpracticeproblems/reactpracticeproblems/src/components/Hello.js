import React from 'react';
const Hello=()=>{
    //using JSX
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Kiran</h1>
    //     </div>
    // )
    //without JSX
    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello Kiran KS'));
}
export default Hello;