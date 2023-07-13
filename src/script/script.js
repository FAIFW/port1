'use strict';

//burger-btn
(function() {
    const burgerBtn = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav');
    const body = document.querySelector('body');
    
    burgerBtn.addEventListener('click', function() {
        //burger button animation:
        burgerBtn.classList.toggle('burger_active');
        //navigation move:
        mobileNav.classList.toggle('nav_active');
        //body is being hidden:
        body.classList.toggle('stop-scroll');
    });
})();



