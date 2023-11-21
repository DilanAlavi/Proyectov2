describe('Mostrar catalogo de Cursos', () => {
    beforeEach(() => {
      cy.visit('index.html');
      cy.url().should('include', 'index.html');
      cy.get('#crearCuentaButton').click();
      cy.get('#nombreRegistro').type('NuevoUsuario');
      cy.get('#correoRegistro').type('nuevo_usuario@example.com');
      cy.get('#contrasenaRegistro').type('contrasena123');
      cy.get('#registrarseButton').click();
      cy.wait(1000); 
    });

    it('Verifica que cargue los Datos de las Katas', () => {
      cy.contains('Cursos').should('be.visible').click();
      cy.get('.curso-item').should('have.length.greaterThan', 0);
    });
  });
