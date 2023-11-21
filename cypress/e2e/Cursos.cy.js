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

    it('debería mostrar un mensaje si se añadio el Curso', () => {
      cy.contains('Cursos').should('be.visible').click();
      cy.get('.curso-item').should('have.length.greaterThan', 0);
    // Intercepta la función de alerta y verifica el mensaje
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Curso añadido exitosamente.');
    });
    cy.contains('Añadir').should('be.visible').click();
    });   
    it('debería mostrar los botones añadir, despues salir y viceversa', () => {
      cy.contains('Cursos').should('be.visible').click();
      cy.get('.curso-item').should('have.length.greaterThan', 0);
      cy.get('.anadir-button').should('exist').first().click();
      cy.get('.salir-button').should('be.visible').first().click();
      cy.get('.anadir-button').should('be.visible');
    }); 
  });
