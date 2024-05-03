const genderForm = document.getElementById('genderForm')
const answer = document.getElementById('answer')

genderForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const nickname = event.target.nickname.value
    event.target.nickname.value = ''
    fetch(`https://api.genderize.io/?name=${nickname}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let {name, gender, probability} = data
        let emoji = gender === 'male' ? '👨' : '👩'
        name = name.toLowerCase().charAt(0).toUpperCase() + name.slice(1)
        answer.textContent = `Name: ${name}, gender: ${gender}. Probability: ${probability}`        
    })
})