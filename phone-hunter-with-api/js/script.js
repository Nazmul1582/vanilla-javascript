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
    const phoneDetails = data.data;
    displayPhoneDetails(phoneDetails);
}

const displayPhoneDetails = (phoneDetails) => {
    console.log(phoneDetails)
    show_phone_details.showModal();
}