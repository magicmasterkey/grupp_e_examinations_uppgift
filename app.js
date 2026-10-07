
// Navigationsmeny burger menu START
let isBurger = false;
const mobileNav = document.querySelector(".mobileNav");
const burgerMenu = document.querySelector(".burgerMenu");

burgerMenu.addEventListener("click", (e) => {
    if (!isBurger) {
        mobileNav.style.display = "flex";
        mobileNav.style.transition = "all 200ms ease-in-out";
        mobileNav.style.opacity = "0";
        burgerMenu.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-center"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
        `;
        setTimeout(() => {
            mobileNav.style.opacity = "1";
        }, 200);

        isBurger = true;
    }
    else {
        mobileNav.style.opacity = "0";
        mobileNav.style.display = "none";
        burgerMenu.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
        isBurger = false;
    }
})
// Navigationsmeny burger menu END


// anpassat meddelande START
const totalPriceBtns = document.querySelectorAll(".totalPriceBtn");
totalPriceBtns.forEach(totalPriceBtn => {
    totalPriceBtn.addEventListener("click", (e) => {
        document.querySelector(".errorMessage").style.display = "flex";
    });
});
document.querySelector(".errorMessage").addEventListener("click", (e) => {
    if (e.target === document.querySelector(".errorMessage")) return document.querySelector(".errorMessage").style.display = "none";
});
document.querySelector(".errorMessageContent button").addEventListener("click", (e) => {
    document.querySelector(".errorMessage").style.display = "none";
});
// anpassat meddelande END

// Handtag för historikknapp START
const historyBtns = document.querySelectorAll(".historyBtn");
historyBtns.forEach(historyBtn => {
    historyBtn.addEventListener("click", (e) => {
        document.querySelector(".yourBookings").style.display = "flex";
    });
});
document.querySelector(".yourBookings").addEventListener("click", (e) => {
    if (e.target === document.querySelector(".yourBookings")) return document.querySelector(".yourBookings").style.display = "none";
});

document.querySelector(".yourBookingConent i").addEventListener("click", (e) => {
    document.querySelector(".yourBookings").style.display = "none";
});
// Handtag för historikknapp END

// Kontakt fomulär START
const contactForm = document.querySelector(".contact")
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const namn = document.querySelector("#namn").value;
    const email = document.querySelector("#epost").value;
    const message = document.querySelector("#meddelande").value; 
    console.log(`Namn: ${namn} E-post: ${email} Meddelande: ${message}`);
})

// Kontakt formulär END











