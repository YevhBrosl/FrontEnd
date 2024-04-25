const form = document.querySelector('#form')
const taskList = document.querySelector('#task-list')
const clearBtn = document.querySelector('#clear')

let toDoList = []
function changeStatus(event) {
  
  if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = 'none'
  } else {
    event.target.style.textDecoration = 'line-through'
  }
}

form.addEventListener('submit', event => {
  
  event.preventDefault()

  let task = {    
    name: event.target.taskName.value.toLowerCase(),
    date: event.target.date.value,
    time: event.target.time.value
  }

  let taskExists = toDoList.find(el => el.name.toLowerCase() === task.name.toLowerCase() && el.date === task.date && el.time === task.time);

  if (taskExists) {
    event.target.taskName.value = ''
    event.target.date.value = ''
    event.target.time.value = ''
    alert('The task is already on the list')    
  } else {    
    task.name = task.name.charAt(0).toUpperCase() + task.name.slice(1)   
    toDoList.push(task)
    
    const listElement = document.createElement('li')
    
    listElement.textContent = `${task.name}, ${task.date}, ${task.time}`
    
    listElement.onclick = changeStatus
    
    taskList.appendChild(listElement)
    
    event.target.taskName.value = ''
    event.target.date.value = ''
    event.target.time.value = ''
  }
  
})

function clearList() {
  
  while (taskList.hasChildNodes()) {    
    taskList.firstChild.remove()
  }

  toDoList = []
}

clearBtn.onclick = clearList