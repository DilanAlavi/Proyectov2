// presenter_Usuario.js
import { RegistroDeUsuario, IniciarSesion } from '../src/Usuario.js';
import userData from '../Data/userData.js';
const usernameInput = document.getElementById("nombreRegistro"); 
const passwordInput = document.getElementById("contrasenaRegistro"); 
const usernameInputLogin = document.getElementById("nombreloggin"); 
const passwordInputLogin = document.getElementById("contrasena"); 
const CursosButton = document.getElementById("cursosButton");
const cerrarSesionButton = document.getElementById("cerrarSesionButton");
const RegistarButton = document.getElementById("registrarseformButton");
const CrearCuentaButton= document.getElementById("crearCuentaButton");
export function RegistrarUsuario() {
    const nuevoUsuario = {
        username: usernameInput.value.trim(),
        password: passwordInput.value.trim()
    };

    RegistroDeUsuario(userData, nuevoUsuario);

}
export function IniciarSesionUsuario() {
    const credencialesUsuario = {
        username: usernameInputLogin.value.trim(),
        password: passwordInputLogin.value.trim()
    };

    IniciarSesion(userData, credencialesUsuario);
}

export function CerrarSesion() {
    localStorage.removeItem('usuarioActual');
    window.location.reload();
}
export function actualizarVistaConUsuarioAutenticado(usuarioActual)
{
    if (usuarioActual) {
        // Muestra el nombre del usuario por HTML
        const nombreUsuarioElement = document.getElementById('nombreUsuario');
        nombreUsuarioElement.textContent = `¡Hola, ${usuarioActual.username}!`;
        // Ocultar botones de crear cuenta y registrarse si el usuario está autenticado
        CrearCuentaButton.style.display = 'none';
        RegistarButton.style.display = 'none';
        cerrarSesionButton.style.display='block';
        CursosButton.style.display='block';
    }
}