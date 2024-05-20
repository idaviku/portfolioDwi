/* 
        contenido: paginas, vistas que manipula el usuario formada
        por componentes

*/
import {nameGlobal} from './utils.js'

const originalText=nameGlobal.innerText
const characters=originalText.split('')

export function renderProfile(data){
  console.log(`usuario: ${data.login} `)
}
export function renderRepos(data){
data.forEach(element => {
  console.log(`repos: ${element.name}`)
});
}
export function renderPrintCV(data){
  console.log(`resumen: ${data.basics.summary}`)
}

export function renderGallery(data) {
  const divhtml = document.getElementById('render__gallery')
  const gallery = document.createElement('div');
  gallery.classList.add('portfolio__gallery')
  data.forEach(project => {
    const anchorItem = document.createElement('a');
    anchorItem.setAttribute('href',project.html_url)

    const projectItem = document.createElement('div');
    projectItem.classList.add('portfolio__gallery__item');
    
    const image = document.createElement('img');
    image.classList.add('img__portfolio__item');
    image.setAttribute('src', project.owner.avatar_url);
    image.setAttribute('alt', project.owner.login);
    
    const title = document.createElement('h3');
    title.textContent = project.name;
    
    const category = document.createElement('span');
    category.classList.add('porfolio__category')
    category.textContent = project.language;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    anchorItem.appendChild(projectItem)
    projectItem.appendChild(image);
    projectItem.appendChild(title);
    projectItem.appendChild(category);
    projectItem.appendChild(description);
    gallery.appendChild(anchorItem);

  });
  divhtml.appendChild(gallery)
}

function characterRandomLetter(character){
  if (character === ' ') {
    return ' ';
  }else{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomNumber = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomNumber];
  }
}
function animateText() {
  let newText = '';
  for (let index = 0; index < characters.length; index++) {
    newText+=characterRandomLetter(characters[index])
  }
  while (newText.length !== originalText.length) {
    newText = newText.substring(0,newText.length - 1)
    newText += characterRandomLetter(characters[newText.length])
  }
  nameGlobal.innerText=newText
}
const animationInterval = setInterval(animateText, 150);

setTimeout(() => {
  clearInterval(animationInterval);
  nameGlobal.innerText = originalText;
}, 3000);
