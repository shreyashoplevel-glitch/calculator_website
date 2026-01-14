const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function displaytoscreen(input) {

    // Unary operators
    if (input === "√") {
        if (firstNumber === "") return;
        firstNumber = Math.sqrt(parseFloat(firstNumber)).toString();
        display.value = firstNumber;
        return;
    }

    if (input === "x²") {
        if (firstNumber === "") return;
        firstNumber = (parseFloat(firstNumber) ** 2).toString();
        display.value = firstNumber;
        return;
    }

    // Binary operators
    if ("+-*/%".includes(input)) {
        if (firstNumber === "") return;
        operator = input;
        display.value += input;
        return;
    }

    // Numbers & decimal
    if (operator === "") {
        firstNumber += input;
    } else {
        secondNumber += input;
    }

    display.value += input;
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
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                display.value = "Error";
                return;
            }
            result = num1 / num2;
            break;
        case "%": result = num1 % num2; break;
        default: return;
    }

    display.value = result;
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
}

function delete_backspace() {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
    } else if (operator !== "") {
        operator = "";
    } else {
        firstNumber = firstNumber.slice(0, -1);
    }

    display.value = firstNumber + operator + secondNumber;
}
