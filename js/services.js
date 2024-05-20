/* 
      contenido: modulos de codigo encapsulado snippets, conexiones,
      autenticación, recuperacion y manipulacion de datos

*/
//import {renderProfile,renderRepos} from './components.js'
import{apisUrl,nameGlobal,fetchData} from './utils.js'
// import {renderProfile,renderRepos,renderPrintCV, renderGallery} from './pages.js'
import * as render from './pages.js'
import {galleryRepos} from "./components.js"

async function getUser(){
  const data = await fetchData(apisUrl.github.user_url)
  render.renderProfile(data)
}
async function getRepos(){
  const data = await fetchData(apisUrl.github.repos_url)
  render.renderRepos(data)
  render.renderGallery(data)
  // const gallery = new galleryRepos()
  // gallery.renderGallery(data)
  
  // gallery.shadowRoot.innerHTML = ''
  // gallery.shadowRoot.appendChild(gallery.connectedCallback(data))
  // console.log("en getrepos"+gallery)
  // console.log(gallery.isConnected)
}
async function getDataCurriculum(){
  const data = await fetchData(apisUrl.dataJson)
  render.renderPrintCV(data)
}
getRepos()
getUser()
getDataCurriculum()