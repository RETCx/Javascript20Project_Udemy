const eyeIcon = document.getElementById("eye")
const passwordEl = document.getElementById('password')


eyeIcon.addEventListener('click',()=>{
    if(eyeIcon.classList.contains("fa-eye")){
        eyeIcon.classList.replace("fa-eye","fa-eye-slash")
        passwordEl.setAttribute("type","text")
    }
    else{
        eyeIcon.classList.replace("fa-eye-slash","fa-eye")
        passwordEl.setAttribute("type","password")
    }
})