//1
/* let yourBirthday = prompt("Укажите год вашего рождения")
if (yourBirthday % 4 === 0) {
    console.log("Год вашего рождения високосный");
} else {
    console.log("Год вашего рождения не високосный");
} */
//2
/* let randomNumber = Math.ceil(Math.random() * (10-1)+1)
console.log(randomNumber);
let userAnswer = prompt("Введите число от 1 до 10")
if (userAnswer == randomNumber) {
    console.log("Вы угадали число");
} else {
    console.log("Вы не угадали число");
} */
//3
/* let firstNumber = prompt("Введите первое число")
let secondNumber = prompt("Введите второе число")
let operator = prompt("Введите знак операции")
let total = 0
firstNumber = Number.parseInt(firstNumber)
secondNumber = Number.parseInt(secondNumber)
switch(operator) {
    case "+": total = firstNumber + secondNumber
    break
    case "-": total = firstNumber - secondNumber
    break
    case "/": total = firstNumber / secondNumber
    break
    case "*": total = firstNumber * secondNumber
    break
    default:
        console.log(Error);
        
}
console.log(total); */

//4
/* let userChoice = prompt("Which unit do you want to convert: celsius or fahrenheit?")
userChoice = userChoice.toLowerCase()
console.log(userChoice);
let result = 0
if (userChoice == "celsius") {
    let value = prompt("Celsius")
    result = value * 1.8 + 32
} else if (userChoice == "fahrenheit") {
    let value = prompt("Fahrenheit")
    result = (value - 32) / 1.8
} else {
    console.log("error");
}
console.log(result); */

//5
/* function isInRange() {
    let number = prompt("Введите число")
    if (number >= 55 && number <= 99) {
        console.log("Привет");
    } else {
        console.log("Oh no");
    }
}
isInRange() */

//6
/* function giveMax() {
let firstNumber = prompt("Введите первое число")
let secondNumber = prompt("Введите второе число")
let thirdNumber = prompt("Введите третье число")
if (Number.isNaN(firstNumber, secondNumber, thirdNumber) === false) {
    let maxNumber = Math.max(firstNumber, secondNumber, thirdNumber)
    console.log(maxNumber);
} else {
    console.log("Not a number");
}
}
giveMax() */

//7
