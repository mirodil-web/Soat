const h1 = document.querySelector('.h1')
const m = document.querySelector('#m')


setInterval(function () {
    let date = new Date()
    h1.textContent = (`Today: ${date.getHours()} : 
    ${date.getMinutes()} : 
    ${date.getSeconds()}`)
}, 1000);


setTimeout(function(){
  m.classList.remove('hidden')
}, 4000)


