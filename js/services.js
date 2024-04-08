/* 
      contenido: modulos de codigo encapsulado snippets, conexiones,
      autenticación, recuperacion y manipulacion de datos

*/

// Ejemplo de uso
const apiUrl = 'https://api.github.com/users/idaviku';

fetchData(apiUrl)
  .then(data => {
    // Trabajar con los datos obtenidos
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    // Manejar errores
    console.error('Error al obtener los datos:', error);
  });
