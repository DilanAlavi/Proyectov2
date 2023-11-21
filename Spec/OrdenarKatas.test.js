import { OrdenarCatalogsPorDificultad, OrdenarCatalogs } from '../src/OrdenarKatas.js';

describe('OrdenarCatalogsPorDificultad', () => {
  it('debería ordenar por dificultad de manera ascendente', () => {
    const catalogData = [
      { Difficulty: 'Difícil' },
      { Difficulty: 'Facil' },
      { Difficulty: 'Intermedio' },
    ];

    OrdenarCatalogsPorDificultad(catalogData, 'asc');

    expect(catalogData).toEqual([
      { Difficulty: 'Facil' },
      { Difficulty: 'Intermedio' },
      { Difficulty: 'Difícil' },
    ]);
  });

  it('debería ordenar por dificultad de manera descendente', () => {
    const catalogData = [
      { Difficulty: 'Difícil' },
      { Difficulty: 'Facil' },
      { Difficulty: 'Intermedio' },
    ];

    OrdenarCatalogsPorDificultad(catalogData, 'desc');

    expect(catalogData).toEqual([
      { Difficulty: 'Difícil' },
      { Difficulty: 'Intermedio' },
      { Difficulty: 'Facil' },
    ]);
  });
});

describe('OrdenarCatalogs', () => {
  it('debería ordenar por título de manera ascendente', () => {
    const dataToSort = [
      { Title: 'C' },
      { Title: 'A' },
      { Title: 'B' },
    ];

    OrdenarCatalogs(dataToSort, 'asc');

    expect(dataToSort).toEqual([
      { Title: 'A' },
      { Title: 'B' },
      { Title: 'C' },
    ]);
  });

  it('debería ordenar por título de manera descendente', () => {
    const dataToSort = [
      { Title: 'C' },
      { Title: 'A' },
      { Title: 'B' },
    ];

    OrdenarCatalogs(dataToSort, 'desc');

    expect(dataToSort).toEqual([
      { Title: 'C' },
      { Title: 'B' },
      { Title: 'A' },
    ]);
  });
});