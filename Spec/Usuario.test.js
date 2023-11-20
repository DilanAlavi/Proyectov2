// Usuario.test.js
import {FiltrarUsuarios, AgregarUsuario, BuscarUsuario, RegistroDeUsuario, validarCredenciales, IniciarSesion,simulacionDeAlmacenamientoLocal, simulacionDeAlerta } from '../src/Usuario.js';
const NuevoUserData = [
    { username: 'usuario1', password: 'clave1' },
    { username: 'usuario2', password: 'clave2' },
  ];
  test('FiltrarUsuarios debería devolver un array filtrado correctamente', () => {
    const NuevoUsuario = { username: 'usuario1' };
    const result = FiltrarUsuarios(NuevoUserData, NuevoUsuario);
    expect(result).toEqual([{ username: 'usuario1', password: 'clave1' }]);
  });
  test('AgregarUsuario debería agregar un nuevo usuario si no está en uso', () => {
    const UserDataCopy = [...NuevoUserData];
    const NuevoUsuario = { username: 'nuevoUsuario', password: 'nuevaClave' };
    AgregarUsuario(UserDataCopy, NuevoUsuario, []);
    expect(UserDataCopy).toEqual([...NuevoUserData, NuevoUsuario]);
  });
  
  test('AgregarUsuario debería lanzar un error si el nombre de usuario ya está en uso', () => {
    const UserDataCopy = [...NuevoUserData];
    const NuevoUsuario = { username: 'usuario1', password: 'nuevaClave' };
    expect(() => AgregarUsuario(UserDataCopy, NuevoUsuario, NuevoUserData)).toThrowError(
      'El nombre de usuario ya está en uso.'
    );
    
  });

  test('RegistroDeUsuario debería registrar un nuevo usuario con éxito', () => {
    const NuevoUsuario = { username: 'nuevoUsuario', password: 'nuevaClave' };
    const simulacionLocal = simulacionDeAlmacenamientoLocal();
    const MensajAlerta = simulacionDeAlerta();
    global.localStorage = simulacionLocal;
    global.alert = MensajAlerta;
    RegistroDeUsuario(NuevoUserData, NuevoUsuario);
    expect(simulacionLocal.setItem).toHaveBeenCalledWith('usuarioActual', JSON.stringify(NuevoUsuario));
    expect(MensajAlerta).toHaveBeenCalledWith('Usuario registrado con éxito');
  });
  test('RegistroDeUsuario debería lanzar un error si no se completan todos los campos', () => {
    const NuevoUsuario = { username: 'nuevoUsuario' };
    const MensajAlerta = simulacionDeAlerta();
    global.alert = MensajAlerta;
    RegistroDeUsuario(NuevoUserData, NuevoUsuario);
    expect(MensajAlerta).toHaveBeenCalledWith('Por favor, complete todos los campos.');
  }); 
  test('validarCredenciales debería lanzar un error si no se completan todos los campos', () => {
    const credenciales = { username: 'usuario1' };
    expect(() => validarCredenciales(credenciales)).toThrowError(
      'Por favor, complete todos los campos.'
    );
  }); 
  test('BuscarUsuario debería devolver el usuario correcto', () => {
    const credenciales = { username: 'usuario1', password: 'clave1' };
    const result = BuscarUsuario(NuevoUserData, credenciales);
    expect(result).toEqual({ username: 'usuario1', password: 'clave1' });
  }); 
  test('Deberia Retornar ', () => {
    const credenciales = { username: 'usuario1', password: 'clave1' };
    const result = BuscarUsuario(NuevoUserData, credenciales);
    expect(result).toEqual({ username: 'usuario1', password: 'clave1' });
  }); 
  test('IniciarSesion debería lanzar un error en caso de nombre de usuario o contraseña incorrectos', () => {
    const credenciales = { username: 'usuarioNoExistente', password: 'claveIncorrecta' };
    const simulacionLocal = simulacionDeAlmacenamientoLocal();
    const MensajAlerta = simulacionDeAlerta();
    global.localStorage = simulacionLocal;
    global.alert = MensajAlerta;
    jest.spyOn(require('../src/Usuario.js'), 'BuscarUsuario').mockReturnValue(null);
    IniciarSesion(NuevoUserData, credenciales);
    expect(simulacionLocal.setItem).not.toHaveBeenCalled();
    expect(MensajAlerta).toHaveBeenCalledWith('Error: Nombre de usuario o contraseña incorrectos');
    jest.restoreAllMocks();
  });
  test('Inicio de Sesion debería registrar un nuevo usuario con éxito', () => {
    const nuevoUsuario = { username: 'usuario1', password: 'clave1' };
    const simulacionLocal = simulacionDeAlmacenamientoLocal();
    const MensajAlerta = simulacionDeAlerta();
    global.localStorage = simulacionLocal;
    global.alert = MensajAlerta;
    IniciarSesion(NuevoUserData, nuevoUsuario);
    expect(simulacionLocal.setItem).toHaveBeenCalledWith('usuarioActual', JSON.stringify(nuevoUsuario));
    expect(MensajAlerta).toHaveBeenCalledWith('Inicio de sesión exitoso');
  });
















