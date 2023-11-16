// Usuario.test.js
import { crearUsuario,FiltrarUsuarios } from "../src/Usuario";
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