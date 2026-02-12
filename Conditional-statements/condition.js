//If statement

// const fasting=true;

// if(fasting){
//   document.write("I am not hungry")
// }
// else{
//   document.write("I am hungry")
// }

// using else if is for more than two of more statements, so the  else statement serves as default statement when if and else if are not correct

// const time = "evening";

// if (time==="Morning"){
//   document.write("I am fasting")
// }
// else if
// (time==="Afternoon"){
//   document.write("I am not ready")
// }
// else{

//   document.write("I am hungry")

// }

//switch  case
//note that if there is break before each case the statement display only one  choice that match or default statement and outside block statement if no case matches

// const choice = "1hrs";

// switch(choice){

//   case "9hrs":{
//     document.write("Book a flight ticket <br>" )
//   }
//   break;
//   case "4hrs":
//   document.write("book a train ticket <br>")
//    break;
//   case "2hrs":{
//     document.write("Book a bus ticket <br>")
//   }
//   break;
// default:{
//   document.write("I am not traveling today <br>")
// }
// }
// //outside block statement
// document.write("office is closed")

//when the case has no break then all statements activate regardless of case matching or not



const choice="9hrs";

switch(choice){
  case "9hrs":{
    document.write("Book a flight ticket <br>")
  }

  case "4hrs":{
    document.write("Book a train ticket <br>")
  }

  case "2hrs":{
    document.write("Book a bus ticket <br>")
  }
  default:{
    document.write("I am not traveling <br>")
  }
}
document.write("Office is closed")
