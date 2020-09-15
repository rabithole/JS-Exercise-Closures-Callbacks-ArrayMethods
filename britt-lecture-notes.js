function game(sport) {
	let score = 0;
	return function win() {
		score++;
		return `Your ${sport} game score is ${score}`;
	}
}

const football = game('football');
const baseball = game('baseball');

console.log(football())
console.log(football())
console.log(baseball())

// answers the question of where are my variables and functions available to me? 
// global 
// const cohort = 'web36';
// let school = 'Lambda';


// function sprintThree(){
//   var track = 'Web';
//   console.log(track);
// }
// // console.log(track);
// sprintThree();

// console.log(study);

// functions can reach outside but we cannot reach within a function from outside 
// const track = 'data science';

// function lambda(){
//   const cohort = 'Web36';
//   console.log(cohort);
//   // const track = 'Fullstack web';
//   console.log(track);
// }

// lambda();

/*
var
- can be redefined 
- can be reassigned 
- var is function scoped 

let
- cannot be redefined 
- can be reassigned
- block scoped 

const
- cannot be redefined 
- cannot be reassigned 
- block scoped 

*/

// function lambda(){
//   var track = 'web';
//   console.log(track);
// }

// lambda();
// console.log(track);
// let answer;
// if(1 === 1){
//   answer = true;
// }

// console.log(answer);

// for(let i = 0; i < 5; i ++){
//   console.log(i);
// }
// console.log(i);

// const dog = 'Ada';

// function callDog(dog){
//   return dog;
// }

// function puppy(){
//   const dog = 'Noa';
//   return callDog('Fido');
// }

// console.log(puppy());

// return vs console.log();
// console.log() prints something to the console - this is used for testing our code - we want to see what our code might give us back 
// return - is actually executing the code - we want the function to give us something back 

// Best Practices 
// try not to create global variables 
// use const until you can't and then use let but stay away from var 
// functions are scoped the same way variables are scope 

// function sayHi(name){
//   function yell(){
//     console.log(name.toUpperCase());
//   }
//   return yell();
// }

// sayHi('Brit');

// yell(); // if we create a function inside of another function it will only ever be available inside of that function - yell does not exist on the global scope - it only exists inside of sayHi
// const name = 'peter';
// function hello(){
//   // const name = 'Brit';
//   console.log(name);
// }

// hello();

// Hoisting 
// allows you to access functions and variables before they have been created 
// 2 things that are hoisted - function declearations and variable declearations

// working();

// function working(){
//   console.log('it works!');
//   console.log(add(1,2));
// }

// function add(num1, num2){
//   return num1 + num2;
// }
// working();

// console.log(myName);

// var myName = 'Brit';


// console.log(myName);

// what does this file do? 
 
// function invocations here

// how does this file do it?

// write all functions here 


// Closures 
// closures give us the ability to put functions together 
// code that been identified elsewhere that we can use later 
// lexical scope === belonging 
// we can pass things down but we can't pass them back up

// function country(countryName){
//   const lang1 = 'French';
//   const lang2 = 'English';
//   console.log(`${lang1} and ${lang2} are the offical languages of ${countryName}`);
//   debugger;
  
//   function province(provName){
//     const animal = 'beaver';
//     console.log(`${lang1} and ${lang2} are the offical languages of ${countryName} and the most populated province is ${provName}`);
//     debugger;
    
//     function city(cityName){
//       const food = 'maple syrup';
//       console.log(`${lang1} and ${lang2} are the offical languages of ${countryName} and the most populated province is ${provName} and the national food is ${food} and the national animal is a ${animal}`);
//       debugger;
      
//     }// this closes city
//     city('Ottawa');
//   }// this closes province
//   province('Ontario');
// }// this closes country
// country('Canada');

// when inner scope references a variable created in the outter scope that is a closure 

function game(sport){
  let score = 0;
  return function win(){
    score ++; // taking the score and incrimenting by 1 
    return `Your ${sport} game score is ${score}`;
  }
}

// then I can come here and make a game 

// const hockeyGame = game('hockey');
// const basketball = game('basketball');
// const playerOne = game('hockey');
// const playerTwo = game('hockey');

// console.log('I am player one:', playerOne());
// console.log('I am play Two:', playerTwo());
// console.log('I am play Two:', playerTwo());
// console.log('I am play Two:', playerTwo());
// console.log('I am player one:', playerOne());
// console.log(hockeyGame());
// console.log(hockeyGame());
// console.log(hockeyGame());
// console.log(hockeyGame());
// console.log(basketball());
// console.log(basketball());
// console.log(basketball());

// console.log(score);
// console.log(win);

// Callbacks and Higher Order Functions 
// higher order functions receive / callback functions are passed in

// calculator 

function calculator(num1, num2, operate){
  return operate(num1, num2);
  //add(3, 5);
  //subtract(3,5);
  //multiply(3,4);
  //divide(3,5);
}

const add = function(num1, num2){
  return num1 + num2;
  // 3+5
}

const subtract = function(num1, num2){
  return num2 - num1;
  // 5 - 3;
}

const multiply = function(num1, num2){
  return num1 * num2;
  // 5 * 3;
}

const divide = function(num1, num2){
  return num2 / num1;
  // 5 / 3; 
}

console.log(calculator(3, 5, add));
console.log(calculator(3, 5, subtract));
console.log(calculator(3, 5, multiply));
console.log(calculator(3, 5, divide));