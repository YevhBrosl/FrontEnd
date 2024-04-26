const form = document.querySelector('#form')
const taskList = document.querySelector('#task-list')

const toDoList = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = e.target.task.value
    const password = e.target.secret.value

    toDoList.push({task, pass: password, isDone: false})

    while(taskList.hasChildNodes()) {
        taskList.firstChild.remove()
    } 
    
    toDoList.map(el => {
        const li = document.createElement('li')
        // собираем checkbox
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        // checkbox.checked = el.isDone
        // checkbox.onclick = () => el.isDone = !el.isDone
        // собираем текст
        const text = document.createElement('span')
        text.textContent = el.task + el.pass
        //объединяем элементы
        li.append(checkbox, text)
        taskList.appendChild(li)
        
    })
})