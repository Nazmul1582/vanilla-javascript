const discountForm = document.querySelector('.discount-form');

function calculate(){
    const price = document.querySelector('#price').value;
    const discount = document.querySelector('#discount').value;
    const showDiscount = document.querySelector('.showDiscount');
    const discountAmount = document.querySelector('#discountAmount');
    const total = document.querySelector('#total');
    const result = document.querySelector('#result');

    let priceInput = parseInt(price);
    let discountValue = priceInput * (discount / 100);
    let priceWithDiscount = priceInput + discountValue;

    discountAmount.value = discountValue.toFixed(2);
    total.value = priceWithDiscount.toFixed(2);
    showDiscount.innerHTML = `Discount: ${discount}%`;
}

discountForm.addEventListener('change', calculate);