let micon = document.getElementById("micon");
let nav = document.querySelector('.nav-bar')

micon.addEventListener("click", () => {
    micon.classList.toggle("fa-bars");
    micon.classList.toggle("fa-xmark");
    nav.classList.toggle("menu");
 }
);
