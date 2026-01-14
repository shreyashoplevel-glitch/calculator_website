const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function displaytoscreen(input) {
    if ("+-*/".includes(input)) {
        if (firstNumber === "") return;
        operator = input;
        display.value += input;
    } else {
        if (operator === "") {
            firstNumber += input;
        } else {
            secondNumber += input;
        }
        display.value += input;
    }
}

function clearDisplay() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    display.value = "";
}

function calculate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        display.value = "Error";
        return;
    }

    switch (operator) {
        case "+":s
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                display.value = "Error";
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = result;

    // Allow chaining calculations
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
}
function delete_backspace(){
    if(secondNumber == ''){
        display.value = firstNumber;
        if(firstNumber != ''){
            display.value = "";
        }
    }
    if(secondNumber != ''){
        display.value = firstNumber + operator;
    }
    
    
}
