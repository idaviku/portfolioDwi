
const seeMenu = document.querySelector('.menu')

function cambiarEstado(){
  document.querySelector('.nav__menu__container').classList.toggle('visuallyHidden');
  document.querySelector('.display__blur').classList.toggle('visuallyHidden');
}
seeMenu.onclick = () => {
  cambiarEstado();
} 
/* seeMenu.addEventListener("click",()=>{
  cambiarEstado();
}) */

function openModal(modalId) {
  // const modal = document.getElementById(modalId);
  const modal=document.querySelector(`.${modalId}`)
  if (modal) {
    modal.showModal();
  }
}
function closeModal(modalId) {
  // const modal = document.getElementById(modalId);
  const modal=document.querySelector(`.${modalId}`)
  if (modal) {
    modal.close();
  }
}