const captcha = document.querySelector('.captcha');
const reloadBtn = document.querySelector('.reloadBtn');
const inputField = document.querySelector("#input");
const checkBtn = document.querySelector('.checkBtn');
const statusText = document.querySelector('.statusText p');

const allCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

const createCaptcha = () => {
    let newCaptcha = '';
    let charLen = allCharacters.length;
    for(let i = 0; i<= 5; i++){
        let randomChar = Math.floor(Math.random() * charLen);
        newCaptcha += allCharacters[randomChar];
    }
    captcha.innerText = newCaptcha;
}
createCaptcha()

reloadBtn.addEventListener('click', createCaptcha);

const compare = (event)=> {
    event.preventDefault();
    const inputVal = inputField.value;
    if(inputVal == captcha.innerText){
        statusText.innerText = 'Captcha has matched successfully.'
        statusText.style.color = '#46797F';
        setTimeout(() => {
            captcha.innerText = '';
            inputField.value = '';
            statusText.innerText = '';
            createCaptcha();
        }, 3000)
    }else{
        statusText.innerText = "Captcha hasn't matched. Please try again."
        statusText.style.color = '#ff0000';
    }
}

checkBtn.addEventListener('click', compare);