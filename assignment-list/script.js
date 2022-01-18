const Name = document.querySelector('#name');
const subject = document.querySelector('#subject');
const date = document.querySelector('#date');
const btn = document.querySelector('button');
const result = document.querySelector('#book-list');

btn.onclick = function(e){
    e.preventDefault();
    const td1 = document.createElement('td');
    td1.innerText = Name.value

    const td2 = document.createElement('td');
    td2.innerText = subject.value

    const td3 = document.createElement('td');
    td3.innerText = date.value;

    const tr = document.createElement('tr');
    tr.append(td1, td2, td3);

    result.append(tr)
    Name.value = '';
    subject.value = '';
    date.value = '';
}