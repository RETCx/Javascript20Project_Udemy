const spancount = document.querySelector(".count")
const input = document.querySelector("input") 

input.addEventListener("keyup",()=>{
    spancount.innerHTML = input.value.length
})