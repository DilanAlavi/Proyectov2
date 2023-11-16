export function crearUsuario(nombre, correo, contraseña) {
    return "Usuario Registrado con Exito";
}
export function FiltrarUsuarios(userData, newUser) {
    const { username } = newUser;
    return userData.filter(usuario => usuario.username === username);
}