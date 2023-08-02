const spancount = document.querySelector('.count')
const input = document.querySelector('input')
input.addEventListener('keyup',()=>{//keyup มีการพิมข้อความ
    let word = input.value.toLowerCase()
    let vowelCount = 0
    for(let i = 0 ;i < word.length ;i++){
       
        if(word[i].match(/([a,e,i,o,u])/)){
            vowelCount++
        }
    }
    console.log(word)
    console.log(vowelCount)
    spancount.innerHTML = vowelCount //`${vowelCount}`
})