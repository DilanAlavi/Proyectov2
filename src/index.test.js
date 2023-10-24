import CatalogList from './index.js';
import catalogData from './catalogData'; // Importa el arreglo de datos

describe("Pruebas de obtención de título y descripción de la kata", () => {
  it("Verifica si los títulos coinciden con los valores en catalogData", () => {
    const catalogList = new CatalogList(catalogData); // Pasa el arreglo de datos al constructor

    const catalogItems = catalogList.displayCatalogNames();

    // Recorre todos los catálogos en catalogData
    catalogData.forEach((catalog, index) => {
      // Verifica que el título en catalogItems coincida con el título en catalogData
      expect(catalogItems[index].title).toEqual(catalog.Title);
      // Verifica que la descripción en catalogItems coincida con la descripción en catalogData
      expect(catalogItems[index].description).toEqual(catalog.Description);
      // Verifica que la dificultad en catalogItems coincida con la dificultad en catalogData
      expect(catalogItems[index].difficulty).toEqual(catalog.Difficulty);
      //Verifica que la Categoria en catalogItems coincida con la categoria en catalogData
      expect(catalogItems[index].category).toEqual(catalog.Category);
      //Verifica que el TIPO de ejercicio de Kata en catalogItems coincida con la de TIPO de ejercicio de Kata en catalogData
      expect(catalogItems[index].type).toEqual(catalog.Type);

    });
  });
});

describe("Pruebas para buscar el título de la Kata", () => {
  it("Verifica si la función busca el título correctamente", () => {
    const catalogList = new CatalogList(catalogData);
    const kataName = "CalcularMCD"; // Nombre de la kata que estás buscando
    const tituloEncontrado = catalogList.searchKataByName(kataName);

    // Verifica que tituloEncontrado no sea null o undefined
    expect(tituloEncontrado).toBeDefined();
    // Verifica que el título de la kata encontrada sea igual al nombre de la kata que buscas
    expect(tituloEncontrado.Title).toEqual(kataName);
  });
});

describe("Pruebas para buscar el título de la Kata (Kata no encontrada)", () => {
  it("Verifica si la función retorna un mensaje cuando la kata no se encuentra", () => {
    const catalogList = new CatalogList(catalogData);
    const kataName = "Ejercicio de Polinomios"; // Nombre de la kata que no se encuentra
    const resultado = catalogList.searchKataByName(kataName);

    // Verifica que el resultado sea igual al mensaje de error
    expect(resultado).toEqual("No se encontro Resultados");
  });
});
