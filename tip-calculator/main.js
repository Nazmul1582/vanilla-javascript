const btn = document.querySelector('#submit');
const price = document.querySelector('#price');
const tip = document.querySelector('#tip');
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
const result = document.querySelector('#result');

btn.addEventListener('click', function(e){
    e.preventDefault();
    let priceValue = parseInt(price.value);
    let tipInput = parseInt(tip.value);
    let tipValue = priceValue * (tipInput / 100);
    let finalPrice = priceValue + tipValue;
    total.value = finalPrice.toFixed(2)
    tipAmount.value = tipValue.toFixed(2);
    result.style.display = 'block'
})
