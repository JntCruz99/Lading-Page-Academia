const btn = document.querySelector('.btn');
const nav = document.querySelector('.navMobile')

btn.addEventListener('click', function () {
    if (!btn.classList.contains('active')) {
        btn.classList.add('active'); 
        nav.classList.add('navMobileActive');
    }else{
        btn.classList.remove('active');
        nav.classList.remove('navMobileActive');
    }
    
});
