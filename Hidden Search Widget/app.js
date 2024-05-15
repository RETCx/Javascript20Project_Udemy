const search = document.querySelector(".search")
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const magnifyingGlass = document.querySelector("i")

btn.addEventListener("click",()=>{
    console.log("clicked")
    search.classList.toggle("active")
    input.focus()
    if(magnifyingGlass.classList.contains('fa-magnifying-glass-plus')){
        console.log("true")
        magnifyingGlass.classList.remove('fa-magnifying-glass-plus')
        magnifyingGlass.classList.add("fa-magnifying-glass-minus")
    }
    else{
        magnifyingGlass.classList.remove('fa-magnifying-glass-minus')
        magnifyingGlass.classList.add("fa-magnifying-glass-plus")
    }

})