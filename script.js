


const buttonValue = document.querySelectorAll("button")
const screenValue = document.querySelector("#number");
let isOperator;
let isdot;
let isNumber;
screenValue.value = '0';


function refreshCalculator() {
    isOperator = true;
    isdot = false;
    isNumber = true;
    
}
refreshCalculator();


buttonValue.forEach(element => {
    element.addEventListener('click', e => {

        let buttonText = e.target.innerText;

        if (buttonText === "C") {
            screenValue.value="";
        }
        else if (buttonText === '.' && !isdot) {
            screenValue.value += buttonText;
          
        }

        else if (buttonText === '+' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
            }
            else {
                screenValue.value = buttonText;
            }
            

        }
        else if (buttonText === '-' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
            }
            else {
                screenValue.value = buttonText;
            }
            
        }
        else if (buttonText === '*' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
               
            }

        }
        else if (buttonText === '/' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
              
            }

        }
       
        else if (buttonText >= '0' && buttonText <= 9 && isNumber) {
            if (buttonText === '0' && screenValue.value === '0') {
               
            }
            else if (screenValue.value === '0') {
                screenValue.value = buttonText;
            }
            else {
                screenValue.value += buttonText;
            }
            
        }
        else if (buttonText === '=') {
            screenValue.value = eval(screenValue.value);

            
        }

    })

});




  


