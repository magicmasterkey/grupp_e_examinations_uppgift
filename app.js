
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





















