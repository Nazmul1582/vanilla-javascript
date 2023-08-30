const loadPhones = async (phoneName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ""
    phones.forEach(phone => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card bg-white shadow-2xl p-5">
            <figure class="bg-[#0D6EFD0D] py-10"><img src="${phone.image}" alt="${phone.brand}" /></figure>
            <div class="card-body text-center">
                <h2 class="card-title text-2xl justify-center mb-3">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <span class="font-bold text-2xl mb-2">$999</span>
                <div class="card-actions justify-center">
                <button class="btn text-white capitalize bg-[#0D6EFD] hover:bg-[#0d5efd]">Show Details</button>
                </div>
            </div>
        </div>
        `
        phoneContainer.appendChild(div)
    })
}

// handle search button
const inputField = document.getElementById("inputField");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', (e) => handleSearch(e));

const handleSearch = (e) => {
    e.preventDefault();
    const phoneName = inputField.value;
    loadPhones(phoneName)
    inputField.value = ""
}