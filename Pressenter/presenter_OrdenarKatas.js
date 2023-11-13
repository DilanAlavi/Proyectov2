import { CargarKata } from './presenter_CargarKata.js';
import { OrdenarCatalogsPorDificultad } from "../src/OrdenarKatas";
import {OrdenarCatalogs} from '../src/OrdenarKatas.js';
import catalogData from '../src/catalogData.js';

const sortDifficultySelect = document.getElementById("sort-difficulty");
const sortSelect = document.getElementById("sort-select");
export function sortCatalogsByDifficulty() {
    OrdenarCatalogsPorDificultad(catalogData, sortDifficultySelect.value);
    CargarKata(catalogData);
}
export function OrdenarKatas()
{
    const sortValue = sortSelect.value;
        if (sortValue === "asc" || sortValue === "desc") {
            OrdenarCatalogs(catalogData, sortValue);
            CargarKata(catalogData);
        }
}