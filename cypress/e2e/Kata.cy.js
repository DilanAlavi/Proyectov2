describe('Cargar Katas', () => {
    it('Verifica que cargue los Datos', () => {
      cy.visit('index.html');
      cy.get('.catalog-item').should('have.length.greaterThan', 0);
    });
  });
  describe('Editar Kata', () => {
    it('Verifica que se edite una Kata existente', () => {
      cy.visit('index.html');
      // Encuentra y hace clic en el botón de editar de la primera Kata
      cy.get('.catalog-item').first().find('.edit-button').click();
      // Modifica el título de la Kata
      cy.get('#kata-title').clear().type('Kata Editada');
      cy.get('#save-kata-button').click();
      // Verifica que la Kata editada se muestre en el contenedor de Katas
      cy.get('.catalog-item').contains('Kata Editada');
    });
  });
  describe('Crear Nueva Kata', () => {
    it('debería crear una nueva Kata', () => {
      cy.visit('index.html');
      cy.get('#create-kata-button').click();
  
      // Completa el formulario de creación de Kata
      cy.get('#kata-title').type('Nueva Kata');
      cy.get('#kata-description').type('Descripción de la nueva Kata');
      cy.get('#kata-difficulty').select('Facil');
      cy.get('#kata-category').type('Nueva Categoría');
      cy.get('#kata-type').select('Ejercicio');
      cy.get('#save-kata-button').click();
  
      // Verifica que la nueva Kata se muestre en el contenedor de Katas
      cy.get('.catalog-item').contains('Nueva Kata');
    });
  });