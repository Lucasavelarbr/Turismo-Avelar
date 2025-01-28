let btnMenuMob = document.querySelector('#btn-menu-mob');
let Line1 = document.querySelector('.line-menu-mob-1');
let Line2 = document.querySelector('.line-menu-mob-2');
let menuMobile = document.querySelector('#menu-mobile');
let body = document.querySelector('body');
let menuLinks = document.querySelectorAll('#menu-mobile nav a');

btnMenuMob.addEventListener("click",()=>{
    Line1.classList.toggle('ativo1')
    Line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
    body.classList.toggle('no-overflow')
});

// Adiciona o evento de clique para cada link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        Line1.classList.remove('ativo1');
        Line2.classList.remove('ativo2');
        menuMobile.classList.remove('abrir');
        body.classList.remove('no-overflow');
    });
});

