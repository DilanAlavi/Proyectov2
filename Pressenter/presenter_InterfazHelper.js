const catalogContainer = document.getElementById("catalog-container");
export function LimpairContenedorKatas(){
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
}
export function MostrarFomrularioInicioSesion()
{
    LimpairContenedorKatas();
    catalogContainer.innerHTML = '';
    document.getElementById("registroForm").style.display = 'block'; // Oculta el formulario de registro
    document.getElementById("loginForm").style.display = 'none';
}
export function MostrarFormularioResgistro()
{
    LimpairContenedorKatas();
    catalogContainer.innerHTML = '';
    document.getElementById("registroForm").style.display = 'none'; // Oculta el formulario de registro
    document.getElementById("loginForm").style.display = 'block';
}
export function ajustarInterfazCerrarSesion ()
{
        // Ocultar botón de cerrar sesión y mostrar botones de crear cuenta y registrarse
        document.getElementById("cerrarSesionButton").style.display = 'none';
        document.getElementById("crearCuentaButton").style.display = 'block';
        document.getElementById("registrarseformButton").style.display = 'block';
}
export function ajustarInterfazUsuarioAutenticado()
{
    // Ocultar botones de crear cuenta y registrarse si el usuario está autenticado
    document.getElementById("crearCuentaButton").style.display = 'none';
    document.getElementById("registrarseformButton").style.display = 'none';
    document.getElementById("cerrarSesionButton").style.display='block';
    document.getElementById("cursosButton").style.display='block';

}