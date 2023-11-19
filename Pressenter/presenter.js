import CatalogList from '../src/Kata.js';
import catalogData from '../src/catalogData.js';
import { BusquedaDeCatalogos} from './presenter_BusquedaGlobal.js';
import { sortCatalogsByDifficulty,OrdenarKatas } from './presenter_OrdenarKatas.js';
import { CargarKata, CrearNUevaKata } from './presenter_CargarKata.js';

const catalogListInstance = new CatalogList(catalogData);
const catalogContainer = document.getElementById("catalog-container");
const searchButton = document.getElementById("search-button");
const sortSelect = document.getElementById("sort-select");
const createKataButton = document.getElementById("create-kata-button");
const createKataForm = document.getElementById("create-kata-form");
const saveKataButton = document.getElementById("save-kata-button");
const sortDifficultySelect = document.getElementById("sort-difficulty");
// Eventos; Cargamos todos los Datos para las Katas a la UI
// Función para verificar si el usuario puede realizar acciones de kata
function puedeRealizarAccionesKata() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    // Agrega aquí lógica adicional según tus requisitos, por ejemplo, verifica roles o permisos
    return usuarioActual !== null;
}
window.onload = () => {
    CargarKata(catalogData);
    searchButton.addEventListener("click", BusquedaDeCatalogos);
    sortSelect.addEventListener("change", OrdenarKatas);
    sortDifficultySelect.addEventListener("change", sortCatalogsByDifficulty);
    createKataButton.addEventListener("click", () => {
        catalogContainer.innerHTML = '';
        createKataForm.style.display = "block";
    });
    saveKataButton.addEventListener("click", CrearNUevaKata);
};