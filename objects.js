//creating objects in javascript
//1.By object literal
emp={
    id:107,
    name:"Sunil",
    salary:40000
}
//console.log(emp.id+" "+emp.name+" "+emp.salary);

//2.By creating instance of Object
var emp=new Object();
emp.ID=77;
emp.Name='Lokesh';
emp.Salary='50000';
//console.log(emp);

//3.By using an Object Constructor
function student(id,name,marks){
    this.id=id;
    this.name=name;
    this.marks=marks;
}
s=new student(27,'Kiran',600);
//console.log(s);

//4.Defining method in js object
function employee(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.changeSalary=changeSalary;
    function changeSalary(newSalary){
        this.salary=newSalary;
    }
}
s=new employee(11,'Dhoni',50000);
//console.log(s);
s.changeSalary(60000);
//console.log(s);

//Arrays

//1.js array literal
var students=["abc","pqr",'xyz'];
for(i=0;i<students.length;i++){
    //console.log(students[i]);
}

//2.using new keyword

var student=new Array();
student[0]='varun';
student[1]='Arun';
student[2]='Manu';
for(i=0;i<student.length;i++){
    //console.log(student[i]);
}

//3.JavaScript array constructor
var stu=new Array('jai','john','michel');
for(i=0;i<stu.length;i++){
    //console.log(stu[i]);
}

//strings=================>>>>>>>
//1.By string literal
var str='this is string123 #$&()';
//console.log(str);

//2.By string object
var stringName=new String("hello #from");
//console.log(stringName);

//3.js string methods
var str1="Javatpoint";  
// console.log(str1.charAt(4));  //t
// console.log(str1.charAt());//J
// console.log(str.charAt(str.length-1));//t

//4.concat
var x1="Javatpoint";  
var y1=".com";  
console.log(x1.concat(y1)); 

//JavaScript Date Object

//1.print date/month/year
var date=new Date();
var day=date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear();
//console.log("DD/MM/YYYY ::",`${day}/${month}/${year}`);

//2.Current time
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
//console.log("current time:",h,":",m,":",s);


//JS Math

//1.squareRoot
// console.log(Math.sqrt(64));
// console.log(Math.random());
// console.log(Math.pow(3,3));
// console.log(Math.floor(3.9));//3
// console.log(Math.ceil(3.9));//4
// console.log(Math.round(3.9));//4
// console.log(Math.abs(-4.1));//4.1

//Numbers
var xy=0;
//console.log(Number.isFinite(xy));

function check(x,y)  
{  
  return x/y;  
}  
//console.log(Number.isFinite(check(0,10)));
//console.log(Number.isFinite(check(10,0)));

//parseFloat
var e='50.25String';
//console.log(Number.parseFloat(e));

var ab="10.45";  
var bc="20.55";  
var ca=ab+bc; 
//console.log(ca);
var ce=Number.parseFloat(ab)+Number.parseFloat(bc); 
//console.log(ce);

//fixed
var a=98.9721;  
//console.log(a.toFixed(2)); 

//toString()

var a12=50;  
var b12=30;  
var c12=a12+b12; 
//console.log(c12);
var c123=a12.toString()+b12.toString(); 
//console.log(c123); 

//Boolean

var bool=new Boolean(10<=10);
console.log(bool);