const btn = document.getElementsByTagName('button')[0];
const body = document.querySelector('body');
const result = document.querySelector('.result');

btn.onclick = () => {
    let color = '#';
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    const hexLen = hex.length;
    for(let i = 0; i<6; i++){
        const random = Math.floor(Math.random() * hexLen);
        const generate = hex[random]
        color += generate;
    }
    body.setAttribute('style', `background: ${color}`)
    result.setAttribute('style', `color: ${color}`)
    result.innerText = color
}

