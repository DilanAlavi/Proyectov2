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
    const catalogContainer = document.getElementById("catalog-container");
    const catalogTemplate = document.getElementById("catalog-template");

    searchButton.addEventListener("click", () => {
        const searchName = searchInput.value.trim();

        if (searchName === '') {
          // Si el campo de búsqueda está vacío, muestra un mensaje de error
          alert("Ingrese datos para la búsqueda");
      } else {
          // Realiza la búsqueda normalmente
          const searchResult = catalogListInstance.searchGlobal(searchName);
  

        // Limpia el contenido anterior en el contenedor de catálogos
        catalogContainer.innerHTML = '';

        if (searchResult.length > 0) {
            // Agrega los nuevos resultados al contenedor
            searchResult.forEach(catalog => {
                const catalogClone = document.importNode(catalogTemplate.content, true);
                catalogClone.querySelector('.Title').textContent = catalog.Title;
                catalogClone.querySelector('.Description').textContent = catalog.Description;
                catalogClone.querySelector('.Difficulty').textContent = catalog.Difficulty;
                catalogClone.querySelector('.Category').textContent = catalog.Category;
                catalogClone.querySelector('.Type').textContent = catalog.Type;
                catalogContainer.appendChild(catalogClone);
            });

            // Actualiza el array de catálogos mostrados
            displayedCatalogs.length = 0; // Limpia el array
            displayedCatalogs.push(...searchResult);
        }
         }
    });
    
    sortSelect.addEventListener("change", () => {
      catalogListInstance.sortCatalogs(sortSelect.value);

      // Vuelve a mostrar la lista de catálogos en el contenedor.
      catalogContainer.innerHTML = '';
      catalogData.forEach(catalog => {
          const catalogClone = document.importNode(catalogTemplate.content, true);
          catalogClone.querySelector('.Title').textContent = catalog.Title;
          catalogClone.querySelector('.Description').textContent = catalog.Description;
          catalogClone.querySelector('.Difficulty').textContent = catalog.Difficulty;
          catalogClone.querySelector('.Category').textContent = catalog.Category;
          catalogClone.querySelector('.Type').textContent = catalog.Type;
          catalogContainer.appendChild(catalogClone);
      });
  });
};
 
