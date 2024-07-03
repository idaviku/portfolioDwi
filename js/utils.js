/* 
      contenido: utilidades, funciones auxiliares globales
      (ayuda, constantes, configuraciones)
*/
export const apisUrl = {
    github:{
        user_url:'https://api.github.com/users/idaviku',
        repos_url:'https://api.github.com/users/idaviku/repos',
        gists_url:'https://api.github.com/users/idaviku/gists',
        events_url:'https://api.github.com/users/idaviku/events',
        contents_url:'https://api.github.com/repos/idaviku/{repo}/contents/{archivo}?ref=main'
    },
    dataJson:'../data-cv.json'
};
export const nameGlobal = document.querySelector('.hero__h1__name')
export async function fetchData(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Ocurrió un error:', error);
      throw error;
  }
}