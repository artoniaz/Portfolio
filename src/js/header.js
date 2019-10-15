const headerBtn = document.querySelector(".header__button");
const buttonArrow = headerBtn.querySelector(".fa-arrow-right");

const toggleButton = e => {
  if (e.target.classList.contains("header__button--noActive") || [...e.target.classList].length < 2) {
    e.target.classList.remove("header__button--noActive");
    e.target.classList.add("header__button--active");
  } else {
    e.target.classList.remove("header__button--active");
    e.target.classList.add("header__button--noActive");
  }
};

headerBtn.addEventListener("click", toggleButton);

export { toggleButton };
