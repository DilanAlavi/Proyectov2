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
    
    it('debería mostrar los datos del curso', () => {
      cy.contains('Cursos').should('be.visible').click();
      cy.get('.curso-item').should('have.length.greaterThan', 0);
    });

    it('debería mostrar un mensaje al agregar un curso', () => {
      cy.contains('Cursos').should('be.visible').click();
      cy.get('.curso-item').should('have.length.greaterThan', 0);

    // Intercepta la función de alerta y verifica el mensaje
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Curso añadido exitosamente.');
    });

      cy.contains('Añadir Curso').should('be.visible').click();
    });

    it('debería alternar los botones de añadir y salir', () => {
      cy.contains('Cursos').should('be.visible').click();
      cy.get('.curso-item').should('have.length.greaterThan', 0);
 
      cy.get('.anadir-button').first().click();
      cy.get('.salir-button').first().should('be.visible').click();
      cy.get('.anadir-button').should('be.visible');
    }); 
  });
