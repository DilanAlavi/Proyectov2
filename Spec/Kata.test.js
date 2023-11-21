import CatalogList from '../src/Kata.js';
import catalogData from '../Data/catalogData.js';

describe("Pruebas de obtención de título y descripción de la kata", () => {
  it("Verifica si los títulos coinciden con los valores en catalogData", () => {
    const catalogList = new CatalogList(catalogData);

    const catalogItems = catalogList.VisualizarDatosDeCatalogos();

    // Recorre todos los catálogos en catalogData y verifica con capa elemento de catalogData
    catalogData.forEach((catalog, index) => {
      expect(catalogItems[index].title).toEqual(catalog.Title);
      expect(catalogItems[index].description).toEqual(catalog.Description);
      expect(catalogItems[index].difficulty).toEqual(catalog.Difficulty);
      expect(catalogItems[index].category).toEqual(catalog.Category);
      expect(catalogItems[index].type).toEqual(catalog.Type);

    });
  });
});