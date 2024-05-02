const menu = document.getElementById("burger")
const btns = document.getElementById("btns")

menu.addEventListener("click", () => {
    btns.classList.toggle("active")
})
