/* 
      contenido: modulos de codigo encapsulado snippets, conexiones,
      autenticación, recuperacion y manipulacion de datos

*/

fetchData(apisUrl.github.user_url)
  .then(data => {
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

fetchData(apisUrl.dataJson).then(data =>{console.log(data)})