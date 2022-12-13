const desk=['Laptop','Mouse','Speakers','Monitor','MicroPhone'];
// console.log(desk.slice(2));

// console.log(desk.slice(1,3));

// console.log(desk.slice(3));

const str='Life is Beautiful';
// console.log(str.slice(0,7));

const keys=['XDC-102-2206','XDC-754-1510','XDC-998-0311'];
const dateStrings=keys.map((elem)=>elem.slice(8));
// console.log(dateStrings);
const keyCodes=keys.map((elem)=>elem.slice(4,7));
console.log(keyCodes);