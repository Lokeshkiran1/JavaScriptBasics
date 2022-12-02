// Declaring class  
// class Employee  
//   {  
//     //Initializing an object  
//     constructor(id,name)  
//     {  
//       this.id=id;  
//       this.name=name;  
//     }  
//     //Declaring method  
//     detail()  
//     {  
//         console.log(this.id+" "+this.name+"<br>")  
//     }  
// }  
// //passing object to a variable   
// var e1=new Employee(101,"Martin Roy");  
// var e2=new Employee(102,"Duke William");  
// e1.detail(); //calling method  
// e2.detail();  

// //using class expression
// var emp = class {  
//     constructor(id, name) {  
//       this.id = id;  
//       this.name = name;  
//     }  
// }; 
// console.log(emp.name);

// //js prototype object
// function Employee(firstName,lastName)  
// {  
//   this.firstName=firstName;  
//   this.lastName=lastName;  
// }  
  
// Employee.prototype.fullName=function()  
// {  
//     return this.firstName+" "+this.lastName;  
// }  
  
// var employee1=new Employee("Martin","Roy");  
// var employee2=new Employee("Duke", "William");
// console.log(employee1.fullName);
// console.log(employee2.fullName);

// //js constructor method
// class CompanyName  
// {  
//   constructor()  
//   {  
//     this.company="Javatpoint";  
//   }  
// }  
// class Employee extends CompanyName {  
//   constructor(id,name) {  
//         super();  
//         this.id=id;  
//         this.name=name;  
//     }   
// }     
// var emp = new Employee(1,"John");  
// console.log(emp.id+" "+emp.name+" "+emp.company);

// //js static method
// // class Test{
// //     static display(){
// //         return 'static method is invoked'
// //     }
// // }
// // console.log(Test.display());

// class Test {  
//     static display() {  
//         return "static method is invoked"  
//     }  
      
//    show() {  
//     console.log(Test.display());   
//     }    
// }  
// var t=new Test();  
// t.show();  

// //1. Encapsulation   

// class Student  
// {  
//     constructor()  
//     {  
//        var name;  
//        var marks;  
//     }  
//     getName()  
//     {  
//         return this.name;  
//     }  
//     setName(name)  
//     {  
//         this.name=name;  
//     }  
        
//     getMarks()  
//     {  
//         return this.marks;  
//     }  
//     setMarks(marks)  
//     {  
//         this.marks=marks;  
//     }  
  
// }  
// var stud=new Student();  
// stud.setName("John");  
// stud.setMarks(80);  
// console.log(stud.getName()+" "+stud.getMarks());

// //2.Inheritance---------------

class Moment extends Date{
    constructor(){
        super();
    }
}
var m=new Moment();
console.log(m.getDate()+"/"+(m.getMonth()+1)+"/"+m.getFullYear());

//2.Example  custom class

// class Bike  
// {  
//   constructor()  
//   {  
//     this.company="Honda";  
//   }  
// }  
// class Vehicle extends Bike {  
//   constructor(name,price) {  
//    super();  
//     this.name=name;  
//     this.price=price;  
//   }   
// }  
// var v = new Vehicle("Shine","70000");  
// console.log(v.company+" "+v.name+" "+v.price);  


//3. Absraction==========
//Creating a constructor function  
// function Vehicle(vehicleName)  
// {  
//     this.vehicleName= vehicleName;  
//     throw new Error("You cannot create an instance of Abstract class");  
  
// }  
// Vehicle.prototype.display=function()  
// {  
//     return this.vehicleName;  
// }  
// var vehicle=new Vehicle('Honda'); 



//Creating a constructor function  
function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Honda");  
console.log(bike.display());  


//4.Polymorphism============>>>>>>
// class A  
//   {  
//      display()  
//     {  
//       console.log("A is invoked");  
//     }  
//   }  
// class B extends A  
//   {  
//     display()  
//     {  
//       console.log("B is invoked");  
//     }  
//   }  
  
// var a=[new A(), new B()]  
// a.forEach(function(msg)  
// {  
// msg.display();  
// }); 



//example 2
function A()  
{  
}  
A.prototype.display=function()  
{  
  return "A is invoked";  
}  
function B()  
{  
    
}
B.prototype.display=function()  
{  
  return "B is invoked";  
} 
  
B.prototype=Object.create(B.prototype);  
  
var a=[new A(), new B()]  
  
a.forEach(function(msg)  
{  
  console.log(msg.display()+"<br>");  
}); 