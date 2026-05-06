//== and ===
let a = 5;
 let b = "5";

// Exponential 
 let c = 2;
 console.log(c**a);

 console.log(a==b);

 console.log(a!=b);

 console.log(a===b);
 console.log(a!==b);

// if condition 
 let mode = "dark";
 let color ;

 if(mode === "dark"){
    color = "Black";
 }
 else if(mode === "grey"){
    color = " green";
 }
 else{
    color = "white";
 }

 console.log(color);

 // Ternary operation

 let Jesan = 55;
 let age = Jesan>=30 ? "old" : "Not old";
 console.log(age);
 let Anaf = 16;
 let age1 = Anaf>=30 ? "old" : "Not old";
 console.log(age1);

 //Practices and examples - MDN Docs

 alert("Hello user, youre using Jesan's MacBook");

 //taking inputs

 let Name = prompt("what is your name?");
 console.log(Name);

 // practice - multiple of a number

 let number = prompt("Choose a number, please.");
 if(number% 5===0){
    console.log("The number you chose is a multiple of 5");

 }
else {
    console.log("The number you chose is not multiple of 5");

}

// Practice - grade

let Num = prompt("Enter your score (0-100) in the MATH course: ");
let grade;

if(Num<=100 && Num>=97){
     grade = "A+";
}
else if(Num<=96 && Num>=90){
    grade = "A";
}
else if(Num<=89 && Num>=85){
    grade = "A-"
}

else if(Num<=84 && Num>=80){
    grade = "B+";
}
else if(Num<=79 && Num>=75){
    grade = "B";
}
else if(Num<=74 && Num>=70){
    grade = "B-";
}

else if(Num<=69 && Num>=65){
    grade = "C+";
}
else if(Num<=64 && Num>=60){
    grade = "C";
}
else if(Num<=59 && Num>=57){
    grade = "C-";
}
else if(Num<=56 && Num>=55){
    grade = "D+";
}
else if(Num<=54 && Num>=52){
     grade = "D";
}
else if(Num<=51 && Num>=50){
     grade = "D-"
}
else{
    grade = "Fail";
}

console.log("Your achieved grade in the MATH course is: "+ grade); 

