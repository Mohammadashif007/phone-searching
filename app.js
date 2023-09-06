let phoneData = [];

async function loadData(phoneName){
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
    let data = await fetch(url)
    data = await data.json()
    phoneData = data.data
    displayData(data.data)
}

function displayData(phones){
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = "";
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        // const data = JSON.stringify(phone);
        const list = ["card", "w-100", "text-center"];
        div.classList.add(list);
        div.innerHTML = `
        <figure><img class="w-100 mx-auto" src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
          <h2 class="text-2xl">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <button id="add-to-local" onclick="addToLocal('${phone.slug}')" class="btn btn-primary">Click</button>
        </div>
        `
        phoneContainer.appendChild(div);
    })
}


document.getElementById('search-btn').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = "";
    
})


const getCard = () => {
    const storedCard = localStorage.getItem('cart');
    cart = [];
    if(storedCard){
        cart = JSON.parse(storedCard)
    }
    return cart
}

const saveCardToLocalStorage = (product) => {
    const card = getCard()
    card.push(product)
    console.log(card)
    localStorage.setItem('cart', JSON.stringify(card))
}


function addToLocal(slug) {
    // console.log(phone)
    const clickData = phoneData.find(phone => phone.slug == slug)
    console.log(clickData)
    saveCardToLocalStorage(clickData)
}

loadData('oppo');