const container = document.getElementById("container")
const getCountries = async() =>{
    const url = 'https://restcountries.com/v2/all'
    const res = await fetch(url)
    const items = await res.json()
    console.log(items)
    items.forEach(element => {
        console.log(element.name ,element.capital)
        createCard(element)
    });

}

const createCard=(data)=>{
    const cardEl = document.createElement("div")
    cardEl.classList.add("country")
    const contentHTML =`
            <div class="img-container">
                <img src="${data.flag}"/>
            </div>
            
            <div class="info">
                <h3 class="name">${data.name}</h3>
                <small>Capital : <span>${data.capital}</sapn></small>
            </div>


    
            `
            
    cardEl.innerHTML = contentHTML
    container.appendChild(cardEl)
}

getCountries()