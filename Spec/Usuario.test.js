// Usuario.test.js
import { crearUsuario,FiltrarUsuarios, AgregarUsuario, BuscarUsuario } from "../src/Usuario";
const mockUserData = [
    { username: 'usuario1', password: 'clave1' },
    { username: 'usuario2', password: 'clave2' },
  ];
test('Se verifica si al Registrarse devuelve mensaje de éxito', () => {
  const resultado = crearUsuario("Ejemplo Usuario", "ejemplo@dominio.com", "contrasena123");
  expect(resultado).toBe("Usuario Registrado con Exito");
});
test('FiltrarUsuarios debería devolver un array filtrado correctamente', () => {
    const mockNewUser = { username: 'usuario1' };
    const result = FiltrarUsuarios(mockUserData, mockNewUser);
    expect(result).toEqual([{ username: 'usuario1', password: 'clave1' }]);
  });
test('AgregarUsuario debería agregar un nuevo usuario si no está en uso', () => {
  const mockUserDataCopy = [...mockUserData];
  const mockNewUser = { username: 'nuevoUsuario', password: 'nuevaClave' };
  AgregarUsuario(mockUserDataCopy, mockNewUser, []);
  expect(mockUserDataCopy).toEqual([...mockUserData, mockNewUser]);
});
test('AgregarUsuario debería lanzar un error si el nombre de usuario ya está en uso', () => {
    const mockUserDataCopy = [...mockUserData];
    const mockNewUser = { username: 'usuario1', password: 'nuevaClave' };
    expect(() => AgregarUsuario(mockUserDataCopy, mockNewUser, mockUserData)).toThrowError(
      'El nombre de usuario ya está en uso.'
    );

  });
  test('BuscarUsuario debería devolver el usuario correcto', () => {
    const mockCredentials = { username: 'usuario1', password: 'clave1' };
    const result = BuscarUsuario(mockUserData, mockCredentials);
    expect(result).toEqual({ username: 'usuario1', password: 'clave1' });
  }); 
