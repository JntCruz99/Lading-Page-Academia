const container = document.querySelector('.cards');
const card1 = document.querySelector('.car1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            card1.classList.add('cardsAnimation');
            card2.classList.add('cardsAnimation');
            card3.classList.add('cardsAnimation');
        } //else {
            //card1.classList.remove('cardsAnimation');
            //card2.classList.remove('cardsAnimation');
            //card3.classList.remove('cardsAnimation');
        // }
    });
});


observer.observe(container);
