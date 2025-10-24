
const slider = document.getElementById("slider");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    leftArrow.addEventListener("click", () => {
      slider.scrollBy({ left: -350, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
      slider.scrollBy({ left: 350, behavior: "smooth" });
    });


