

//change navbar styles on scroll

// window.addEventListener(`scroll`, () => {
//     document.querySelector('nav').classList.toggle
//     ('window-scroll', window.screenY > 0)
// })


window.addEventListener(`scroll`, () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


//showHide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    menuBtn.style.display ="none";
    closeBtn.style.display = "inline-block";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);




