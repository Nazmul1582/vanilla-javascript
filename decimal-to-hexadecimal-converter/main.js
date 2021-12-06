const decimal = document.querySelector('#inputValue')
const result = document.querySelector('#result');
const convertBtn = document.querySelector('#convertBtn');
const resetBtn = document.querySelector('.resetBtn');

function convert (event) {
    event.preventDefault();
    
    if(decimal.value === "" || decimal.value < 0 ){
        alert('Please enter a positive number')
    }
    result.style.visibility = 'visible';
    let num = decimal.value;
    let res = Number(num).toString(16);
    result.innerText = res;
    
    decimal.addEventListener('focus',function(){
        result.style.visibility = 'hidden'
    })
}

convertBtn.addEventListener('click', convert);


resetBtn.addEventListener('click', function(event){
    event.preventDefault();
    decimal.value = "";
    result.style.visibility = 'hidden'
})