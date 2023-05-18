//we are going hiking
let backpack = []

backpack.push(`snacks`)
backpack.push(`sunblock`)
backpack.push(`water`)
backpack.push(`sunglasses`, `hat`)

backpack.splice (1, 1)

backpack.unshift(`shiny rock`)


let fannypack = backpack.splice (0 , 3)
// console.log(backpack)
// console.log(fannypack)
//console.log(fannypack[0])

for (let i = 0; i < backpack.length; i++){
    //console.log(backpack[i]) //this is the way we access our values from the array
}

for (let i = 0; i < fannypack.length;){
    let item = fannypack.shift()
    backpack.push(item)
}

console.log(backpack)
console.log(fannypack)

// array methods 

let arr = []

arr.shift() //removes firast item from the array takes no arguments
arr.pop() //removes last item from the array takes no arguments
arr.unshift(`arg1`, `arg2`, `arg3`) // attaches something to the front of an array and takes any # of arguments
arr.push(`arg1`, `arg2`, `arg3`) // attaches items to the end of an array takes any # of arguments 
arr.slice( `starting index`, `ending index`) //creates a copy of a part of an array, takes a starting index and ending index, ending index is not included in copyonly makes
    //doesn't change the original data. Need to create a new value for it to ensure we a new value so we can reaccess it 
arr.splice(`starting index`, `number to be removed`, `new value to be added`) // removes/inserts values into an array, takes upto 3 arguments (starting index , 3 items to be removed, new values to be inserted)

//Guess Me Game
let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log(`guess me is ${guessMe} which is divisible by 4 or 5. Added 25`)
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log(`guess me is ${guessMe} which is divisible by 3. Added 27`)
        guessMe -= 27
    } else {
        console.log(`Added 3`)
        guessMe += 3
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}`)
}