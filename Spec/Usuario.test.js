// Usuario.test.js
import { crearUsuario } from "../src/Usuario";

test('crearUsuario devuelve mensaje de éxito', () => {
  const resultado = crearUsuario("Ejemplo Usuario", "ejemplo@dominio.com", "contrasena123");
  expect(resultado).toBe("Usuario Registrado con Exito");
});