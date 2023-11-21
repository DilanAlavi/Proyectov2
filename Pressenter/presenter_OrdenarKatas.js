import { CargarKata } from './presenter_CargarKata.js';
import { OrdenarCatalogsPorDificultad } from "../src/OrdenarKatas";
import {OrdenarCatalogsPorTitulo} from '../src/OrdenarKatas.js';
import catalogData from '../Data/catalogData.js';

const seleccionarPorDificultad = document.getElementById("sort-difficulty");
const seleccionarOrden = document.getElementById("sort-select");


export function CatalogoOrdenadoPorDificultad() {
    OrdenarCatalogsPorDificultad(catalogData, seleccionarPorDificultad.value);
    CargarKata(catalogData);
}
export function CatalogoOrdenadoPorTitulo()
{
    const valorDeOrdenamiento = seleccionarOrden.value;
        if (valorDeOrdenamiento === "asc" || valorDeOrdenamiento === "desc") {
            OrdenarCatalogsPorTitulo(catalogData, valorDeOrdenamiento);
            CargarKata(catalogData);
        }
}