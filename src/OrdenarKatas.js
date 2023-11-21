
export function OrdenarCatalogsPorDificultad(catalogData, seleccionarOrden) {
  const Dificultad = ["Facil", "Intermedio", "Difícil"];

  catalogData.sort((a, b) => {
    const difficultyA = a.Difficulty;
    const difficultyB = b.Difficulty;

    return seleccionarOrden === "asc"
      ? compararDificultadesAscendente(difficultyA, difficultyB, Dificultad)
      : compararDificultadesDescendente(difficultyA, difficultyB, Dificultad);
  });
}

export function OrdenarCatalogsPorTitulo(catalogData, ordernar) {
  catalogData.sort((a, b) => {
    const titleA = a.Title;
    const titleB = b.Title;

    return ordernar === "asc" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });
}

function compararDificultadesAscendente(difficultyA, difficultyB, ordernar) {
  return ordernar.indexOf(difficultyA) - ordernar.indexOf(difficultyB);
}

function compararDificultadesDescendente(difficultyA, difficultyB, ordernar) {
  return ordernar.indexOf(difficultyB) - ordernar.indexOf(difficultyA);
}
