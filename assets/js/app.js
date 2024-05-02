const menu = document.getElementById("burger")
const btns = document.getElementById("btns")

menu.addEventListener("click", () => {
    btns.classList.toggle("active")
})

const popup = document.getElementById("popup")
const popup_btn = document.getElementById("popup-btn")

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-xmark"))
        popup.classList.add("active-popup")
})
