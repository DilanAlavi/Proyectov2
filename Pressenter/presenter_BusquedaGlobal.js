import { BusquedaGlobal } from '../src/Busqueda.js';
import { CargarKata } from './presenter_CargarKata.js';
import catalogData from '../Data/catalogData.js';


const campoDeBúsqueda = document.getElementById("search-input");


export function BusquedaDeCatalogos() {
    const nombreDeBúsqueda = campoDeBúsqueda.value.trim();
    if (nombreDeBúsqueda === '') {
        alert("Ingrese datos para la búsqueda");
        return;
    }
    try {
        const resultadoDeBúsqueda = BusquedaGlobal(catalogData, nombreDeBúsqueda);
        if (resultadoDeBúsqueda.length === 0) {
            alert("No se encontraron resultados");
        } else {
            CargarKata(resultadoDeBúsqueda);
        }
    } catch (error) {
        alert(error.message);
    }
}