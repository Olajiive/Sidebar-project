const body = document.querySelector("body");
const sideBar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const searchBtn = document.querySelector(".search-box");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sideBar.classList.toggle("close")
})
searchBtn.addEventListener("click", () => {
    sideBar.classList.remove("close")
})
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark")

    if (body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
    }
    else {
        modeText.innerText = "Dark Mode"
    }
})
