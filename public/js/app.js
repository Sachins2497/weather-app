console.log('client side javascript')





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const message = document.querySelector('#message')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
        console.log(data)
        message.textContent = data.address
    })
})
})