/* 
        contenido: paginas, vistas que manipula el usuario formada
        por componentes

*/

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