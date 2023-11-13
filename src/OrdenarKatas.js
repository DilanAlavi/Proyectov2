
export function OrdenarCatalogsPorDificultad(catalogData, sortValue) {
    const difficultiesOrder = ["Facil", "Intermedio", "Difícil"];
  
    catalogData.sort((a, b) => {
      const difficultyA = a.Difficulty;
      const difficultyB = b.Difficulty;
  
      return sortValue === "asc"
        ? compararDificultadesAscendente(difficultyA, difficultyB, difficultiesOrder)
        : compararDificultadesDescendente(difficultyA, difficultyB, difficultiesOrder);
    });
  }
  
  export function OrdenarCatalogs(dataToSort, order) {
    dataToSort.sort((a, b) => {
      const titleA = a.Title;
      const titleB = b.Title;
  
      return order === "asc" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });
  }
  
  function compararDificultadesAscendente(difficultyA, difficultyB, order) {
    return order.indexOf(difficultyA) - order.indexOf(difficultyB);
  }
  
  function compararDificultadesDescendente(difficultyA, difficultyB, order) {
    return order.indexOf(difficultyB) - order.indexOf(difficultyA);
  }
  