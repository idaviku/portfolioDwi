
const seeMenu = document.querySelector('.menu')
const displayBlur = document.querySelector('.display__blur')
//const menu=document.querySelector('.nav__menu__container')
//const listaul=document.querySelector('.nav__container__items')
const inputMenu=document.querySelector('.nav__header__init')
const printFormat=document.querySelector('#printFormat')
const searchInput=document.querySelector('.searchInput')



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('js/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}
function cambiarEstado() {
  document.querySelector('.nav__menu__container').classList.toggle('visuallyHidden');
  displayBlur.classList.toggle('visuallyHidden');
  inputMenu.classList.toggle('visuallyHidden')
  searchInput.focus()
  //const menuItems = menu.querySelectorAll('.nav__item__a')
  //searchInput.addEventListener('input', ()=>{
    //const filter=searchInput.value.toLowerCase()
    //menuItems.forEach(e=>{
      //const text=e.textContent.toLowerCase()
      //if (text.includes(filter)) {
        //e.focus()
      //} 
    //})
  //})
}
seeMenu.onclick = () => {
  cambiarEstado();
}
inputMenu.onclick = () => {
  cambiarEstado();
}
//observer.observe(seeMenu)
/* seeMenu.addEventListener("click",()=>{
  cambiarEstado();
}) */
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.nav__menu__container')
  let isMenuOpen = false
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.key === 'k') || e.key === 'Escape') {
      e.preventDefault()
      isMenuOpen ? closeMenu() : openMenu()
    }
  })
  function openMenu() {
    cambiarEstado()
    isMenuOpen = true
    document.addEventListener('keydown', handleMenuNavigation)
  }
  function closeMenu() {
    cambiarEstado()
    isMenuOpen = false
    document.addEventListener('keydown', handleMenuNavigation)
  }
  displayBlur.addEventListener('click', closeMenu)

  function handleMenuNavigation(e) {
    const currentFocus = document.activeElement
    const menuItems = menu.querySelectorAll('.nav__item__a')
    let currentIndex = Array.from(menuItems).indexOf(currentFocus)
    let nextIndex = -1

    switch (e.key) {
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1
        break;
      case 'ArrowDown':
        nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0
        break;
      case 'Enter':
        menuItems[currentIndex].click()
        break;
    }
    if (nextIndex !== -1) {
      menuItems[nextIndex].focus()
      e.preventDefault()
    }
  }
})
function openModal(modalId) {
  const modal = document.querySelector(`.${modalId}`)
  if (modal) {
    modal.showModal();
  }
}
function closeModal(modalId) {
  const modal = document.querySelector(`.${modalId}`)
  if (modal) {
    modal.close();
  }
}
function printCurriculum(reportPrint) {
  const impresion=document.querySelector(reportPrint)
  impresion.classList.toggle('print__section')
  printFormat.href='./css/printformatcv.css'
  setTimeout(() => {
    window.print()
    impresion.classList.toggle('print__section')
  }, 500
);
}
window.addEventListener("afterprint", () => {
  printFormat.href='./css/print.css'
});
