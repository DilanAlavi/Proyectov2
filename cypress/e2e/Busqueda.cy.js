describe('Búsqueda Global', function() {

    it('Debería mostrar resultados de búsqueda correctos', () => {
            // Abre la página en Cypress
      cy.visit('index.html');
      const searchTerm = 'Ordenar Arreglos';
      cy.get('#search-input').type(searchTerm);
      cy.get('#search-button').click();
      cy.get('.catalog-item').should('have.length', 1);
      cy.contains('.Title', searchTerm);
    });
});