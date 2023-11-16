export function crearUsuario(nombre, correo, contraseña) {
    return "Usuario Registrado con Exito";
}
export function FiltrarUsuarios(userData, newUser) {
    const { username } = newUser;
    return userData.filter(usuario => usuario.username === username);
}
export function AgregarUsuario(userData, newUser, usuariosFiltrados) {
    if (usuariosFiltrados.length > 0) {
        throw new Error("El nombre de usuario ya está en uso.");
    } else {
        userData.push(newUser);
    }
}