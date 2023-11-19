// presenter_Usuario.js
import { RegistroDeUsuario, IniciarSesion } from '../src/Usuario.js';
import userData from '../Data/userData.js';
const usernameInput = document.getElementById("nombreRegistro"); // Cambiado para coincidir con el HTML
const passwordInput = document.getElementById("contrasenaRegistro"); // Cambiado para coincidir con el HTML
const usernameInputLogin = document.getElementById("nombreloggin"); // Cambiado para coincidir con el HTML
const passwordInputLogin = document.getElementById("contrasena"); 
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
}