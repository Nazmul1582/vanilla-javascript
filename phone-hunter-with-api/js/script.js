const inputField = document.getElementById("inputField");
const searchBtn = document.getElementById("searchBtn");
const showAllBtn = document.getElementById("showAllBtn");
const loadingSpinner = document.getElementById("loading-spinner");

const loadPhones = async (phoneName, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = "";

    if(phones.length > 9 && !isShowAll){
        showAllBtn.parentNode.style.display= "flex"
    }else if(phones.length === 0){
        showAllBtn.parentNode.style.display = "none"
        alert("Not Found!")
    }else{
        showAllBtn.parentNode.style.display= "none"
    }

    if(!isShowAll){
        phones = phones.slice(0, 9);
    }

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
                <button onclick="handleShowDetails('${phone.slug}')" class="btn text-white capitalize bg-[#0D6EFD] hover:bg-[#0d5efd]">Show Details</button>
                </div>
            </div>
        </div>
        `
        phoneContainer.appendChild(div);
    })
    // hide loading spinner
    toggleLoadingSpinner(false);
}

// handle search
searchBtn.addEventListener('click', () => handleSearch());

const handleSearch = (isShowAll) => {
    // show loading spinner
    toggleLoadingSpinner(true);
    const phoneName = inputField.value;
    loadPhones(phoneName, isShowAll)
    // inputField.value = "";
}

// loading spinner
const toggleLoadingSpinner = (isLoading) => {
    if(isLoading){
        loadingSpinner.classList.remove("hidden")
    }else{
        loadingSpinner.classList.add('hidden')
    }
}

// show all phones
showAllBtn.addEventListener("click", () => showAllPhones());
const showAllPhones = () => {
    handleSearch(true);
}

// handle show details
const handleShowDetails = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    displayPhoneDetails(phone);
}

const displayPhoneDetails = (phone) => {
    show_phone_details.showModal();
    const divContainer = document.getElementById("phone-info");
    divContainer.innerHTML = `
    <div class="bg-[#0D6EFD0D] p-10 flex justify-center">
        <img src="${phone.image}" />
    </div>
    <h3 class = "text-xl font-semibold my-3">${phone.name}</h3>
    <p class="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p class="my-2"><span class="font-semibold">Storage:</span> ${phone?.mainFeatures?.storage}</p>
    <p class="mb-2"><span class="font-semibold">Display Size: </span>${phone?.mainFeatures?.displaySize}</p>
    <p class="mb-2"><span class="font-semibold">Chipset: </span>${phone?.mainFeatures?.chipSet}</p>
    <p class="mb-2"><span class="font-semibold">Memory: </span>${phone?.mainFeatures?.memory}</p>
    <p class="mb-2"><span class="font-semibold">slug: </span>${phone.slug}</p>
    <p class="mb-2"><span class="font-semibold">Release date: </span>${phone?.releaseDate || "No data found!"} </p>
    <p class="mb-2"><span class="font-semibold">Brand: </span>${phone.brand}</p>
    <p class="mb-2"><span class="font-semibold">GPS: </span>${phone?.others?.GPS || "No data found!"}</p>
    `
}