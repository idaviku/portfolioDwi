
const seeMenu = document.querySelector('.menu')

function cambiarEstado(){
  document.querySelector('.nav__menu__container').classList.toggle('visuallyHidden');
}
seeMenu.onclick = () => {
  cambiarEstado();
} 
/* seeMenu.addEventListener("click",()=>{
  cambiarEstado();
}) */