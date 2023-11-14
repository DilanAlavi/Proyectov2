describe('Pruebas de Ordenamiento por titulo', () => {
    it('Ordena catálogos en orden ascendente', () => {
      cy.visit("index.html")
      cy.get('#sort-select').select('asc');
      cy.get('#sort-select').should('have.value', 'asc');
      // Espera a que el primer elemento .catalog-item esté presente
      cy.get('.catalog-item:first').should('exist');
      cy.get('.catalog-item:first .Title').should('have.text', 'CalcularMCD');
    });
  });