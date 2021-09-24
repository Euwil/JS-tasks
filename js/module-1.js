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
function getMark(mark) {
  switch (true) {
    case mark >= 89 && mark <= 100:
      console.log("A");
      break;
    case mark >= 75 && mark <= 88:
      console.log("B");
      break;
    case mark >= 60 && mark <= 74:
      console.log("C");
      break;
    case mark >= 45 && mark <= 59:
      console.log("D");
      break;
    case mark >= 20 && mark <= 44:
      console.log("E");
      break;
    case mark < 20:
      console.log("F");
      break;
    default:
      console.log("error");
  }
}
getMark(25);
//8
function getTime(number) {
  let hour = Math.floor(number / 60)
  let minute = number % 60
  console.log(`${hour}:${minute}`);
}
getTime(70);
getTime(450)
getTime(1441)

//9
//1 написать массив с вариантами 2 компьютер загадывает случайно число от и до 3 число подставляется в индекс 4 сделать условие на выигрышные
let arr = ["камень", "ножницы", "бумага"]
let compChoice = arr[Math.floor(Math.random() * 3)]
console.log(compChoice);
let userChoice = prompt("Введите свой вариант")
if (userChoice === "камень" && compChoice === "ножницы" || userChoice === "бумага" && compChoice === "камень" || userChoice === "ножницы" && compChoice === "бумага") {
  alert('user win');
} else if (userChoice === "камень" && compChoice === "бумага" || userChoice === "бумага" && compChoice === "ножницы" || userChoice === "ножницы" && compChoice === "камень") {
 alert(`computer win`);
} else {
  alert('draw');
}
/* for (let i = 1; i <= 100; i++) {
    let string = ""
    if (i % 3 === 0) {
     string += "Fizz"
    } 
    if (i % 5 === 0) {
     string += "Buzz"
    }
    console.log(string || i);
    }
 */

let board = "";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((j + i) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
