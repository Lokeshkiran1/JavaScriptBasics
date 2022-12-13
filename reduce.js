const products=[
    {
        id:1,
        item:'Mobile',
        qty:2,
        cost:100
    },
    {
        id:2,
        item:'laptop',
        qty:1,
        cost:200
    },
    {
        id:3,
        item:'earpods',
        qty:2,
        cost:100
    }
]
const totalCost=products.reduce((acc,curr)=>acc+curr.qty*curr.cost,0);
// console.log(totalCost);
const totalNum=products.reduce((acc,curr)=>acc+curr.qty,0);
// console.log(totalNum);


const myArr=[
    1,
    1,
    1,
    2,
    {
        id:1,
        key:12,
    },
    2,
    {
        id:1,
        key:12,
    },
    4,
    5,
]
const removeDup=(arr)=>arr.reduce((acc,curr)=>!acc.some((elem)=>JSON.stringify(elem)===JSON.stringify(curr))?[...acc,curr]:acc,[]);
console.log(removeDup(myArr));