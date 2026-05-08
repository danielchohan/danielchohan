const burger = document.querySelector(".burgerbar");
const navlinks = document.querySelector(".navlinks");

burger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});