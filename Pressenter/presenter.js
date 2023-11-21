import CatalogList from '../src/Kata.js';
import catalogData from '../Data/catalogData.js';
import CursosData from '../Data/CursosData.js';
import { BusquedaDeCatalogos } from './presenter_BusquedaGlobal.js';
import { CatalogoOrdenadoPorDificultad, CatalogoOrdenadoPorTitulo } from './presenter_OrdenarKatas.js';
import { CargarKata, mostrarFormularioKata,GuardarFormularioKata} from './presenter_CargarKata.js';
import { RegistrarUsuario, IniciarSesionUsuario, CerrarSesionUsuario,actualizarVistaConUsuarioAutenticado} from './presenter_Usuario.js';
import { cargarCursos } from './presenter_Cursos.js';
import { LimpairContenedorKatas,MostrarFomrularioInicioSesion,MostrarFormularioResgistro } from './presenter_InterfazHelper.js';

const catalogListInstance = new CatalogList(catalogData);
const BusquedaButton = document.getElementById("search-button");
const OrdenarKataSelec = document.getElementById("sort-select");
const crearKataButton = document.getElementById("create-kata-button");
const GuardarKataButton = document.getElementById("save-kata-button");
const ordenarKataPorDificultad = document.getElementById("sort-difficulty");
const CrearCuentaButton= document.getElementById("crearCuentaButton");
const RegistarButton = document.getElementById("registrarseformButton");
const registrarseButton = document.getElementById("registrarseButton");
const iniciarSesionButton = document.getElementById("iniciarSesionButton");
const cerrarSesionButton = document.getElementById("cerrarSesionButton");
const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
const verCursosButton = document.getElementById("cursosButton");

// Eventos; Cargamos todos los Datos a la UI
window.onload = () => {
    CargarKata(catalogData);
    BusquedaButton.addEventListener("click", BusquedaDeCatalogos);
    OrdenarKataSelec.addEventListener("change", CatalogoOrdenadoPorTitulo);
    ordenarKataPorDificultad.addEventListener("change", CatalogoOrdenadoPorDificultad);
    crearKataButton.addEventListener("click", mostrarFormularioKata);
    GuardarKataButton.addEventListener("click",GuardarFormularioKata);
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