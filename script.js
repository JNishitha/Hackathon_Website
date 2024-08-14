document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const searchBtn = document.querySelector('#search-btn');
    const searchForm = document.querySelector('.search-form');
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.header .navbar');

    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        alert('Thank you for contacting us! We will get back to you soon.');
        
        contactForm.reset();
    });

    searchBtn.onclick = () => {
        searchBtn.classList.toggle('fa-times');
        searchForm.classList.toggle('active');
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    };

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
        searchBtn.classList.remove('fa-times');
        searchForm.classList.remove('active');
    };

    window.onscroll = () => {
        searchBtn.classList.remove('fa-times');
        searchForm.classList.remove('active');
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});
