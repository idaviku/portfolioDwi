
const seeMenu = document.querySelector('.menu')
const displayBlur = document.querySelector('.display__blur')
//const menu=document.querySelector('.nav__menu__container')
//const listaul=document.querySelector('.nav__container__items')
const inputMenu=document.querySelector('.nav__header__init')
const printFormat=document.querySelector('#printFormat')
const searchInput=document.querySelector('.searchInput')
const menu1 = document.querySelector('.nav__menu__container')
const menu2 = document.querySelector('.nav__container__logo')
const itemsMenu1 = menu1.querySelectorAll('.nav__item__a')

//if ('serviceWorker' in navigator) {
  //window.addEventListener('load', () => {
    //navigator.serviceWorker.register('js/service-worker.js')
      //.then(registration => {
        //console.log('Service Worker registrado con éxito:', registration);
      //})
      //.catch(error => {
        //console.log('Error al registrar el Service Worker:', error);
      //});
  //});
//}

function cambiarEstado() {
  document.querySelector('.nav__menu__container').classList.toggle('visuallyHidden');
  displayBlur.classList.toggle('visuallyHidden');
  inputMenu.classList.toggle('visuallyHidden')
  searchInput.focus()
}

seeMenu.onclick = () => {
  cambiarEstado();
}
inputMenu.onclick = () => {
  cambiarEstado();
}

function filterMenu(query, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.textContent.toLowerCase();

    if (text.includes(query)) {
      item.style.display = ''; 
    } else {
      item.style.display = 'none'; 
    }
  }
}

searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  filterMenu(query, itemsMenu1)
  //filterMenu(query, itemsMenu2);
  //selectFirstVisibleOption()
});

function selectFirstVisibleOption() {
  const visibleItems = [...itemsMenu1].filter(item => item.style.display !== 'none');

  if (visibleItems.length > 0) {
    visibleItems[0].focus(); 
    visibleItems[0].scrollIntoView({ behavior: 'smooth', block: 'center' }); 
  }
}

document.addEventListener('DOMContentLoaded', function () {
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
    const visibleItems=[...menu1.querySelectorAll('.nav__item__a')].filter(e => e.style.display !== 'none')
    let currentIndex = visibleItems.indexOf(currentFocus)
    let nextIndex = -1

    switch (e.key) {
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : visibleItems.length - 1
        break;
      case 'ArrowDown':
        nextIndex = currentIndex < visibleItems.length - 1 ? currentIndex + 1 : 0
        break;
      case 'Enter':
        visibleItems[currentIndex].click()
        break;
    }
    if (nextIndex !== -1) {
      visibleItems[nextIndex].focus()
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


const themeToggle = document.querySelector('.theme-selector');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.value = savedTheme;
} else {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', systemTheme);
    themeToggle.value = systemTheme;
}

themeToggle.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    if (selectedTheme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
        document.documentElement.setAttribute('data-theme', selectedTheme);
    }
    localStorage.setItem('theme', selectedTheme);
});
