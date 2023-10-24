class CatalogList{
    constructor(data) {
        this.catalogData = data;
        this.displayedCatalogs = [];
    }
    displayCatalogNames() {
        return this.catalogData.map(catalog => {
            return {
                title: catalog.Title,
                description: catalog.Description,
                difficulty: catalog.Difficulty,
                category: catalog.Category,
                type: catalog.Type
            };
        });
    }
    renderCatalogsToContainer() {
        const catalogContainer = document.getElementById("catalog-container");
        const catalogTemplate = document.getElementById("catalog-template");
    
        this.catalogData.forEach(catalog => {
            const catalogClone = document.importNode(catalogTemplate.content, true);

            catalogClone.querySelector('.Title').textContent = catalog.Title;
            catalogClone.querySelector('.Description').textContent = catalog.Description;
            catalogClone.querySelector('.Difficulty').textContent = catalog.Difficulty;
            catalogClone.querySelector('.Category').textContent = catalog.Category;
            catalogClone.querySelector('.Type').textContent = catalog.Type;
            catalogContainer.appendChild(catalogClone);
        });
    }
    displayCatalog(catalogs) {
        const catalogContainer = document.getElementById("catalog-container");
        const catalogTemplate = document.getElementById("catalog-template");

        // Limpia el contenedor de catálogos antes de mostrar nuevos resultados
        //catalogContainer.innerHTML = '';

        catalogs.forEach(catalog => {
            const catalogClone = document.importNode(catalogTemplate.content, true);

            catalogClone.querySelector('.Title').textContent = catalog.Title;
            catalogClone.querySelector('.Description').textContent = catalog.Description;
            catalogClone.querySelector('.Difficulty').textContent = catalog.Difficulty;
            catalogClone.querySelector('.Category').textContent = catalog.Category;
            catalogClone.querySelector('.Type').textContent = catalog.Type;
            catalogContainer.appendChild(catalogClone);
        });
    }
    searchGlobal(query) {
        // Convierte la consulta a minúsculas
        const searchQuery = query.toLowerCase();

        // Filtra los catálogos que coinciden con el título o descripción
        const filteredCatalogs = this.catalogData.filter(catalog => {
          const title = catalog.Title.toLowerCase();
          const description = catalog.Description.toLowerCase();

          return title.includes(searchQuery) || description.includes(searchQuery);
        });
        return filteredCatalogs.length > 0 ? filteredCatalogs : "No se encontraron resultados";
    }
  }
export default CatalogList;
    
