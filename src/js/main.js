function runMenu () {
  let gamburgerMenu = document.querySelector('.nav__icon');
  let menu = document.querySelector('.nav__menu');
    gamburgerMenu.addEventListener('click', e => {
      e.preventDefault();
      gamburgerMenu.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    } );
}
runMenu ();
