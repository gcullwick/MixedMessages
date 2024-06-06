//Random Message Generator


//Initiate variables and arrays
let randNames = ""
let randAnimal = ""
let randActivity = ""
let structure = ``

let names = ["Toby", "Jane", "Steve"]
let animal = ["turtle", "dog", "penguin"]
let activity = ["running", "swimming", "sun-bathing"]

function initStructure() { structure = [`It was a warm sunny day and ${randNames} the ${randAnimal} decided they wanted to go ${randActivity} that afternoon.`,
  `After a nice morning spent ${randActivity}, the ${randAnimal} heard somebody shout \"${randNames}! Where are you?\".`,
  `${randNames} couldn't put down their book about the ${randActivity} ${randAnimal}.`]}


//Random number generator (0-2) for getting values from arrays
const generateNum = (topic) => {
  return Math.floor(Math.random() * 3)
}

//Assign values to variables for the message
const assignAll = () => {
  randNames = names[generateNum()]
  randAnimal = animal[generateNum()]
  randActivity = activity[generateNum()]
}

function run() {
  assignAll();
  initStructure() //Structure needs to be called after other variables have been assigned values
  let outputString = structure[generateNum()]
  console.log(outputString)
}

//Runs the whole program
run()


//Used for testing and debugging the program.
/*console.log(randNames)
console.log(randAnimal)
console.log(randActivity)
console.log(structure)*/