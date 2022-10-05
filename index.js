const directionArrowBts = document.querySelectorAll(".directionArrow")
const carouselImg = document.querySelectorAll(".carouselImg");

let transalteXLengthCount = 0;

Array.from(directionArrowBts).map((btn, index) =>{
    btn.onclick = () => {
        if(index === 0){transalteXLengthCount === 0 ? transalteXLengthCount = -2000 : transalteXLengthCount += 1000;}
        else{transalteXLengthCount === -2000 ? transalteXLengthCount = 0 : transalteXLengthCount -= 1000;}
        Array.from(carouselImg).map((element) => {
            element.style.transform = "translateX(" + transalteXLengthCount + "px)";
        })
    }
});