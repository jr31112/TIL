
axios.get('https://dog.ceo/api/breeds/image/random')
.then(response => {
    console.log(response)
    return response
})