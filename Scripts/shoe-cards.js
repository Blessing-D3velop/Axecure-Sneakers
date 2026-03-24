import { shoeData } from "./data.js";

let renderShoes = () => {
  document.querySelector('.shoe-cards-container').innerHTML = '';
  shoeData.forEach((shoe) => {
    let html = `
      <div class="shoe-card">
        <div class="shoe-image-container">
          <img src="${shoe.image}" class="shoe-image" alt="shoe image">
        </div>
        <div class="shoe-info-container">
          <div class="shoe-details">
            <h4 class="shoe-name">${shoe.name}</h4>
            <p class="shoe-price">${shoe.price}</p>
          </div>
          <div class="buttons-container-two">
            <button class="order-button">
              <img src="Images & Icons/Icons/icons8-whatsapp-logo-48.png" alt="whatsapp icon" class="whatsapp-icon">
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;
  document.querySelector('.shoe-cards-container').innerHTML += html;
  });
};

renderShoes();

const left = document.querySelector('.animate-left');
const right = document.querySelector('.animate-right');

window.addEventListener('scroll', () => {
  const aboutTop = document.querySelector('.about-section').offsetTop;
  const scroll = window.scrollY + window.innerHeight;

  if(scroll > aboutTop + 100){ // when section enters view
    left.classList.add('active');
    right.classList.add('active');
  }
});