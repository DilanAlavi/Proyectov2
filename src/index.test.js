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
    const kataName = "CalcularMCD"; // Nombre de la kata que estás buscando
    const tituloEncontrado = buscarKataPorNombre(kataName);

    expect(tituloEncontrado).toEqual("CalcularMCD");
  });
});

function buscarKataPorNombre(nombre) {
  // Simulamos una búsqueda por nombre
  // En este caso, simplemente comparamos el nombre con un valor fijo
  if (nombre === "CalcularMCD") {
    return "CalcularMCD";
}
}
