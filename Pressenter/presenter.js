import CatalogList from '../src/Kata.js';
import catalogData from '../Data/catalogData.js';
import CursosData from '../Data/CursosData.js';
import { BusquedaDeCatalogos } from './presenter_BusquedaGlobal.js';
import { CatalogoOrdenadoPorDificultad, OrdenarKatas } from './presenter_OrdenarKatas.js';
import { CargarKata, mostrarFormularioKata,GuardarFormularioKata} from './presenter_CargarKata.js';
import { RegistrarUsuario, IniciarSesionUsuario, CerrarSesionUsuario,actualizarVistaConUsuarioAutenticado} from './presenter_Usuario.js';
import { cargarCursos } from './presenter_Cursos.js';
import { LimpairContenedorKatas,MostrarFomrularioInicioSesion,MostrarFormularioResgistro } from './presenter_InterfazHelper.js';

const catalogListInstance = new CatalogList(catalogData);
const catalogContainer = document.getElementById("catalog-container");
const searchButton = document.getElementById("search-button");
const sortSelect = document.getElementById("sort-select");
const createKataButton = document.getElementById("create-kata-button");
const createKataForm = document.getElementById("create-kata-form");
const saveKataButton = document.getElementById("save-kata-button");
const sortDifficultySelect = document.getElementById("sort-difficulty");
const CrearCuentaButton= document.getElementById("crearCuentaButton");
const RegistarButton = document.getElementById("registrarseformButton");
const registroForm = document.getElementById("registroForm");
const loginForm = document.getElementById("loginForm");
const registrarseButton = document.getElementById("registrarseButton");
const iniciarSesionButton = document.getElementById("iniciarSesionButton");
const cerrarSesionButton = document.getElementById("cerrarSesionButton");
const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
const cursoContainer = document.getElementById("curso-container");
const verCursosButton = document.getElementById("cursosButton");
const buttonAñadirCursos = document.getElementById("anadir-button");


// Eventos; Cargamos todos los Datos a la UI
window.onload = () => {
    CargarKata(catalogData);
    searchButton.addEventListener("click", BusquedaDeCatalogos);
    sortSelect.addEventListener("change", OrdenarKatas);
    sortDifficultySelect.addEventListener("change", CatalogoOrdenadoPorDificultad);
    createKataButton.addEventListener("click", mostrarFormularioKata);
    saveKataButton.addEventListener("click",GuardarFormularioKata);
    actualizarVistaConUsuarioAutenticado(usuarioActual);
    CrearCuentaButton.addEventListener("click", MostrarFomrularioInicioSesion);
    RegistarButton.addEventListener("click", MostrarFormularioResgistro);
    registrarseButton.addEventListener("click",RegistrarUsuario)
    iniciarSesionButton.addEventListener("click",  IniciarSesionUsuario)
    cerrarSesionButton.addEventListener("click",CerrarSesionUsuario);
    verCursosButton.addEventListener("click", () => {
        LimpairContenedorKatas();
        document.getElementById("curso-container").style.display = "block";
         cargarCursos(CursosData);
        });
   
};