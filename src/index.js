class CatalogList{
    constructor(data) {
        this.catalogData = data;
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
    
    searchKataByName(name) {
        const matchingKatas = this.catalogData.filter(item => item.Title.toLowerCase().includes(name.toLowerCase()));

        if (matchingKatas.length > 0) {
          return matchingKatas.map(kata => kata.Title);
        } else {
          // Si no se encuentra ninguna kata, retorna un mensaje de error
          return "No se encontro Resultados";
        }
      }
    
}
export default CatalogList;
    
