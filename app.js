function loadData(phoneName){
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}

function displayData(phones){
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = "";
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        const list = ["card", "w-100", "text-center"];
        div.classList.add(list);
        div.innerHTML = `
        <figure><img class="w-100 mx-auto" src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
          <h2 class="text-2xl">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <button class="btn btn-primary">Click</button>
        </div>
        `
        phoneContainer.appendChild(div);
    })
}


document.getElementById('search-btn').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = "";
    loadData(inputFieldValue);
})
