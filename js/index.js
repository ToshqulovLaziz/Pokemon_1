const elHamburgerBtn = document.querySelector (".item__bottom") ;
const elHeader = document.querySelector (".pokemon-card") ;

elHamburgerBtn.addEventListener ('click', ()=> {
    elHeader.classList.toggle("header__open") ;
})