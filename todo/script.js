const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const todoList = document.querySelector('.todoList');
const pending = document.querySelector('.pendingTasks');
const clearBtn = document.querySelector('#clearBtn');

addTask = (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    let span = document.createElement('span');
    let i = document.createElement('i');

    i.className = 'fas fa-trash';
    span.classList.add('icon');
    span.appendChild(i);
    li.innerText = input.value;
    li.appendChild(span);
    todoList.appendChild(li);
    input.value = ''

    removeTask(li, remove);
    
    clearBtn.onclick = () => {
        let items = todoList.querySelectorAll('li');
        let itemsLen = items.length;
        for(let i = 0; i < itemsLen; i++){
            items[i].remove();
        }
        pending.innerText = todoList.children.length;
    }

    pending.innerText = todoList.children.length;
} 

const removeTask = (listItem, clickDelete) => {
    let icon = listItem.querySelector('.icon');
    icon.onclick = clickDelete; 
}

function remove(){
    let li = this.parentNode;
    li.remove();
    pending.innerText = todoList.children.length;
}

btn.addEventListener('click', addTask);