'use strict';

//burger-btn
(function() {
    const burgerBtn = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    
    burgerBtn.addEventListener('click', function() {
        //burger button animation:
        burgerBtn.classList.toggle('burger_active');
        //navigation move:
        mobileNav.classList.toggle('nav_active');
        //body is being hidden:
        body.classList.toggle('stop-scroll');
        //header contains 100vh  (нужно переписать потому что под хедером должно быть видно страничку);
        header.classList.toggle('header_active');
    });
})();



