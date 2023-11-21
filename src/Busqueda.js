export function BusquedaGlobal(catalogData, query) {
    const consultaBusqueda  = query.toLowerCase();
    const catalogosFiltrados = catalogData.filter(catalog => {
        const titulo  = catalog.Title.toLowerCase();
        const descripcion  = catalog.Description.toLowerCase();
        const dificultad  = catalog.Difficulty.toLowerCase();
        const tipo = catalog.Type.toLowerCase();
        const Categoria = catalog.Category.toLowerCase();

        return titulo.includes(consultaBusqueda ) || descripcion.includes(consultaBusqueda ) || dificultad.includes(consultaBusqueda ) || tipo.includes(consultaBusqueda ) || Categoria.includes(consultaBusqueda );
    });
    if (catalogosFiltrados.length === 0) {
        throw new Error("No se encontraron resultados");
    }
    return catalogosFiltrados;
}