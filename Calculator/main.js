const keys = document.querySelectorAll('.key')
const displayInput = document.querySelector('.display .input')
const displayOutput = document.querySelector('.display .output')

let input = "";

for (let Key of keys){
    const value = Key.dataset.key;
    Key.addEventListener('click', () =>{
        if (value == 'clear'){
            input = "";
            displayInput.innerHTML= "";
            displayOutput.innerHTML= ""; 
        }else if (value == "="){
            let result = eval(input);
            displayOutput.innerHTML = result;
        }else{
            input += value;
            displayInput.innerHTML = input
        }
    })
}