
    let button = document.querySelector('.modal__close-button');
    let menu = document.querySelector('.modal');
    let btn = document.querySelector('.header__btn');
/*     let header = document.querySelector('.modal'); */

    button.onclick = function(){
        menu.classList.add('modal__close-button--disabled');
    };

/*     btn.onclick = function(){
        header.classList.add('btn--modal-active');
    } */
/*     let btn = document.querySelector('.header__btn');
    let menu = document.querySelector('.modal');
    
    btn.onclick = function(){
        menu.classList.add('btn--modal-active');
    /*     menu.classList.toggle('menu--active'); */
    
