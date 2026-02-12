// break statement is used to terminate the loop, browser skips all statements under the break statement and transfer the control to the end of the loop/outside te block

// break statement is used inside switch and looping statement

//ex1 break statement in loop
//here the loop executed from 1 then stops at 2(twice) while it break at 3 and the statements under the break is blocked from execution

// for(let i=1; i<=5; i++){
//   if(i===3)
//   {
//     break;
//   }
//   document.write("I love you! <br>")
// }

//continue statement continues the loop
//here 3was skipped while only 1,2,4,5 was executed

// for(i=1; i<=5; i++){
//   if(i===3){
//     continue;
//   }
//   document.write(i, "<br>")
// }


// function call return 

// function greet(name){
//   return "Hello "+ name;
// }

// document.write(greet("John"))

function grade(mark){
  let qualify= mark-5;
  return qualify;
}

document.write(grade(70))