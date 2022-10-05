const leftArrowBtn = document.querySelector("#leftArrow");
const rightArrowBtn = document.querySelector("#rightArrow");
const carouselImg = document.querySelectorAll(".carouselImg");

let transalteXLengthCount = 0;

rightArrowBtn.onclick = () => {
    transalteXLengthCount === -2000 ? transalteXLengthCount = 0 : transalteXLengthCount -= 1000;
    Array.from(carouselImg).map((element) => {
        console.log(element.style)
        element.style.transform = "translateX(" + transalteXLengthCount + "px)";
        console.log(element.style)
    })
}