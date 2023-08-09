// const sum = (a, b) => {
//   return a + b;
// };
// const dif = (a, b) => {
//   return a - b;
// };
// const mult = (a, b) => {
//   return a * b;
// };
                                                        //sum , dif and mult are call back function which is used inside the arguments of high order function
                                                       // calculator is higher order function which use another function as an argument
// const calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// };
// console.log(calculator(4, 2, mult));

// console.log(sum(2,4));
// console.log(dif(1,4));
// console.log(mult(2,5));

//



//closures
//it is same like lexical scoping
// const outerFunc =  (a) => {
//     let b = 10

// const innerFunc = () =>{
//     let sum = a + b;
//     console.log(`the sum of two number is ${ sum }`);
// }
// innerFunc()
// }
// outerFunc(67)

// use of "use strict mode"
// "use strict"
// a = 1
// console.log(a);




///// Synchronous Function



// const fun2 = () => {
//     console.log(`function 2 is called`);                  
// }
// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2()
//     console.log(`function 1 is called again`);
// }
// fun1()



///// Asynchronous Function


// const fun2 = () => {
//     setTimeout(() => {
//         console.log(`function 2 is called`); 
//     }, 3000);
                     
// }
// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2()
//     console.log(`function 1 is called again`);
// }
// fun1()


///////Function Currying

// function sum(no1){
//     // console.log(no1);
//     return function(no2){
//         // console.log(no1,no2);
//         return function (no3) {
//             console.log(no1==no2+no3);
//         }
//     }
// }



////// In One Line
// const sum = (no1)=>(no2)=>(no3)=> console.log(no1+no2+no3);
// sum(5)(3)(8)


// let a = Math.floor((Math.random()*100)+1);
// let input = parseInt(window.prompt("Guess the number"));

//     if (a===input) {
//         console.log("your guess number is correct");
//     }else if(a>input){
//         console.log("you guess the smaller number");
//     }else{
//         console.log("you guess the greater number");
//     }




 
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="style.css" />
//     <title>Practice</title>
//   </head>

//   <body>
//     <div class="parentDiv" id="parentId">
//       <div class="childDiv" id="childId"></div>
//     </div>
//     <script>
//       const parentId = document.getElementById("parentId");
//       const childId = document.getElementById("childId");

//       const parentCall = () => {
//         alert("Parent Div Call");
//       };

//       const childCall = () => {
//         alert("Child Div Call");
//         event.stopPropagation();
//       };

//       parentId.addEventListener("click", parentCall,true);
//       childId.addEventListener("click", childCall,true );
//     </script>
//   </body>
// </html>
// let a = Math.floor(Math.random() * 100 + 1);
// let input = parseInt(window.prompt("Guess the number"));
// if (a === input) {
//   console.log("your guess number is correct");
// 34
// } else if (a > input) {
//   console.log("you guess the smaller number");
// } else {
//   console.log("you guess the greater number");
// }
// console.log(input); 

// let user = window.prompt('Choose Snake , Water and Gun')
// let comp = Math.floor(Math.random()*3)
// console.log(comp);
// let game = ["Snake","Water","Gun"][comp]
// console.log(user,comp,game);
// if (user===game) {
//   console.log("match tied , nobody is win"); 
// } else if(user == 'Snake' && game == "Water"){
//   console.log('user won'); 
// } else if (user == "Water" && game == "Gun"){
//   console.log("user won"); 
// }else if(user == "Gun" && game == "Snake"){
//   console.log("user won"); 
// }else if (user == "Gun" && game == "Water"){
//   console.log("comp won"); 
// }else if(user == "Water" && game == "Snake"){
//   console.log("comp won"); 
// } else if(user == "Snake" && game == "Gun"){
//   console.log("comp won"); 
// }else{
//   console.log("Wrong selection");
// } 