const content = document.querySelector('#content')
const button = document.querySelector('#btn-changeFact')

// function getCatfact() {
//     fetch('https://catfact.ninja/fact')
//         .then(res => res.json())
//         .then(data => {
//             const fact = document.createElement('span')
//             fact.textContent = data.fact
//             const previousFact = content.querySelector('span');
//             if (previousFact) {
//                 content.removeChild(previousFact);
//             }
//             content.append(fact)
//         })
// }

async function getCatfact() {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    const fact = document.createElement('span')
    fact.textContent = data.fact
    const previousFact = content.querySelector('span');
    if (previousFact) {
        content.removeChild(previousFact);
    }
    content.append(fact)
}

getCatfact()

button.addEventListener('click', getCatfact)