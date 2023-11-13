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