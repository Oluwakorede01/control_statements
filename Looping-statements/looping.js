
//for loop is known as entry control loop, 
//for loop is to be used when you know how many number of times the loop is going to get executed.

//Browser executes the statement inside the for loop until the given conditional expression evaluate to false

// for(initialization; conditional expression; increment/decrement ){

//   statement
// }

//1. initialization
//2. conditional expression
//3. statement
//4. increment/decrement

//The statement runs from 1 to 10 since its less than or equal to 10, so it stopped at 10 which means equal 10

// for(i=1; i<=10; i++){
//   document.write("I LOVE YOU <br>")
// }


//while loop is used to repeat some statements when some condition is true ,while loop is quite similar to for loop but has different syntax and it is used when the number of times your should execute the loop is not known.

//while loop is also known as entry control loop

// initialization
// while(conditional expression){
//   statement;
//   increment/decrement;
// }


//1. initialization
//2. conditional expression
//3. statement
//4. increment/decrement


// let i=1;
// while(i<=10){
//   document.write("I LOVE YOU <br>");
//   i++;
// }

//while loop can be used to display a statement infinitely if the condition is true.

//Here a window prompt came up to enter username since the username is empty and the condition is true, when the prompt was filled then it return the result outside the block which is Hello plus the input that was filled in the prompt.

// let username = "";

// while(username ===""){
//   username= window.prompt("Enter your username");
// }

// document.write(`Hello ${username}`);



//do while loop is an exit control, browser execute the statement in do while loop once at first before confirming the condition of the statement if met or not

//1. initialization
//2. statement
//3. conditional expression
//4. increment/decrement

// let i=1;
// do{
//   document.write("Hey You! <br>");
//   i++;
// }while(i<=5)

//for in loop, for in is used to loop through attributes of an object


// let student={matric:"00194533", name:"John", dept:"Masscom"}

// for(let attribute in student){
//   document.write( attribute," : " ,student[attribute], "<br>")
// }



