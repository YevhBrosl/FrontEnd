const formItems = document.querySelector('#formItems')
const content = document.querySelector('#content')
const productList = document.querySelector('#productList')
const loader = document.querySelector('#loader')

formItems.addEventListener('submit', (event) => {
    event.preventDefault()
    const amount = event.target.amount.value
    event.target.amount.value = ''
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild)
    }
    const error = document.querySelector('.error')
    if (error) {
        content.removeChild(error)
    }
    if (amount > 0 && amount <= 20) {
        loader.style.display = 'block'
        fetch(`https://fakestoreapi.com/products?limit=${amount}`)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    loader.style.display = 'none'
                    content.style.display = 'block'
                    data.map(item => {
                        const itemCard = document.createElement('section')
                        itemCard.classList.add('itemCard')
                        const itemTitle = document.createElement('h4')
                        itemTitle.textContent = item.title
                        const desc = document.createElement('p')
                        desc.textContent = item.description
                        const img = document.createElement('img')
                        img.src = item.image
                        img.classList.add('cardImage')
                        itemCard.append(itemTitle, img, desc)
                        productList.append(itemCard)
                    })
                }, 2000)
            })
            .catch(error => {
                content.style.display = 'block'
                loader.style.display = 'none'
                const serverError = document.createElement('p')
                serverError.style.color = 'red'
                serverError.textContent = `Server error! ${error.message}`
                content.append(serverError)
            })
    } else {
        content.style.display = 'block'
        loader.style.display = 'none'
        const errorMessage = document.createElement('p')
        errorMessage.style.color = 'orange'
        errorMessage.classList.add('error')
        errorMessage.textContent = 'Input error! Enter number from 1 to 20'
        content.append(errorMessage)
    }

})