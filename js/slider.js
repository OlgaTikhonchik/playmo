const cardsContainer = document.querySelector(".brands__cards");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

const visibleCards = 4;
const cardWidth = cardsContainer.querySelector("img").offsetWidth + 16;
let currentPosition = 0;

rightArrow.addEventListener("click", () => {
  const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
  if (currentPosition < maxScroll) {
    currentPosition += cardWidth;
    cardsContainer.scrollLeft = currentPosition;
  }
});

leftArrow.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition -= cardWidth;
    cardsContainer.scrollLeft = currentPosition;
  }
});
