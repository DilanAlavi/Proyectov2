describe('Pruebas de Registro de Usuario', () => {
    it('Debería registrar un nuevo usuario correctamente', () => {
      cy.visit('index.html');
      cy.get('#registrarseformButton').click();
      cy.get('#registroForm').invoke('show');
      cy.get('#nombreRegistro').type('NuevoUsuario');
      cy.get('#correoRegistro').type('nuevo.usuario@example.com');
      cy.get('#contrasenaRegistro').type('NuevaClave');
      cy.get('#registrarseButton').click();
      cy.contains('#nombreUsuario', 'NuevoUsuario');
    });
    it('Debería mostrar mensaje de Error si no se completa los campos', () => {
        cy.visit('index.html');
        cy.get('#registrarseformButton').click();
        cy.get('#registroForm').invoke('show');
        cy.get('#registrarseButton').click();
        cy.on('window:alert', (message) => {
          expect(message).to.include('Por favor, complete todos los campos.');    
        });      
      });

    it('Debería mostrar un mensaje de error si el Nombre de Usuario ya esta en uso', () => {
      cy.visit('index.html');
      cy.get('#registrarseformButton').click();
      cy.get('#registroForm').invoke('show');
      cy.get('#nombreRegistro').type('Dilan@gmail.com');
      cy.get('#correoRegistro').type('nuevo.usuario@example.com');
      cy.get('#contrasenaRegistro').type('NuevaClave');
      cy.get('#registrarseButton').click();
      cy.on('window:alert', (message) => {
        expect(message).to.include('El nombre de usuario ya está en uso.');

      });
});
});
describe('Pruebas de Iniciar Sesión', () => {
  it('Debería iniciar sesión con un usuario registrado', () => {
      cy.visit('/');
      cy.get('#loginForm').invoke('show');
      cy.get('#iniciarSesionButton').click();
      cy.get('#nombreloggin').type('Dilan@gmail.com');
      cy.get('#contrasena').type('333');
      cy.get('#iniciarSesionButton').click();
      cy.contains('#nombreUsuario', 'Dilan@gmail.com');
    }); 
    it('Deberia mostrar un  mensaje de Error, si engreso mal los datos al Iniciar Sesion', () => {
      cy.visit('/'); 
      cy.get('#loginForm').invoke('show');
      cy.get('#nombreloggin').type('Dilan@gmail.com');
      cy.get('#contrasena').type('222');
      cy.get('#iniciarSesionButton').click();
      cy.on('window:alert', (message) => {
        expect(message).to.include('Nombre de usuario o contraseña incorrectos');

      });
  });
});