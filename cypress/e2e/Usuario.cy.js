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
});