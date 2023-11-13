class CatalogList {
    constructor(data) {
        this.catalogData = data;
        this.displayedCatalogs = [];
    }
    VisualizarDatosDeCatalogos() {
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

}
export default CatalogList;

