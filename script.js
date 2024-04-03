const display = document.getElementById('input-area');
const backSpaceBtn = document.getElementById('backspace');

calculator = () => {
    const buttons = document.querySelectorAll('.num-btn');
    // console.log(display);

    function addToDisplay(value){
        display.value += value;
    }

    function clearDisplay(){
        display.value = '';
    }

    function calculateResult(){
        if(display.value == ''){
            display.value = 'Error!';
        }
        display.value = eval(display.value)
    }

    handleButtonClick = (value) =>{
        switch(value) {
            case "=":
                calculateResult();
                break;
            case 'C':
                clearDisplay();
                break;
            default:
                addToDisplay(value);
                break;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            const buttonValue = button.textContent;
            handleButtonClick(buttonValue);
        });
    });
}

backSpaceBtn.addEventListener('click', ()=>{
    const currVal = display.value
    let backSpaceBtnArray = currVal.split('');
    backSpaceBtnArray = backSpaceBtnArray.slice(0,-1);
    display.value = backSpaceBtnArray.join('');
    console.log('hello world');
})

document.addEventListener('DOMContentLoaded', function(){
    calculator();
})



