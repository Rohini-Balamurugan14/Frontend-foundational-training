let inputString = "";
let inputNumber1 = undefined;
let inputNumber2 = undefined;
let currentOperator = undefined;

function addNumber(number) {
    inputString += number;
    document.getElementById("display").value = inputString;
}

function setOperator(operator) {
    if (inputString !== "") {
        inputNumber2 = parseFloat(inputString);

        if (inputNumber1 === undefined) {
            inputNumber1 = inputNumber2;
        } else if (currentOperator) {
            inputNumber1 = performCalculation(inputNumber1, inputNumber2, currentOperator);
            document.getElementById("display").value = inputNumber1;
        }

        inputString = "";
    }

    currentOperator = operator;
}

function calculate() {
    if (inputString === "") {
        return;
    }

    if (currentOperator !== undefined && inputNumber1 !== undefined) {
        inputNumber2 = parseFloat(inputString);
        inputNumber1 = performCalculation(inputNumber1, inputNumber2, currentOperator);
        document.getElementById("display").value = inputNumber1;
        inputString = "";
        currentOperator = undefined;
    }

}

function performCalculation(inputNumber1, inputNumber2, operator) {
    switch (operator) {
        case '+': {
            return inputNumber1 + inputNumber2;
            break;
        }

        case '-': {
            return inputNumber1 - inputNumber2;
            break;
        }

        case '*': {
            return inputNumber1 * inputNumber2;
            break;
        }

        case '/': {
            return inputNumber2 !== 0 ? inputNumber1/inputNumber2 : "Error";
            break;
        }

        default: { 
            return inputNumber2;
        }
    }
}

function clearCalculator() {
    inputString = '';
    inputNumber1 = undefined;
    inputNumber2 = undefined;
    currentOperator = undefined;
    document.getElementById("display").value = '';
}
