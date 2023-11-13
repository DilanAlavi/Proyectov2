import { BusquedaGlobal} from '../src/Busqueda.js';
import catalogData from '../src/catalogData.js'; // Importa el arreglo de datos
// Prueba para una consulta que no encuentra resultados
test('BusquedaGlobal no encuentra resultados', () => {
    expect(() => BusquedaGlobal(catalogData, "Inexistente")).toThrow("No se encontraron resultados"); // Debería lanzar una excepción
  });
  test('BusquedaGlobal encuentra resultados por título', () => {
    const result = BusquedaGlobal(catalogData, "CalcularMCD");
    expect(result).toHaveLength(1); // Debería encontrar un resultado
    expect(result[0].Title).toBe("CalcularMCD"); // El resultado debería ser "CalcularMCD"
  });
  
  test('BusquedaGlobal encuentra resultados por descripción', () => {
    const result = BusquedaGlobal(catalogData, "ordenar un arreglo de números");
    expect(result).toHaveLength(1); // Debería encontrar un resultado
    expect(result[0].Title).toBe("Ordenar Arreglos"); // El resultado debería ser "Ordenar Arreglos"
  });
  
  test('BusquedaGlobal no encuentra resultados', () => {
    expect(() => BusquedaGlobal(catalogData, "Inexistente")).toThrow("No se encontraron resultados"); // Debería lanzar una excepción
  });
  describe("BusquedaGlobal", () => {
    it("debería buscar características en el catálogo por categoría", () => {
      const query = "Matematicas";
    
      const resultado = BusquedaGlobal(catalogData, query);
    
      // Comprueba que el resultado contenga catálogos con 'Matematicas' en la categoría
      const catalogosEncontrados = resultado.filter(catalogo => catalogo.Category.toLowerCase().includes(query.toLowerCase()));
    
      expect(catalogosEncontrados).toHaveLength(3); // Debería haber 2 catálogos con 'Matematicas' en la categoría
      expect(catalogosEncontrados[0].Title).toBe("CalcularMCD");
      expect(catalogosEncontrados[1].Title).toBe("Ordenar Arreglos");
    });
  
    it("debería buscar características en el catálogo por título", () => {
      const query = "CalcularMCD";
    
      const resultado = BusquedaGlobal(catalogData, query);
    
      // Comprueba que el resultado contenga catálogos con 'CalcularMCD' en el título
      const catalogosEncontrados = resultado.filter(catalogo => catalogo.Title.toLowerCase().includes(query.toLowerCase()));
    
      expect(catalogosEncontrados).toHaveLength(1); // Debería haber 1 catálogo con 'CalcularMCD' en el título
      expect(catalogosEncontrados[0].Title).toBe("CalcularMCD");
    });
  });
  

  