/* 
      contenido: utilidades, funciones auxiliares globales
      (ayuda, constantes, configuraciones)
*/

async function fetchData(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Ocurrió un error:', error);
      // Puedes manejar el error de manera específica aquí, como mostrar un mensaje al usuario
      throw error;
  }
}