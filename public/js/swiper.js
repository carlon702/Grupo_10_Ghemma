const offerCarrousel = new Swiper(".offer-carrousel", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // autoplay: {
  //   delay: 5000,
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 400,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const headphonesSwiperPhone = new Swiper(".headphone-section", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
