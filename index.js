// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

console.log(processFirstItem(['foo', 'bar'], (str) => str + str ))

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){
  let score = Math.floor(Math.random() * 3) + 0;
  return score
}

console.log('Score for one team', inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
function finalScore(inning, cb){
  let home = 0;
  let away = 0;

  for(let i = 0; i < inning; i++){
    home += cb();
    away += cb();
  }
  /*Code Here*/
  return {
    'Home': home,
    'Away': away
  }

}

console.log(finalScore(9, inning))
// finalScore();
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:
[
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
]
Final Score: awayTeam - homeTeam */

function getInningScore(cb) {
  let home = inning();
  let away = inning();
  return {
    'Home': home,
    'Away': away
  }
}

console.log(getInningScore())


function scoreBoard(cb1, numberInnings){
  let innings = [];

  // This really does all the work that is neccessary for most cases. 
  for(let i = 0; i < numberInnings; i++){
    innings.push({'Inning': `${cb1()} - ${cb1()}`})
  }

  // This prints the object. It can be parsed in different ways depending on the needs of the output. React will cover this completely. The important thing is the array of objects that has been return for further use by another application. 
  for(let i = 0; i < innings.length; i++) {
    let scores = innings[i].Inning;
    console.log(`Inning ${i}:`, 'Home:', Number(scores.split(' ').splice(0,1)), 'Away:', Number(scores.split(' ').splice(2,1)))
  }
  console.log(innings)
  return innings
}

scoreBoard(inning, 9);


function scoreboard(inning,numOfInnings) {
  let homeScore = 0
  let awayScore = 0
    for (let i = 0; i < numOfInnings; i ++){
    homeScore += inning();
    awayScore += inning();
  }
return `inning: ${numOfInnings} home: ${homeScore} away: ${awayScore}`
}
console.log(scoreboard(inning,7))