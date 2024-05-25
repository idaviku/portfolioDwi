/* 
        contenido: paginas, vistas que manipula el usuario formada
        por componentes

*/
import {nameGlobal} from './utils.js'

const originalText=nameGlobal.innerText
const characters=originalText.split('')

function formatDate(fecha) {
  const formatMonth = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  const objDate= new Date(fecha)
  const year=objDate.getFullYear()
  const month=objDate.getMonth()
  return `${formatMonth[month]} ${year}`
}
export function renderExperience(data){
  const divhtml = document.querySelector('.experience__container')
  const Experience = document.createElement('div')
  Experience.classList.add('about__experience__container')
  data.work.forEach(experience => {
    console.log(experience.name)
    const containerWork = document.createElement('div')
    containerWork.classList.add('experience__work')
    const bullet = document.createElement('span')
    bullet.classList.add('bullet')
    bullet.textContent='•'
    const nameCompany = document.createElement('h3')
    nameCompany.classList.add('experience__company')
    nameCompany.textContent=experience.name
    const namePosition = document.createElement('h4')
    namePosition.classList.add('experience__position')
    namePosition.textContent=experience.position
    const endDate = document.createElement('time')
    endDate.classList.add('experience__enddate')
    endDate.setAttribute('datetime',experience.endDate)
    endDate.textContent=formatDate(experience.endDate)
    const constainerDescription = document.createElement('div')
    constainerDescription.classList.add('experience__description')
    const summary = document.createElement('p')
    summary.classList.add('experience__summary')
    summary.textContent=experience.summary
    const containerMoreInfo = document.createElement('div')
    containerMoreInfo.classList.add('experience__more__info')
    const summaryTools = document.createElement('span')
    summaryTools.classList.add('experience__tools')
    summaryTools.classList.add('global__button')
    summaryTools.innerHTML='&Hat; Tools'
    const summaryProjects = document.createElement('span')
    summaryProjects.classList.add('experience__projects')
    summaryProjects.classList.add('global__button')
    summaryProjects.innerHTML='&Hat; Projects'

    containerWork.appendChild(bullet)
    containerWork.appendChild(nameCompany)
    containerWork.appendChild(namePosition)
    containerWork.appendChild(endDate)
    constainerDescription.appendChild(summary)
    constainerDescription.appendChild(containerMoreInfo)
    containerMoreInfo.appendChild(summaryTools)
    containerMoreInfo.appendChild(summaryProjects)
    Experience.appendChild(containerWork)
    Experience.appendChild(constainerDescription)
    
  })
  divhtml.appendChild(Experience)
  console.log(divhtml)
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
