const body = document.querySelector('body');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

btn.onclick = () => {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);

    body.setAttribute('style', `background: rgb(${num1}, ${num2}, ${num3})`);

    // btn.setAttribute('style', `background: rgb(${num2}, ${num3}, ${num1})`);

    result.setAttribute('style', `color: rgb(${num1}, ${num2}, ${num3})`);
    result.innerText = `rgb(${num1}, ${num2}, ${num3})`
}

