const timeEl = document.querySelector('.time')
const btnToggle = document.querySelector('.toggle')

function setTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    // console.log( new Date())
    timeEl.innerHTML =  `${hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds }`
}
setTime()
setInterval(setTime,1000) //1000  = 1s เรียกทุกๆ1วิ ,setInterva เป็นการเรียกใช้ข้อมูลซ้ำๆ

btnToggle.addEventListener('click',(e)=>{
    console.log("changeMode")
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = "Dark Mode"
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML = "Light Mode"
    }

})

