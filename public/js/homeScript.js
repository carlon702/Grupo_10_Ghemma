//

//

// browser code
window.addEventListener("load", () => {
  // <!-- headphones swiper -->
  let vw = innerWidth;
  console.log(vw);
  let appleImage = document.querySelector(".apple-banner-image");

  if (vw <= 535) {
    appleImage.src = "/images/banner-images/apple-banner-ph.png";
  }
  if (vw >= 535) {
    appleImage.src = "/images/banner-images/apple-banner-tab.png";
  }
  if (vw >= 990) {
    appleImage.src = "/images/banner-images/apple-banner-dk.png";
  }

  window.addEventListener("resize", () => {
    let currentVw = innerWidth;

    if (currentVw <= 535) {
      appleImage.src = "/images/banner-images/apple-banner-ph.png";
    }
    if (currentVw >= 535) {
      appleImage.src = "/images/banner-images/apple-banner-tab.png";
    }
    if (currentVw >= 990) {
      appleImage.src = "/images/banner-images/apple-banner-dk.png";
    }
  });

  // <!-- headphones swiper -->

  //

  //<!-- PHONES -->

  //

  //

  let buttonsPhone = document.querySelectorAll(".phone-section__brand"),
    appleContainerPhone = document.querySelector(
      ".phone-section__apple-phones"
    );

  buttonsPhone.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index == 0) {
        appleContainerPhone.classList.remove("no-visible-phone");
        appleContainerPhone.classList.add("visible-phone");
      }
      if (index == 1) {
        appleContainerPhone.classList.add("no-visible-phone");
      }
    });
  });

  //

  // phone scale
  let cards = document.querySelectorAll(".card");

  cards.forEach((car, index) => {
    let cardImage = car.querySelector(".phone-image");
    car.addEventListener("mouseover", () => {
      cardImage.classList.remove("escale-no");
      cardImage.classList.add("escale");
    });
    car.addEventListener("mouseleave", () => {
      cardImage.classList.remove("escale");
      cardImage.classList.add("escale-no");
      // cardImage.classList.remove("escale-no");
    });
  });

  //

  //

  //<!-- PHONES -->
  //<!-- HEADPHONES -->

  let buttonsHeadphone = document.querySelectorAll(".headphone-brand"),
    appleContainerHeadphone = document.querySelector(".apple-hdphones");

  buttonsHeadphone.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index == 0) {
        appleContainerHeadphone.classList.remove("no-visible");
        appleContainerHeadphone.classList.add("visible");
      }
      if (index == 1) {
        appleContainerHeadphone.classList.add("no-visible");
      }
    });
  });

  //<!-- HEADPHONES -->

  //<!-- COMPUTER-SWIPER -->

  //

  //

  const slider = document.querySelector(
      ".computers-section .sliders-container"
    ),
    slides = Array.from(document.querySelectorAll(".computers-section .slide"));

  // console.log(slider);
  // console.log(slides);

  let isDragging = false,
    startPos = 0,
    currentTranlate = 0,
    prevTranaslate = 0,
    animationID = 0,
    currentIndex = 0;

  slides.forEach((slide, index) => {
    const slideImage = document.querySelector(".image-computer-container img");
    slideImage.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });

    // <!-- touch event -->
    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchend", touchEnd);
    slide.addEventListener("touchmove", touchMove);
    // <!-- touch event -->

    //

    // <!-- mouse event -->
    slide.addEventListener("mousedown", touchStart(index));
    slide.addEventListener("mouseup", touchEnd);
    slide.addEventListener("mouseleave", touchEnd);
    slide.addEventListener("mousemove", touchMove);
    // <!-- mouse event -->
  });
  // <!-- fuctions -->

  window.oncontextmenu = function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  function touchStart(index) {
    return function (event) {
      currentIndex = index;
      // console.log(currentIndex);

      startPos = getPositionX(event);

      isDragging = true;

      animationID = requestAnimationFrame(animation);
      console.log(requestAnimationFrame(animation));
    };
  }

  //

  function touchEnd() {
    isDragging = false;
  }

  //

  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranlate = prevTranaslate + currentPosition - startPos;
      // console.log(currentTranlate)
    }
  }

  // <!-- fuctions -->

  function getPositionX(event) {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    slider.style.tranform = `translateX(${currentTranlate}px)`;
    console.log((slider.style.tranform = `translateX(${currentTranlate}px)`));
  }

  //

  //

  //

  // <!-- COMPUTER-SWIPER -->

  //

  //

  //<!-- WATCHES -->

  let buttons = document.querySelectorAll(".brand-selector-button"),
    appleContainer = document.querySelector(".apple-watch-container");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index == 0) {
        appleContainer.classList.remove("no-visible");
        appleContainer.classList.add("visible");
      }
      if (index == 1) {
        appleContainer.classList.add("no-visible");
      }
    });
  });

  //<!-- WATCHES -->

  //

  //

  // TV

  let containerTv = document.querySelector(".img-tv-container");

  let botones = document.querySelectorAll(".tv-button");

  botones.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log("boton");

      // let position =
      if (i == 0) {
        console.log("boton 1");
        containerTv.style.transform = "translateX(-0%)";
      } else if (i == 1) {
        console.log("boton 2");
        containerTv.style.transform = "translate(-33.3%)";
        // boton.style.color = "red";
      } else if (i == 2) {
        console.log("boton 3");
        containerTv.style.transform = "translate(-66.7%)";
      }
    });
  });

  //TV
});
