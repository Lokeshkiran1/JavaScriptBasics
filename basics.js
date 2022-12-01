//basics of JavaScript
var a=100;
var b=200;
var c=a+b;//it adds values of a and b
//console.log(c);//prints sum of 100 and 200

/*multiline
commit*/

var x=100;
var _value='lokesh';
var X=100;
var a1=200;
var $price=5;//global variables

if(10<13){
    var a=15;//local variable
    //console.log($price);
}
function abc(){
    //console.log(a1);
}
//abc();//calling function
function pqr(){
    //console.log(X);
}
//pqr();
//datatypes
var m=12;
var n='abc';
var p=true;
var q;
var r=null;
//console.log(m,n,p,q,r);
//comparision operators
//console.log(0==false);
//console.log(0===false);

//if else if
var i=30;
if(i==10){
    console.log(`${i} is equal 10`);
}else if(i==15){
    console.log(`${i} is equal 15`);
}else if(i==20){
    console.log(`${i} is equal 20`);
}else{
    //console.log(`${i} is not equal to 10,15,20`);
}

//switch statement
var grade='C';  
var result;  
switch(grade){  
    case 'A':  
    result="A Grade";  
    break;  
    case 'B':  
    result="B Grade";  
    break;  
    case 'C':  
    result="C Grade";  
    break;  
    default:  
    result="No Grade";  
}
//console.log(result);

//for loop
for(i=1;i<=5;i++){
    //console.log(i);
}

//while loop
// var j=5;
// while(j<10){
//     console.log(j);
//     j++;
// }
//do while loop
// var d=10;
// do{
//     console.log(d);
//     d++;
// }while(d<15);

//functions
var add=new Function('num1','num2','return Math.pow(num1,num2)');
console.log(add(10,2));

function msg(m){
    console.log(m);
}
msg("Hello !!!!!!!!");

