/* 
      contenido: modulos de codigo encapsulado snippets, conexiones,
      autenticación, recuperacion y manipulacion de datos

*/
//import {renderProfile,renderRepos} from './components.js'
import{apisUrl,fetchData} from './utils.js'
import {renderProfile,renderRepos,renderPrintCV} from './pages.js'
import {galleryRepos} from "./components.js"

async function getUser(){
  const data = await fetchData(apisUrl.github.user_url)
  renderProfile(data)
}
async function getRepos(){
  const data = await fetchData(apisUrl.github.repos_url)
  renderRepos(data)
  new galleryRepos().connectedCallback(data)
}
async function getDataCurriculum(){
  const data = await fetchData(apisUrl.dataJson)
  renderPrintCV(data)
}

getRepos()
getUser()
getDataCurriculum()