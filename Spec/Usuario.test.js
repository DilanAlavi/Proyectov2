// Usuario.test.js
import { crearUsuario,FiltrarUsuarios, AgregarUsuario, BuscarUsuario,validarCredenciales, RegistroDeUsuario } from "../src/Usuario";
const mockUserData = [
    { username: 'usuario1', password: 'clave1' },
    { username: 'usuario2', password: 'clave2' },
  ];

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

  test('validarCredenciales debería lanzar un error si no se completan todos los campos', () => {
    const mockCredentials = { username: 'usuario1' };
    expect(() => validarCredenciales(mockCredentials)).toThrowError(
      'Por favor, complete todos los campos.'
    );
  }); 
  test('RegistroDeUsuario debería registrar un nuevo usuario con éxito', () => {
    const mockNewUser = { username: 'nuevoUsuario', password: 'nuevaClave' };
    const localStorageMock = mockLocalStorage();
    const alertMock = mockAlert();
    global.localStorage = localStorageMock;
    global.alert = alertMock;
    RegistroDeUsuario(mockUserData, mockNewUser);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('usuarioActual', JSON.stringify(mockNewUser));
    expect(alertMock).toHaveBeenCalledWith('Usuario registrado con éxito');
  });
  function mockLocalStorage() {
    return {
      setItem: jest.fn(),
    };
  }
  function mockAlert() {
    return jest.fn();
  }