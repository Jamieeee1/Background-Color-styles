const scrollRevealOption = {
    origin: 'top',
    distance: '80px',
    duration: 1000,      
}

ScrollReveal().reveal('.header__title',  {
    ...scrollRevealOption,
    delay: 300,
});

ScrollReveal().reveal(".nav__list", {
    duration: 1000,
    // interval: 500,
    delay: 1000
})

ScrollReveal().reveal(".nav__content__header", {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 1500
})

ScrollReveal().reveal("nav__content__list",{
    origin: 'bottom',
    
    // distance: '80px',
    duration: 1000,
    delay: 2000
})

