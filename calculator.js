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
const sum = (no1)=>(no2)=>(no3)=> console.log(no1+no2+no3);
sum(5)(3)(8)