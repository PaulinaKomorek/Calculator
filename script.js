var firstNumber = 0;
var secondNumber = 0;
var result = 0;
var operation = "";
var selectedNumber = "first";

function setOperation(Operation) {
    operation = Operation;
    selectedNumber = "second";
}

function setEqual() {
    if (operation == "Add")
        result = firstNumber + secondNumber;
    else if
    (operation == "Substraction")
        result = firstNumber - secondNumber;
    else if
    (operation == "Multiplication")
        result = firstNumber * secondNumber;
    else if (operation == "Division")
        result = firstNumber / secondNumber;
    document.getElementById("display").value = result;
}

function setNumber(Number) {
    if (selectedNumber == "first") {
        firstNumber = firstNumber * 10 + Number;
        document.getElementById("display").value = firstNumber;
    }
    else {
        secondNumber = secondNumber * 10 + Number;
        document.getElementById("display").value = secondNumber;
    }
}

function clear() {
firstNumber = 0;
secondNumber = 0;
selectedNumber = "first";
document.getElementById("display").value = " ";
}


