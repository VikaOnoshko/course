const sidebar = document.querySelector(".sidebar");
const headerBurger = document.querySelector(".header__burger");

const onBurgerClick = () => {
  sidebar.classList.toggle("sidebar_active");
  headerBurger.classList.toggle("header__burger_active");
};

const onSelectLink = () => {
  sidebar.classList.remove("sidebar_active");
  headerBurger.classList.remove("header__burger_active");
};
