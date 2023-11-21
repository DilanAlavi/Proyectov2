import { BusquedaGlobal} from '../src/Busqueda.js';
import catalogData from '../Data/catalogData.js'; 

test('BusquedaGlobal no encuentra resultados', () => {
    expect(() => BusquedaGlobal(catalogData, "Inexistente")).toThrow("No se encontraron resultados"); 
  });
  test('BusquedaGlobal encuentra resultados por título', () => {
    const result = BusquedaGlobal(catalogData, "CalcularMCD");
    expect(result).toHaveLength(1); 
    expect(result[0].Title).toBe("CalcularMCD"); 
  });
  
  test('BusquedaGlobal encuentra resultados por descripción', () => {
    const result = BusquedaGlobal(catalogData, "ordenar un arreglo de números");
    expect(result).toHaveLength(1); 
    expect(result[0].Title).toBe("Ordenar Arreglos"); 
  });
  
  test('BusquedaGlobal no encuentra resultados', () => {
    expect(() => BusquedaGlobal(catalogData, "Inexistente")).toThrow("No se encontraron resultados"); 
  });
  describe("BusquedaGlobal", () => {
    it("debería buscar características en el catálogo por categoría", () => {
      const query = "Matematicas";
      const resultado = BusquedaGlobal(catalogData, query);
      const catalogosEncontrados = resultado.filter(catalogo => catalogo.Category.toLowerCase().includes(query.toLowerCase()));
    
      expect(catalogosEncontrados).toHaveLength(6); 
      expect(catalogosEncontrados[0].Title).toBe("Buscar Primos");
      expect(catalogosEncontrados[1].Title).toBe("Encontrar Raíces Cuadradas");
      expect(catalogosEncontrados[2].Title).toBe("Encontrar el Mínimo Común Múltiplo");
      expect(catalogosEncontrados[3].Title).toBe("CalcularMCD");
      expect(catalogosEncontrados[4].Title).toBe("Ordenar Arreglos");
      expect(catalogosEncontrados[5].Title).toBe("Encontrar Ciclos en un Grafo");
   
    });
  
    it("debería buscar características en el catálogo por título", () => {
      const query = "CalcularMCD";
      const resultado = BusquedaGlobal(catalogData, query);
      const catalogosEncontrados = resultado.filter(catalogo => catalogo.Title.toLowerCase().includes(query.toLowerCase()));
    
      expect(catalogosEncontrados).toHaveLength(1);
      expect(catalogosEncontrados[0].Title).toBe("CalcularMCD");
    });
  });
  
