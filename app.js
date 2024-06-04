
const API = 'https://api.adviceslip.com/advice'


fetch(API)
.then(response => response.json())
.then(data => {
    console.log(data);
})
