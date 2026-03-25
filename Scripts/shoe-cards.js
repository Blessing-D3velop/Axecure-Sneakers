import { shoeData } from "./data.js";

const renderShoes = () => {
  const container = document.querySelector('.shoe-cards-container');
  container.innerHTML = '';

  shoeData.forEach((shoe) => {
    const html = `
      <div class="shoe-card">
        <div class="shoe-image-container">
          <img src="${shoe.image}" class="shoe-image" alt="${shoe.name}">
        </div>

        <div class="shoe-info-container">
          <div class="shoe-details">
            <h4 class="shoe-name">${shoe.name}</h4>
            <p class="shoe-price">${shoe.price}</p>
          </div>

          <div class="buttons-container-two">
            <button class="order-button">
              <img src="Images & Icons/Icons/icons8-whatsapp-logo-48.png" 
                   alt="whatsapp icon" 
                   class="whatsapp-icon">
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += html;
  });

  // ✅ WhatsApp click functionality
  document.querySelectorAll('.order-button').forEach((button) => {
    button.addEventListener('click', () => {
      const shoeName = button.closest('.shoe-card')
        .querySelector('.shoe-name').textContent;

      const message = `Hello, I'm interested in the ${shoeName} sneaker. Is it available?`;

      const phoneNumber = "263774631333"; // Zimbabwe number
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
    });
  });
};

renderShoes();


// ✅ Scroll animation for About section
const left = document.querySelector('.animate-left');
const right = document.querySelector('.animate-right');

window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about-section');

  if (!aboutSection) return; // safety check

  const aboutTop = aboutSection.offsetTop;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > aboutTop + 100) {
    left?.classList.add('active');
    right?.classList.add('active');
  }
});