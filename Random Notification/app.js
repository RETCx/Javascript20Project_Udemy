const msg = ['Hello','Hi','morrin',"nighty night",'have fun']
const btn = document.querySelector(".btn")
const container = document.querySelector('.container')

btn.addEventListener('click',()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText = randomMsg()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()

    },3000)
}
function randomMsg(){
    const randomNumber = Math.floor(Math.random()  * msg.length)
    return msg[randomNumber]

}

