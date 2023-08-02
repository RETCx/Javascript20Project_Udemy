// var htmlElement = document.documentElement;
// var bodyElement = document.body;

// var height = Math.max(
//     htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
//     bodyElement.scrollHeight, bodyElement.offsetHeight
// );

// console.log('entire document height: ' + height + 'px');
const progressEL = document.querySelector('.progress')
window.onscroll = ()=>scrollProgess()
//window มีการ scroll เกิดขึ้นไหม ถ้ามี จะเรียกใช้ scrollProgess()
function scrollProgess(){
    console.log("start") 
    const pageHeight = document.documentElement.scrollHeight/*ความสูงของ bar ทีใช่เลื่อน */- document.documentElement.clientHeight
    console.log(pageHeight) //1268 
    const scrollTop = document.documentElement.scrollTop //0-1268
    console.log(scrollTop)
    const scrollPercentage = (scrollTop/pageHeight)*100
    console.log(scrollPercentage)
    
    progressEL.style.visibility = 'visible'
    progressEL.style.width=scrollPercentage+'%'
}
//แปลง ความสูงเป็น percent

