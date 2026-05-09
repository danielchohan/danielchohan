
/* To fully implement the burger bar I used this
https://stackoverflow.com/questions/69713895/navigation-menu-to-burger-menu
*/
const burger = document.querySelector(".burgerbar");
const navlinks = document.querySelector(".navlinks");

burger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});