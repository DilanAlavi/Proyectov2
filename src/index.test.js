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
    const kataName = "Calcu"; // Nombre parcial de la kata que estás buscando
    const resultados = catalogList.searchKataByName(kataName);

    // Verifica que resultados no sea null o undefined
    expect(resultados).toBeDefined();
    // Verifica que resultados sea un arreglo (si hay resultados) o un mensaje de error (si no hay resultados)
    if (Array.isArray(resultados)) {
      // Si hay resultados, verifica que al menos un resultado coincida con el nombre parcial
      const alMenosUnResultadoCoincide = resultados.some(resultado => resultado.toLowerCase().includes(kataName.toLowerCase()));
      expect(alMenosUnResultadoCoincide).toBe(true);
    } else {
      // Si no hay resultados, verifica que el mensaje de error sea igual a "No se encontraron resultados"
      expect(resultados).toEqual("No se encontraron resultados");
    }
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

describe("Pruebas para buscar el título de la Kata", () => {
  it("Verifica si la función busca el título correctamente", () => {
    const catalogList = new CatalogList(catalogData);
    const kataName = "Calcu"; // Nombre parcial de la kata que estás buscando
    const resultados = catalogList.searchKataByName(kataName);

    // Verifica que resultados no sea null o undefined y que no sea igual a "No se encontraron resultados"
    expect(resultados).toBeDefined();
    expect(resultados).not.toEqual("No se encontraron resultados");
  });
});
describe("Pruebas para la base de datos de katas", () => {
  it("Verifica si la base de datos devuelve resultados esperados al buscar 'Calcu'", () => {
    const catalogList = new CatalogList(catalogData);
    const kataName = "Calcu"; // Nombre parcial de la kata que estás buscando

    const resultadosEsperados = ["CalcularMCD"]; // Define aquí los resultados esperados

    const resultados = catalogList.searchKataByName(kataName);

    // Verifica que resultados no sea null o undefined y que no sea igual a "No se encontraron resultados"
    expect(resultados).toBeDefined();
    expect(resultados).not.toEqual("No se encontraron resultados");

    // Si hay resultados, verifica que al menos un resultado coincide con los esperados
    if (Array.isArray(resultados)) {
      const alMenosUnResultadoCoincide = resultados.some(resultado => resultadosEsperados.includes(resultado));
      expect(alMenosUnResultadoCoincide).toBe(true);
    }
  });
});
describe("Pruebas para la base de datos de katas", () => {
  it("Verifica si la base de datos devuelve resultados esperados al buscar 'C'", () => {
    const catalogList = new CatalogList(catalogData);
    const kataName = "ar"; // Nombre parcial de la kata que estás buscando
    const resultadosEsperados = ["CalcularMCD","Encontrar Ciclos en un Grafo","Ordenar Arreglos"]; // Define aquí los resultados esperados
    const resultados = catalogList.searchKataByName(kataName);

    // Verifica que resultados no sea null o undefined y que no sea igual a "No se encontraron resultados"
    expect(resultados).toBeDefined();
    expect(resultados).not.toEqual("No se encontraron resultados");

    // Si hay resultados, verifica que al menos uno coincide con los esperados
    if (Array.isArray(resultados)) {
      const alMenosUnResultadoCoincide = resultados.some(resultado => resultadosEsperados.includes(resultado));
      expect(alMenosUnResultadoCoincide).toBe(true);
    }
  });
});