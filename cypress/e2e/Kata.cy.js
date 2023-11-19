describe('Cargar, Editar, Crear y Eliminar Katas', () => {
  beforeEach(() => {
    // Asegurémonos de estar en la página principal (index.html)
    cy.visit('index.html');
    cy.url().should('include', 'index.html');

    // Realizar el registro
    cy.get('#crearCuentaButton').click();
    cy.get('#nombreRegistro').type('NuevoUsuario');
    cy.get('#correoRegistro').type('nuevo_usuario@example.com');
    cy.get('#contrasenaRegistro').type('contrasena123');
    cy.get('#registrarseButton').click();
    cy.wait(1000); // Ajustar el tiempo de espera si es necesario
  });

  it('Verifica que cargue los Datos de las Katas', () => {
    cy.get('.catalog-item').should('have.length.greaterThan', 0);
  });

  it('Verifica que se edite una Kata existente', () => {
    cy.get('.catalog-item').first().find('.edit-button').click();
    cy.get('#kata-title').clear().type('Kata Editada').as('editedKataTitle');
    cy.get('#save-kata-button').click();
    
    // Esperar a que se reflejen los cambios y luego verificar
    cy.get('@editedKataTitle').should('exist');    

  });

  it('Debería crear una nueva Kata', () => {
    cy.get('#create-kata-button').click();
    cy.get('#kata-title').type('Nueva Kata');
    cy.get('#kata-description').type('Descripción de la nueva Kata');
    cy.get('#kata-difficulty').select('Facil');
    cy.get('#kata-category').type('Nueva Categoría');
    cy.get('#kata-type').select('Ejercicio');
    cy.get('#save-kata-button').click();
    cy.get('.catalog-item').contains('Nueva Kata');
  });

  it('Debería eliminar una Kata existente', () => {
    cy.get('.catalog-item').first().find('.delete-button').click();
    cy.get('.catalog-item').should('not.contain', 'Kata Editada');
  });
});