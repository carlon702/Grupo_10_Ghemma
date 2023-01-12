//

//

// browser code
window.addEventListener("load", () => {
  // Offer carrousel

  let container = document.querySelector(".carousel-images");
  let slides = document.querySelectorAll(".offer-slide");
  let arrows = document.querySelectorAll(".arrows");

  console.log(arrows);

  arrows.forEach((arrow, i) => {
    arrows[i].addEventListener("click", () => {
      if (i === 0) {
        container.style.transform = "translateX(-0%)";
      } else if (i === 1) {
        container.style.transform = "translateX(-50%)";
      }
    });
  });

  //

  // tv

  let containerTv = document.querySelector(".img-tv-container");

  let botones = document.querySelectorAll(".button");
  console.log(botones);

  botones.forEach((boton, i) => {
    botones[i].addEventListener("click", () => {
      console.log("clic");

      // let position =
      if (i === 0) {
        containerTv.style.transform = "translateX(-0%)";
      } else if (i === 1) {
        containerTv.style.transform = "translate(-33.3%);";
      } else if (i === 2) {
        containerTv.style.transform = "translate(-66.7%);";
      }
    });
  });

  //
});
