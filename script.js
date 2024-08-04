
let currentNumber = document.querySelector('.currentCalculation');
let numbers = document.querySelectorAll('.number');
let eachButtons = document.querySelectorAll('.eachButtons');
let equalSign = document.querySelector('.equals');
let previousNumber = document.querySelector('.previousNumber');
let allClear = document.querySelector('.allClear');
let deleteButton = document.querySelector('.Delete');

let data = '';



function appendUserInput (number) {
    data += number.textContent;
    currentNumber.textContent = data;
}


function evaluation() {
    if (currentNumber.textContent === "") {
        previousNumber.textContent = "Enter Valid Calculations";
        currentNumber.textContent = null;
    } else {
        try {
            previousNumber.textContent = data;
            let answer = eval(data);
            data = answer.toString(); // Convert the answer to string to display
            currentNumber.textContent = data;
        } catch (error) {
            previousNumber.textContent = "Error";
            currentNumber.textContent = "";
            data = "";
        }
    }
}


eachButtons.forEach(number => { 
    number.addEventListener("click",()=> appendUserInput(number))
})

equalSign.addEventListener("click", evaluation)

allClear.addEventListener("click", ()=> {
    currentNumber.textContent = null;
    data = ""
})

deleteButton.addEventListener("click", ()=> { currentNumber.textContent = currentNumber.textContent.slice(0, -1)})


previousNumber.addEventListener("click", ()=> { 
    let data = previousNumber.textContent;
    currentNumber.textContent = data; 
    previousNumber.textContent = null;
})