import { BusquedaGlobal } from '../src/Busqueda.js';
import { CargarKata } from './presenter_CargarKata.js';
import catalogData from '../Data/catalogData.js';


const searchInput = document.getElementById("search-input");


export function BusquedaDeCatalogos() {
    const searchName = searchInput.value.trim();
    if (searchName === '') {
        alert("Ingrese datos para la búsqueda");
        return;
    }
    try {
        const searchResult = BusquedaGlobal(catalogData, searchName);
        if (searchResult.length === 0) {
            alert("No se encontraron resultados");
        } else {
            CargarKata(searchResult);
        }
    } catch (error) {
        alert(error.message);
    }
}
