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
                type: catalog.Type,
                estado: catalog.Estado
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
            catalogClone.querySelector('.Estado').textContent = catalog.Estado;
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
            catalogClone.querySelector('.Estado').textContent = catalog.Estado;
            catalogContainer.appendChild(catalogClone);
        });
    }
    removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    searchGlobal(query) {
        // Convierte la consulta a minúsculas
        const searchQuery = query.toLowerCase();
        if (!searchQuery) {
            throw new Error("Vuelve a ingresar los datos");
           }

        // Filtra los catálogos que coinciden con el título o descripción
        const filteredCatalogs = this.catalogData.filter(catalog => {
          const title = catalog.Title.toLowerCase();
          const description = catalog.Description.toLowerCase();
          const difficulty = catalog.Difficulty.toLowerCase();//Agregamos Dificultad
          const Type= catalog.Type.toLowerCase();//Agregamos el Tipo de 
          const Estado =catalog.Estado.toLowerCase();
          const Categoria =catalog.Category.toLowerCase();

          return title.includes(searchQuery) || description.includes(searchQuery)||difficulty.includes(searchQuery)||Type.includes(searchQuery)||Categoria.includes(searchQuery)||Estado.includes(searchQuery);        });
          if (filteredCatalogs.length === 0) {
            throw new Error("No se encontraron resultados");
          }

          // Devuelve el resultado de la búsqueda
          return filteredCatalogs;
         }
         OrdenarCatalogs(order) {
            const dataToSort = this.displayedCatalogs.length > 0 ? this.displayedCatalogs : this.catalogData;
            if (order === "asc") {
                dataToSort.sort((a, b) => a.Title.localeCompare(b.Title));
            } else if (order === "desc") {
                dataToSort.sort((a, b) => b.Title.localeCompare(a.Title));
            }
        }
  }
export default CatalogList;
    
