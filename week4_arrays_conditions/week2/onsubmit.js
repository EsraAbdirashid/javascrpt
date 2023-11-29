const inputTask = document.getElementById('task')
const tasks = document.getElementById('tasks')
const form = document.querySelector('form');

form.addEventListener('click',(e)=>{
        e.preventDefault()
        form.disable = false
        if(inputTask.value === ''){
                alert('yaaaaaaaaaaaaaaaaa')
        }else{
                let li = document.createElement('li')
                li.innerHTML = inputTask.value
                inputTask.value = ''
                tasks.appendChild(li)
                li.style.listStyle = 'none'
                li.style.color = 'white'
        }
})

