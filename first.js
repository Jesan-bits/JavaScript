console.log("I need a job");
console.log("I love coding");
console.log("I am learning the basics of js and html");

 let Name = "Mainul Hasan Jesan";
learn = " we dont need to define any variable names in js";
console.log(learn);
console.log(Name);

console.log("this variable i gave here but stored integer instead of string " +Name);
console.log("there is a difference between null and undefined in js");

let isFalse = true;
let isTrue = false;
 Name = "Nothing";
let age = 23;
console.log(isFalse);
console.log(isTrue);
console.log(Name);
console.log(age);
typeof isFalse;
typeof age;
typeof Name;

console.log("const - will not change or update its value once its wriiten in a variable");

{
    const a = 5;
    console.log(a);
}

{
    const a = 6;
    console.log(a);
}

let x = BigInt("123");
let y = Symbol("Hello");
typeof x;
typeof y;


const Student ={

    fullName : "Mainul Hasan Jesan",
        age : 23,
        id : 24101400,
        cgpa : 3.11,
        isPass : false,

};

console.log(Student);
console.log(Student["fullName"]);
console.log(Student["age"]);
console.log(Student["isPass"]);
typeof Student;

Student["age"] = Student["age"] + 1;
console.log(Student["age"]);
console.log(typeof Student["age"]);





