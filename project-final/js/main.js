// console.log("Hallo");


function setup() {
    createcanvas(400, 400);
    background(225);
}

// select html element
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img3 = document.querySelector("#img4");


///// toggle image visibility

img1.addEventListener("click", () => {
    img2.classList.remove("hidden");
})

img2.addEventListener("click", () => {
    img3.classList.remove("hidden");
})

img3.addEventListener("click", () => {
    img4.classList.remove("hidden");
})


