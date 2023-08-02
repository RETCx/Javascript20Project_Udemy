const counters = document.querySelectorAll('.counter') //[ data-target="555550000" , ]
console.log(counters) // NodeList(3) [div.counter, div.counter, div.counter]
console.log(counters[0])
counters.forEach(counter=>{//counters[0] = div.counter 
    counter.innerText = '0'; //ทำให้แต่ละ ค่าของcounters = 0
    console.log(counter.innerText)
    const updatecounter=()=>{
        const target = +counter.getAttribute("data-target")//เต็ม + เพื่อแปลงจาก string to number
        console.log(typeof(target))
        const start = +counter.innerText
        const increment = target/333 //เพิม่มค่าทีละเท่าไร
        if(start < target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updatecounter,9)
        }else{
            counter.innerText=target
        }

    }
    updatecounter()
})