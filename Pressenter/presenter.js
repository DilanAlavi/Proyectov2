import CatalogList from '../src/Kata.js';
import catalogData from '../Data/catalogData.js';
import { BusquedaDeCatalogos } from './presenter_BusquedaGlobal.js';
import { CatalogoOrdenadoPorDificultad, OrdenarKatas } from './presenter_OrdenarKatas.js';
import { CargarKata, mostrarFormularioKata,GuardarFormularioKata } from './presenter_CargarKata.js';
import { RegistrarUsuario, IniciarSesionUsuario, CerrarSesion} from './presenter_Usuario.js';

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
const CursosButton = document.getElementById("cursosButton");


// Eventos; Cargamos todos los Datos a la UI
window.onload = () => {
    CargarKata(catalogData);
    searchButton.addEventListener("click", BusquedaDeCatalogos);
    sortSelect.addEventListener("change", OrdenarKatas);
    sortDifficultySelect.addEventListener("change", CatalogoOrdenadoPorDificultad);
    createKataButton.addEventListener("click", mostrarFormularioKata);
    saveKataButton.addEventListener("click",GuardarFormularioKata);
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (usuarioActual) {
        // Muestra el nombre del usuario en algún elemento HTML
        const nombreUsuarioElement = document.getElementById('nombreUsuario');
        nombreUsuarioElement.textContent = `¡Hola, ${usuarioActual.username}!`;
                // Ocultar botones de crear cuenta y registrarse si el usuario está autenticado
        CrearCuentaButton.style.display = 'none';
        RegistarButton.style.display = 'none';
        cerrarSesionButton.style.display='block';
        CursosButton.style.display='block';
    }
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

    cerrarSesionButton.addEventListener("click", () => {
        // Llamar a la función CerrarSesion
        CerrarSesion();
        // Ocultar botón de cerrar sesión y mostrar botones de crear cuenta y registrarse
        cerrarSesionButton.style.display = 'none';
        CrearCuentaButton.style.display = 'block';
        RegistarButton.style.display = 'block';
        // Limpiar el nombre de usuario en algún elemento HTML
        nombreUsuarioElement.textContent = '';
        window.location.reload();
    });
};