const numArray=[982,263,547,586,234,655];
const even=numArray.filter((ele)=>ele%2==0);
const odd=numArray.filter((ele)=>ele%2);
// console.log(even);
// console.log(odd);

const employee=[
    {
        name:'Lokesh',
        age:'25',
        expertise:'MERN'
    },
    {
        name:'child',
        age:'26',
        expertise:'mechanical'
    },
    {
        name:'Manu',
        age:'22',
        expertise:'civil'
    }
]
// console.log(employee.filter((emp)=>emp.age>25));
const findEmployee=([prop,val],arr)=>
arr.filter((elem)=>elem[prop]===val);
//console.log(findEmployee(['expertise','civic'],employee));

const products=[
    {
        name:'shoe',
        is:true
    },
    {
        name:'mobile',
        is:true
    },
    {
        name:'laptop',
        is:false
    }
]
const isAva=products.filter(elem=>elem.is!==true);
console.log(isAva);