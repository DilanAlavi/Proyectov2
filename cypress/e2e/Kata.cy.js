describe('Cargar Katas', () => {
    it('Verifica que cargue los Datos', () => {
      cy.visit('index.html');
      cy.get('.catalog-item').should('have.length.greaterThan', 0);
    });
  });