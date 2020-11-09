//VERY EASY 
// compares firstNumber and secondNumber and returns the smaller of the two.
function min(numberOne, numberTwo) {
    return Math.min(numberOne, numberTwo);
}
console.log(min(1, 10));

//EASY
let studentsFirstName = ["Natalie", "Toby", "Hector"];
//                          0         1       2
let studentsLastName = ["Rodriguez", "Smith", "Hernadez"];
//                          0          1         2
let studentsAge = ["18", "3", "19"];
//                  0     1     2
console.log(" Hello my name is " + studentsFirstName[1] + " " + studentsLastName[1] + " and I am " + studentsAge[1] + " years old. ")

//MEDIUM
var userInput = Number(prompt("Enter a number between 1-12 here!"))

var months = ["That is not a month.", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

if(userInput === 1){
    console.log( months[1])
}else if(userInput === 2){
    console.log( months[2])
}else if(userInput === 3){
    console.log( months[3])
}else if(userInput === 4){
    console.log( months[4])
}else if(userInput === 5){
    console.log( months[5])
}else if(userInput === 6){
    console.log( months[6])
}else if(userInput === 7){
    console.log( months[7])
}else if(userInput === 8){
    console.log( months[8])
}else if(userInput === 9){
    console.log( months[9])
}else if(userInput === 10){
    console.log( months[10])
}else if(userInput === 11){
    console.log( months[11])
}else if(userInput === 12){
    console.log( months[12])
}else{
    console.log( months[0])
}

//HARD
const massTom = 8;
const heightTom = 9;
const massJerry = 45;
const heightJerry = 10;
const BMITom = massTom / heightTom ** 2;
const BMIJerry = massJerry / (heightJerry * heightJerry);
const higherBMI = BMITom > BMIJerry;
else if (BMIJerry < BMITom) {
    console.log(`Tom's BMI ${BMITom} is higher than Jerry's ${BMIJerry}`)
} else {
    console.log(`Jerry's BMI (${BMIJerry}) is higher than Tom's (${BMITom})`)
}
console.log(BMITom, BMIJerry, tomHigherBMI);