class Calculator {

    constructor(current, prev) {
        this.current = current;
        this.prev = prev;
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay()
    }

    appendNumber(number) {
     this.currentOperand = this.currentOperand.toString() + number.toString()
    }


    chooseOperation(operation) {
    if (this.currentOperand === ''){
    return}

    if (this.previousOperand !== '') {
        this.compute()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand.toString() + operation.toString()
    this.currentOperand = '';


    }

    compute() {

        if(this.currentOperand==='0') {
            this.currentOperand='haha, dick';
            this.previousOperand='';
            this.updateDisplay();
        }
        
        let computation
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(previous) || isNaN(current)) return

        switch(this.operation) {

                     case '+': 
                computation = previous + current
                break

            case '-':
                computation = previous - current
                break

            case 'x':
                computation = previous * current
                break

            case '/':
                computation = previous / current
                break

                default:
                    return


     
        }
this.currentOperand = computation.toFixed(3);
this.operation = undefined
this.previousOperand = '';
        
    }

    updateDisplay() {
        this.current.innerText = this.currentOperand
        this.prev.innerText = this.previousOperand

        }
}

const current = document.querySelector('[data-current-num]');
const prev = document.querySelector('[data-prev-num')
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-all-clear]');

const output = document.querySelector('[data-output]');

const calculator = new Calculator(current, prev)

numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText);
       calculator.updateDisplay(button.innerText);
})
})

clearButton.addEventListener('click', () => {
    calculator.clear();
})

operationButtons.forEach(button => {
    button.addEventListener('click', ()=> {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()


    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})