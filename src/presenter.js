import CatalogList from './index.js'; // Importa la clase CatalogList desde el archivo correspondiente.
import catalogData from './catalogData.js'; // Asegúrate de que la ruta sea correcta.

// Creamos una instancia de la clase CatalogList
const catalogListInstance = new CatalogList(catalogData);

// Función para mostrar catálogos en la página

// Llamamos al método para mostrar los catálogos cuando se cargue la página
window.onload = () => {
   
  catalogListInstance.renderCatalogsToContainer();
  //"Configurando el evento de búsqueda por nombre en el botón"
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");

 searchButton.addEventListener("click", () => {
   const searchName = searchInput.value.trim(); // Obtenemos el nombre de búsqueda
        const searchResult = catalogListInstance.searchByKataName(searchName); // Realizamos la búsqueda

       // Solo llamamos al método displayCatalogName() una vez
       catalogListInstance.displayCatalogName(searchResult); // Mostramos los resultados de la búsqueda
    });
 };
