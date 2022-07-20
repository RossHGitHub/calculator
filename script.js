class Calculator {

    constructor(output) {
        this.output = output;
    }

    clear() {
        this.output = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        this.appendNumber.output = number;
    }


    chooseOperation(operation) {

    }

    compute() {

    }


    updateDisplay() {
        this.output.innerText = this.output
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-number]');

const output = document.querySelector('[data-output]');

const calculator = new Calculator(output);

numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

