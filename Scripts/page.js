document.querySelector('.left-section')
  .addEventListener('click', () => {
    window.location.href = 'index.html';
  });

document.querySelector('.js-home')
  .addEventListener('click', () => {
    document.getElementById('js-home-id').scrollIntoView({ behavior: 'smooth' });
  });

document.querySelector('.js-shop')
  .addEventListener('click', () => {
    document.getElementById('js-shop-id').scrollIntoView({ behavior: 'smooth' });
  });

document.querySelector('.js-shop-now')
  .addEventListener('click', () => {
    document.getElementById('js-shop-id').scrollIntoView({ behavior: 'smooth' });
  });

document.querySelector('.js-about')
  .addEventListener('click', () => {
    document.getElementById('js-about-id').scrollIntoView({ behavior: 'smooth' });
  });

document.querySelector('.js-contact')
  .addEventListener('click', () => {
    document.getElementById('js-contact-id').scrollIntoView({ behavior: 'smooth' });
  });


document.querySelector('.js-facebook').addEventListener('click', () => {
  const facebookUrl = "https://www.facebook.com/AxeCureSneakers/"; 
  window.open(facebookUrl, '_blank');
});


document.querySelector('.js-instagram').addEventListener('click', () => {
  const instagramUrl = "https://www.instagram.com/axecure_sneakers/";
  window.open(instagramUrl, '_blank');
});


document.querySelector('.js-whatsapp').addEventListener('click', () => {
  const phoneNumber = "263774631333";
  const message = "Hello, I came from your website and I'm interested in your sneakers.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
});

document.querySelector('.js-chat-on-whatsapp').addEventListener('click', () => {
  const phoneNumber = "263774631333";
  const message = "Hello, I came from your website and I'm interested in your sneakers.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
});