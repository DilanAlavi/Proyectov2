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
    displayCatalogName(catalogs) {
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
    searchByKataName(name) {
        // Convierte el nombre de búsqueda a minúsculas
        const searchName = name.toLowerCase();
        // Filtra los catálogos que coinciden con el nombre de búsqueda
        const filteredCatalogs = this.catalogData.filter(catalog => catalog.Title.toLowerCase().includes(searchName));

        // Devuelve el resultado de la búsqueda
        return filteredCatalogs.length > 0 ? filteredCatalogs :"No se encontraron resultados";
      }
      searchKataByDescription(Descripcion) {
        const Desctn = this.catalogData.find(item => item.Description === Descripcion);
        if (Desctn){
            return Desctn ;
        }
        else{
            return "No se encontro Resultados";
        }
    }
  }
export default CatalogList;
    
