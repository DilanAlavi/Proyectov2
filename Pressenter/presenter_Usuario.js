import { RegistroDeUsuario, IniciarSesion } from '../src/Usuario.js';
import { ajustarInterfazCerrarSesion,ajustarInterfazUsuarioAutenticado } from './presenter_InterfazHelper.js';
import userData from '../Data/userData.js';
const usernameInput = document.getElementById("nombreRegistro"); 
const passwordInput = document.getElementById("contrasenaRegistro"); 
const usernameInputLogin = document.getElementById("nombreloggin"); 
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
    window.location.reload();
}

export function CerrarSesionUsuario(){
    CerrarSesion();
    ajustarInterfazCerrarSesion();
    nombreUsuarioElement.textContent = '';
}

export function actualizarVistaConUsuarioAutenticado(usuarioActual)
{
    if (usuarioActual) {
        const nombreUsuarioElement = document.getElementById('nombreUsuario');
        nombreUsuarioElement.textContent = `¡Bienvenid@, ${usuarioActual.username}!`;
        ajustarInterfazUsuarioAutenticado();
    }
}