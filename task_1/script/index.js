
// Отображение меню при нажатии на гамбургер
function showMenu() {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const menu = document.getElementsByClassName("hamburger__menu")[0];
  menu.classList.add('menu--active');
  hamburger.classList.add('hidden')
}

// Скрытие меню
function closeMenu() {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const menu = document.getElementsByClassName("hamburger__menu")[0];
  menu.classList.remove('menu--active');
  hamburger.classList.remove('hidden')
}