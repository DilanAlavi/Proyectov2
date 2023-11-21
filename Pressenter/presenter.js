import CatalogList from '../src/Kata.js';
import catalogData from '../Data/catalogData.js';
import CursosData from '../Data/CursosData.js';
import { BusquedaDeCatalogos } from './presenter_BusquedaGlobal.js';
import { CatalogoOrdenadoPorDificultad, OrdenarKatas } from './presenter_OrdenarKatas.js';
import { CargarKata, mostrarFormularioKata,GuardarFormularioKata } from './presenter_CargarKata.js';
import { RegistrarUsuario, IniciarSesionUsuario, UsuarioCerrarSesion,actualizarVistaConUsuarioAutenticado} from './presenter_Usuario.js';
import { cargarCursos } from './presenter_Cursos.js';

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

    // Mostrar el formulario de registro al hacer clic en el botón correspondiente
    CrearCuentaButton.addEventListener("click", () => {
        catalogContainer.innerHTML = '';
        registroForm.style.display = 'block';
        loginForm.style.display = 'none'; // Oculta el formulario de inicio de sesión
    });
    // Mostrar el formulario de inicio de sesión al hacer clic en el botón correspondiente
    RegistarButton.addEventListener("click", () => {
        catalogContainer.innerHTML = '';
        registroForm.style.display = 'none'; // Oculta el formulario de registro
        loginForm.style.display = 'block';
   });
    registrarseButton.addEventListener("click",RegistrarUsuario)
   iniciarSesionButton.addEventListener("click",  IniciarSesionUsuario)
    cerrarSesionButton.addEventListener("click",UsuarioCerrarSesion);
    verCursosButton.addEventListener("click", () => {
     // Limpiar el contenedor
     document.getElementById("search-container").style.display = "none";
     document.getElementById("sort-select").style.display = "none";
     document.getElementById("sort-difficulty").style.display = "none";
     document.getElementById("create-kata-button").style.display = "none";
     document.getElementById("create-kata-form").style.display = "none";
     document.getElementById("catalog-container").style.display = "none";
     document.getElementById("sort-select").style.display = "none";
     document.getElementById("sort-difficulty").style.display = "none";
     document.getElementById("sort-select1").style.display = "none";
     document.getElementById("sort-difficulty1").style.display = "none";
     
        document.getElementById("curso-container").style.display = "block";
         // Cargar y mostrar los cursos
         cargarCursos(CursosData);
   
        });
   
};