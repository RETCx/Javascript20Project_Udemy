const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const modalComtainer = document.querySelector('.modal-container')
openBtn.addEventListener('click',()=>{
    modalComtainer.classList.add('show') // เป็นการใส่ class เพิ่ม
})
closeBtn.addEventListener('click',()=>{
    modalComtainer.classList.remove('show') // เอา class ออก
})
