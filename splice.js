const desk=['laptop','mouse','speaker','monitor','microphone'];
// const a=desk.splice(2,1);
// console.log(desk);
// console.log(a);

// desk.splice(1,1,'keyboard','router');
// console.log(desk);

const move=(arr,start,count,moveTo)=>{
    const clone=[...arr];
    clone.splice(moveTo,0,...clone.splice(start,count));
    return clone;
}
let newDesk=move(desk,2,2,0);
console.log(newDesk);