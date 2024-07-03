/* 
        contenido: paginas, vistas que manipula el usuario formada
        por componentes

*/
import {nameGlobal,fetchData, apisUrl} from './utils.js'

const originalText=nameGlobal.innerText
const characters=originalText.split('')



function formatDate(fecha) {
  const formatMonth = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  const objDate= new Date(fecha)
  const year=objDate.getFullYear()
  const month=objDate.getMonth()
  return `${formatMonth[month]} ${year}`
}
async function getImgProject(repo){
  const data=await fetchData(apisUrl.github.contents_url.replace('{repo}',repo).replace('{archivo}','imgcore.webp'))
  return data.download_url
}
export function renderMainInfo(data){
  const divhtml=document.querySelector('.main__info__container')
  const infoContainer=document.createElement('div')
  const img=document.createElement('img')
  img.classList.add('main__info__img')
  img.setAttribute('src',data.basics.image)
  const name=document.createElement('h2')
  name.classList.add('main__info__name')
  name.textContent=data.basics.name
  const label=document.createElement('p')
  label.textContent=data.basics.label
  const summary=document.createElement('p')
  summary.textContent=data.basics.summary
  const mail=document.createElement('p')
  mail.textContent=data.basics.email
  const phone=document.createElement('p')
  phone.textContent=data.basics.phone
  const location=document.createElement('p')
  location.textContent=`${data.basics.location.country} ${data.basics.location.city}`

  infoContainer.appendChild(img)
  infoContainer.appendChild(name)
  infoContainer.appendChild(label)
  infoContainer.appendChild(summary)
  infoContainer.appendChild(mail)
  infoContainer.appendChild(phone)
  infoContainer.appendChild(location)
  divhtml.appendChild(infoContainer)
}
export function renderCourses(data) {
  const divhtml=document.querySelector('.main__info__courses')
  const coursesList=document.createElement('ul')
  const title=document.createElement('h3')
  title.textContent='Cursos:'
  data.education[1].courses.forEach(course =>{
    const itemCourse=document.createElement('li')
    itemCourse.classList.add('about__course__item')
    itemCourse.textContent=course
    coursesList.appendChild(itemCourse)
  })
  divhtml.appendChild(title)
  divhtml.appendChild(coursesList)
}
export function renderSkills(data) {
  const divhtml=document.querySelector('.about__skill')
  const skillList=document.createElement('ul')
  skillList.classList.add('about__list')
  data.skills[0].keywords.forEach(skill =>{
    const itemSkill=document.createElement('li')
    itemSkill.classList.add('about__skill__item')
    itemSkill.textContent=skill
    skillList.appendChild(itemSkill)
  })
  divhtml.appendChild(skillList)
}
export function renderExperience(data){
  const divhtml = document.querySelector('.experience__container')
  const Experience = document.createElement('div')
  Experience.classList.add('about__experience__container')
  var iter=0
  data.work.forEach(experience => {
    const containerExperience=document.createElement('div')
    containerExperience.classList.add('container__experience',`container__experience__${iter}`)

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
    const containerDescription = document.createElement('div')
    containerDescription.classList.add('experience__description')
    const summary = document.createElement('p')
    summary.classList.add('experience__summary')
    summary.textContent=experience.summary
    const containerMoreInfo = document.createElement('div')
    containerMoreInfo.classList.add('experience__more__info')
    const summaryTools = document.createElement('button')
    summaryTools.setAttribute('type', 'button')
    summaryTools.classList.add('experience__tools')
    summaryTools.setAttribute('onclick',`openModal('experience__tools__modal${iter}')`)
    summaryTools.classList.add('global__button','accent__button')
    summaryTools.innerHTML='Tools &gt;'
    const containerModalTools=document.createElement('dialog')
    containerModalTools.classList.add(`experience__tools__modal${iter}`)
    const titlePopupTools=document.createElement('h2')
    titlePopupTools.textContent='Herramientas:'
    const messagePopupTools=document.createElement('p')
    messagePopupTools.textContent=experience.tools
    const buttonCloseModalTools=document.createElement('button')
    buttonCloseModalTools.setAttribute('type','button')
    buttonCloseModalTools.textContent='close'
    buttonCloseModalTools.setAttribute('onclick',`closeModal('experience__tools__modal${iter}')`)
    const summaryProjects = document.createElement('button')
    summaryProjects.setAttribute('type','button')
    summaryProjects.classList.add('experience__projects')
    summaryProjects.setAttribute('onclick',`openModal('experience__project__modal${iter}')`)
    summaryProjects.classList.add('global__button','accent__button')
    summaryProjects.innerHTML='Projects &gt;'
    const containerModalProject=document.createElement('dialog')
    containerModalProject.classList.add(`experience__project__modal${iter}`)
    const titlePopupProject=document.createElement('h2')
    titlePopupProject.textContent='Participe en:'
    const messagePopupProject=document.createElement('p')
    messagePopupProject.textContent=experience.project
    const buttonCloseModalProject=document.createElement('button')
    buttonCloseModalProject.setAttribute('type','button')
    buttonCloseModalProject.textContent='close'
    buttonCloseModalProject.setAttribute('onclick',`closeModal('experience__project__modal${iter}')`)

    containerWork.appendChild(bullet)
    containerWork.appendChild(nameCompany)
    containerWork.appendChild(namePosition)
    containerWork.appendChild(endDate)
    containerDescription.appendChild(summary)
    containerDescription.appendChild(containerMoreInfo)
    containerMoreInfo.appendChild(summaryTools)
    containerMoreInfo.appendChild(summaryProjects)
    containerMoreInfo.appendChild(containerModalTools)
    containerModalTools.appendChild(titlePopupTools)
    containerModalTools.appendChild(messagePopupTools)
    containerModalTools.appendChild(buttonCloseModalTools)
    containerMoreInfo.appendChild(containerModalProject)
    containerModalProject.appendChild(titlePopupProject)
    containerModalProject.appendChild(messagePopupProject)
    containerModalProject.appendChild(buttonCloseModalProject)
    containerExperience.appendChild(containerWork)
    containerExperience.appendChild(containerDescription)
    Experience.appendChild(containerExperience)
    iter+=1
  })
  divhtml.appendChild(Experience)

}
export async function renderGallery(data) {
  const divhtml = document.getElementById('render__gallery')
  const gallery = document.createElement('div');
  gallery.classList.add('portfolio__gallery')
  for (const project of data) {
    const anchorItem = document.createElement('a');
    anchorItem.setAttribute('href',project.html_url)

    const projectItem = document.createElement('div');
    projectItem.classList.add('portfolio__gallery__item');
    
    const image = document.createElement('img');
    image.classList.add('img__portfolio__item');
    // image.setAttribute('src', project.owner.avatar_url);
    image.setAttribute('src', await getImgProject(project.name));
    image.setAttribute('alt', project.owner.login);
    
    const porfolioDescription=document.createElement('div')
    porfolioDescription.classList.add('portfolio__description__container')

    const title = document.createElement('h3');
    title.classList.add('portfolio__project__title')
    title.textContent = project.name;
    
    const category = document.createElement('span');
    category.classList.add('porfolio__category','global__button','secondary__button')
    category.textContent = project.language;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    anchorItem.appendChild(projectItem)
    projectItem.appendChild(image);
    projectItem.appendChild(porfolioDescription);
    porfolioDescription.appendChild(title);
    porfolioDescription.appendChild(category);
    porfolioDescription.appendChild(description);
    gallery.appendChild(anchorItem);    
  }
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
