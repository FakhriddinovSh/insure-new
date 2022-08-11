let elHeader = document.querySelector(".site-header")
let elButton = document.querySelector(".site-header__hamburger")

elButton.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--active")
})