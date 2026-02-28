// console.log("Hallo");


// select html element
const header = document.querySelector("h1");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

// change header with button click

changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "POWW!!!"
})


// toggle color theme





//click event on button
changeThemeButton.addEventListener("click", () => {
    //add/remove dark class to body
    document.body.classList.toggle("dark");
})