const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll",showBtn)
scrollBtn.addEventListener('click',scrollToTop)

function showBtn(){
    console.log('scrolling')
    const scrollTotal =rootEl.scrollHeight - rootEl.clientHeight
    console.log(rootEl.scrollTop/scrollTotal) //0-1
    if(rootEl.scrollTop/scrollTotal > 0.6){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}

function scrollToTop(){
    rootEl.scrollTo({
        top:0,
        behavior:"smooth"
    })
}