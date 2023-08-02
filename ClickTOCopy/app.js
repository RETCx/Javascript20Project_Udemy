const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')

btn.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,9999999999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = 'Done'
    setTimeout(()=>{
        btn.textContent="copy"
    },3000)
})