export function RegistroDeUsuario(userData, newUser) {
    try {
        if (!newUser.username || !newUser.password) {
            throw new Error("Por favor, complete todos los campos.");
        }
        const usuariosFiltrados = FiltrarUsuarios(userData, newUser);
        AgregarUsuario(userData, newUser, usuariosFiltrados);
        
        // Buscar al usuario recién registrado para obtener su información
        const usuarioEncontrado = BuscarUsuario(userData, newUser);

        // Almacena la información del usuario en localStorage
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));

        alert("Usuario registrado con éxito");
        window.location.href = 'index.html';
    } catch (error) {
        alert(error.message);
    }
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
export function validarCredenciales(credentials) {
    if (!credentials.username || !credentials.password) {
        throw new Error("Por favor, complete todos los campos.");
    }
}
export function BuscarUsuario(userData, credentials) {
    const { username, password } = credentials;
    return userData.find(usuario => usuario.username === username && usuario.password === password);
}

export function LogginUsuario(nombre, password)
{
    if (nombre=="Anonimo1"&&password=="1234")
    {
        return "Bienvenido";
    }
    else{
        return "Ingrese los Datos Nuevamente";
    }
}