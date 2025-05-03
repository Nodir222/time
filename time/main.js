let soat = document.querySelector('.hour')
let minutee = document.querySelector('.minut')
let secondds = document.querySelector('.second')
setInterval(() => {
    let date = new Date()
    let hours = date.getHours() 
    let minute = date.getMinutes()
    let second = date.getSeconds()
    soat.textContent = hours > 9 ? hours :  `0${hours}`
    minutee.textContent = minute > 9 ? minute : `0${minute}`
    secondds.textContent = second > 9 ? second :    `0${second}`
}, 1000);
