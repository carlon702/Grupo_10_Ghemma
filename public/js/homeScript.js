//

//

window.addEventListener("load", function () {
  console.log("La página ha terminado de cargarse!!");
  console.log("333");

  const sildeContainer = document.querySelector(".sliders-container");

  const tocar = sildeContainer.addEventListener("touchstart", (e) => {
    // e.preventDefault();
    console.log("toque");
  });
  sildeContainer.addEventListener("touchmove", (e) => {
    // e.preventDefault();
    console.log("moviendume");
    // console.log("");
  });
  sildeContainer.addEventListener("touchend", (e) => {
    // e.preventDefault()
    console.log("saque");
  });

  //   sildeContainer.addEventListeer("touch", (e) => {
  //     // e.preventDefault();
  //     console.log("toque");
  //   });

  //   sildeContainer.addEventListener("touch", (e) => {
  //     // e.preventDefault();
  //     console.log("toque");
  //   });
});
