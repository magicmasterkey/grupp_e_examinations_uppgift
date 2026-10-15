// Navigationsmeny burger menu START
let isBurger = false;
const mobileNav = document.querySelector(".mobileNav");
const mobileNavLinks = document.querySelectorAll(".mobileNav li a");
const burgerMenu = document.querySelector(".burgerMenu");

burgerMenu.addEventListener("click", navMobile);

for (let x = 0; x < mobileNavLinks.length; x++) {
  mobileNavLinks[x].addEventListener("click", (e) => {
    isBurger = true;
    navMobile();
  })
}

function navMobile() {
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
  } else {
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
}

// Navigationsmeny burger menu END

// anpassat meddelande START
document.querySelector(".errorMessage").addEventListener("click", (e) => {
  if (e.target === document.querySelector(".errorMessage"))
    return (document.querySelector(".errorMessage").style.display = "none");
});
document.querySelector(".errorMessageContent button")
  .addEventListener("click", (e) => {
    document.querySelector(".errorMessage").style.display = "none";
  });

function messageError(text) {
  document.querySelector(".errorMessage").style.display = "flex";
  document.querySelector(".errorMessageContent h2").textContent = text;
}
// anpassat meddelande END

// Handtag för historikknapp START
const historyBtns = document.querySelectorAll(".historyBtn");
historyBtns.forEach((historyBtn) => {
  historyBtn.addEventListener("click", (e) => {
    document.querySelector(".yourBookings").style.display = "flex";
    loadHistory()
  });
});
document.querySelector(".yourBookings").addEventListener("click", (e) => {
  if (e.target === document.querySelector(".yourBookings"))
    return (document.querySelector(".yourBookings").style.display = "none");
});

document
  .querySelector(".yourBookingConent i")
  .addEventListener("click", (e) => {
    document.querySelector(".yourBookings").style.display = "none";
  });
// Handtag för historikknapp END

// Kontakt fomulär START
const contactForm = document.querySelector(".contact");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const namn = document.querySelector("#namn").value;
  const email = document.querySelector("#epost").value;
  const message = document.querySelector("#meddelande").value;
  console.log(`Namn: ${namn} E-post: ${email} Meddelande: ${message}`);
});

// Kontakt formulär END

//Bokning popup START

// Hämtar sparade visningar från localStorage eller laddar standarddata
let bookingArray = JSON.parse(localStorage.getItem("shows")) || [
  {
    title: "Back To The Future",
    time: "2026-10-10, 16:00",
    price: 99,
    seat: 20,
    image: "back-to-the-future"
  },
  {
    title: "Spiderman",
    time: "2026-10-15, 20:00",
    price: 120,
    seat: 0,
    image: "spiderman"
  },
  {
    title: "The Room",
    time: "2026-12-25, 13:15",
    price: 200,
    seat: 3,
    image: "the-room"
  },
  {
    title: "The Mask",
    time: "2026-11-23, 18:30",
    price: 79,
    seat: 99,
    image: "the-mask"
  }
];

// dom
const movieCards = document.querySelectorAll(".movieCard");
const movieDisplay = document.querySelector(".movieDisplay");
const popupContentInput = document.querySelector(".popupContent input");
const popupContentTotal = document.querySelector(".popupContent span");
const popupContentButton = document.querySelector(".popupContent button");
const ticketPopup = document.querySelector(".ticketPopup");

// Sparar gamla bokningar här
let historyArray = JSON.parse(localStorage.getItem("history")) || [];
popupContentInput.value = 1;
let selectedIndex = null;

// Visar alla gamla bokningar om det finns
const booking = document.querySelector(".booking");
function loadHistory() {
  if (historyArray.length === 0) {
    booking.innerHTML = "";
    booking.style.height = "auto";
    booking.innerHTML = `
      <div class="bookingCard">
        <h3>Inga bokningar ännu!</h3>
      </div>
    `;
  }
  else {
    booking.innerHTML = "";
    booking.style.height = "400px";
    historyArray.forEach(historyItem => {
      booking.innerHTML += `
        <div class="bookingCard">
          <h3>${historyItem.title}</h3>
          <p>Datum: ${historyItem.time}</p>
          <p>Antal: ${historyItem.tickets} st | Totalt: ${historyItem.totalPrice} kr</p>
          <span>Bokad: ${historyItem.booked}</span>
        </div>
      `;
    });
  }
}

// Räknar ihop totalpriset för alla bokningar i historiken och visar det
function loadTotalPrice() {
  const totalPriceSpan = document.querySelectorAll(".totalPriceBtn span");
  if (!totalPriceSpan) return;
  // Plussar ihop priset från varje bokning med reduce function, börjar på 0
  const totalPrice = historyArray.reduce((total, item) => total + item.totalPrice, 0);
  // Skriver ut
  totalPriceSpan.forEach(totalPriceSpan => {
    totalPriceSpan.textContent = totalPrice + " kr";
  });
}
loadTotalPrice();

// Visar hur många bokningar vi har på knappen
function showHistoryNumber() {
  const historyBtnSpan = document.querySelectorAll(".historyBtn span");
  historyBtnSpan.forEach(historyBtnSpan => {
    if (historyArray.length === 0) {
      historyBtnSpan.style.display = "none";
    }
    else {
      historyBtnSpan.textContent = historyArray.length;
      historyBtnSpan.style.display = "";
    }
  });
}

document.querySelector(".ticketPopup").addEventListener("click", (e) => {
  if (e.target === document.querySelector(".ticketPopup"))
    return (document.querySelector(".ticketPopup").style.display = "none");
});

// Ritar upp alla filmer på sidan
function renderCards() {
  movieDisplay.innerHTML = "";
  for (let i = 0; i < bookingArray.length; i++) {
    const isSoldOut = bookingArray[i].seat === 0;
    const isExpired = new Date() >= new Date(bookingArray[i].time.replace(", ", "T"));
    const articleCard = `
      <article class="movieCard">
        <div class="moviePoster">
          <img src="images/cards/${bookingArray[i].image}.jpg" alt='Bild av filmen "${bookingArray[i].title}"' />
        </div>
        <div class="movieInfo">
          <h3>${bookingArray[i].title}</h3>
          <p>📅 ${bookingArray[i].time}</p>
          <div class="moviePrice">
            <span>${bookingArray[i].price} kr</span>
            <p style="${isSoldOut ? "background: #ef444426; color: #ef4444;" : "background: #10b98126; color: #10b981;"}">${bookingArray[i].seat} platser kvar</p>
          </div>
        </div>
        <button class="buyButton" ${isSoldOut || isExpired ? "style='background:gray; cursor:not-allowed;' disabled" : ""}>
        ${isSoldOut ? "Utsåld" : isExpired ? "Tiden har gått ut" : "Köp biljett"}</button>
      </article>
    `;
    movieDisplay.innerHTML += articleCard;
  }
  // Gör så knapparna öppnar popupen
  const buyButtons = document.querySelectorAll(".movieCard button");
  for (let x = 0; x < buyButtons.length; x++) {
    buyButtons[x].addEventListener("click", (e) => {
      openPopup(x);
    })
  }
}

// Öppnar popupen och sätter antal till 1
function openPopup(i) {
  selectedIndex = i;
  ticketPopup.style.display = "flex";
  popupContentInput.focus();
  popupContentInput.select();
  popupContentInput.value = 1;
  updatePrice();
}

// Sparar allt i localStorage
function saveStorage() {
  localStorage.setItem("shows", JSON.stringify(bookingArray));
  localStorage.setItem("history", JSON.stringify(historyArray));
}

// Räknar ut totalpriset direkt
function updatePrice() {
  if (selectedIndex == null) return;
  const count = Number(popupContentInput.value);
  if (count > 0) {
    popupContentTotal.innerHTML = "Total pris: " + (count * bookingArray[selectedIndex].price) + " kr";
  }
  else {
    popupContentTotal.innerHTML = "Total pris: 0 kr";
  }
}

// Funktion för att köpa biljetter
function buyTicket(x) {
  const seats = bookingArray[selectedIndex].seat;
  const requestedSeats = Number(popupContentInput.value);
  const bookingTime = new Date().toLocaleString('sv-SE').slice(0, 16).replace(' ', ', ');
  if (requestedSeats <= 0) {
    messageError("Vänligen ange ett giltigt antal biljetter");
    return;
  }
  if (requestedSeats <= seats) {
    bookingArray[selectedIndex].seat -= requestedSeats;
    renderCards();
    ticketPopup.style.display = "none";
    // Lägger till i historiken
    historyArray.unshift({
      title: bookingArray[selectedIndex].title,
      time: bookingArray[selectedIndex].time,
      tickets: requestedSeats,
      totalPrice: requestedSeats * bookingArray[selectedIndex].price,
      booked: bookingTime
    });
    saveStorage();
    showHistoryNumber();
    loadTotalPrice();
    selectedIndex = null;
  }
  else {
    messageError("Det finns inte plats");
  }
}

// Event listeners för knapp och input
popupContentButton.addEventListener("click", (e) => buyTicket(selectedIndex))
popupContentInput.addEventListener("input", (e) => updatePrice(selectedIndex))

renderCards();
loadHistory();
showHistoryNumber();

//Bokning popup END
