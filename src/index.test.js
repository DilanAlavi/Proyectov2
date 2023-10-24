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

it("Debería manejar una búsqueda que no devuelve resultados", () => {
  const catalogList = new CatalogList(catalogData); // Pasa el arreglo de datos al constructor
  const kataName = "KataInexistente"; // Nombre de una kata que no existe

  const resultado = catalogList.searchByKataName(kataName);
   // Verifica que el resultado sea igual al mensaje de error
  expect(resultado).toEqual("No se encontraron resultados");
});
it("Debería manejar una búsqueda con coincidencia exacta", () => {
  const catalogList = new CatalogList(catalogData); // Pasa el arreglo de datos al constructor
  const kataName = "ar"; // Nombre exacto de una kata existente


  const resultado = catalogList.searchByKataName(kataName);

  // Verifica que el resultado sea igual al objeto de la kata
  const kataEsperada = [
    {
        Title: "CalcularMCD",
        Description: "Kata para calcular el Máximo Común Divisor (MCD) de dos números.",
        Difficulty: "Facil",
        Category: "Numeros, Matematicas, Ejercicios matematicos",
        Type: "Ejemplo"
    },
    {
        Title: "Ordenar Arreglos",
        Description: "Kata para ordenar un arreglo de números en orden ascendente.",
        Difficulty: "Intermedio",
        Category: "Matematicas",
        Type: "Ejercicio"

    },
    {
        Title: "Encontrar Ciclos en un Grafo",
        Description: "Kata para encontrar ciclos en un grafo no dirigido.",
        Difficulty: "Difícil",
        Category: "Matematicas, estrucura",
        Type: "Ejercicio"

    }
];
  expect(resultado).toEqual(kataEsperada);
});