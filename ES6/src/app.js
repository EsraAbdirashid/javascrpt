const form = document.querySelector('form');
const inputTask = document.getElementById('task')
const tasks = document.getElementById('tasks')
form.addEventListener('click',(e)=>{
        e.preventDefault();
        form.disabled = false
        inputTask.value
        let li = document.createElement('li')
        li.innerHTML = inputTask.value  
        tasks.appendChild(li) 
        inputTask.value = ' '
        
})