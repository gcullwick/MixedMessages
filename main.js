//Random Message Generator

let randName = ""
let randAnimal = ""
let randActivity = ""

const generateNum = (topic) => {
  return Math.floor(Math.random() * 3)
}

console.log(generateNum())