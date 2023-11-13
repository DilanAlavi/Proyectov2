export function BusquedaGlobal(catalogData, query) {
    // Convierte la consulta a minúsculas
    const searchQuery = query.toLowerCase();
    const filteredCatalogs = catalogData.filter(catalog => {
        const title = catalog.Title.toLowerCase();
        const description = catalog.Description.toLowerCase();
        const difficulty = catalog.Difficulty.toLowerCase();
        const Type = catalog.Type.toLowerCase();
        const Categoria = catalog.Category.toLowerCase();

        return title.includes(searchQuery) || description.includes(searchQuery) || difficulty.includes(searchQuery) || Type.includes(searchQuery) || Categoria.includes(searchQuery);
    });
    if (filteredCatalogs.length === 0) {
        throw new Error("No se encontraron resultados");
    }
    // Devuelve el resultado de la búsqueda
    return filteredCatalogs;
}

