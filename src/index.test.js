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

it("Debería manejar una búsqueda con coincidencia exacta", () => {
  const catalogList = new CatalogList(catalogData); // Pasa el arreglo de datos al constructor
  const kataName = "ar"; // Nombre exacto de una kata existente


  const resultado = catalogList.searchGlobal(kataName);

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


describe("Pruebas para buscar el título de la Kata (Kata no encontrada)", () => {
  it("Verifica si la función retorna un mensaje cuando la kata no se encuentra", () => {
    const catalogList = new CatalogList(catalogData);
    const kataBuscada = "Kata"; // Nombre de la kata que estás buscando
    const resultado = catalogList.searchGlobal(kataBuscada);

    // Verifica que el resultado sea igual al mensaje de error
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
  });
  describe("searchGlobal", () => {
    it("debería encontrar catálogos con dificultad 'Difícil'", () => {
      const catalogList = new CatalogList(catalogData);
      const query = "Difícil";
  
      const resultado = catalogList.searchGlobal(query);
  
      // Comprueba que el resultado contenga catálogos con dificultad 'Facil'
      expect(resultado).toHaveLength(1); // Solo hay un catalogo con dificultad Facil
    });
  });
  describe("searchGlobal", () => {
    it("debería buscar por 'Ejercicio'", () => {
      const catalogList = new CatalogList(catalogData);
      const query = "Ejercicio";
  
      const resultado = catalogList.searchGlobal(query);
  
      // Agrega una afirmación para verificar que se ha realizado una búsqueda por "Ejercicio"
    expect(resultado).toBeDefined(); 
    });
  });