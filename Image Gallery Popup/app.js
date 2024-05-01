const smallImg = document.querySelectorAll(".img-container img")
const fullImg = document.querySelector(".full-image")
const modal = document.querySelector(".modal")
console.log(smallImg)

smallImg.forEach(img=>{
    img.addEventListener("click",()=>{
        const fullsize = img.getAttribute("alt")
        const path = `foods-images/foods-images/full/${fullsize}.jpg`
        console.log(path)
        fullImg.src = path
        modal.classList.add("open")

    })
})

modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove('open')
    }
})