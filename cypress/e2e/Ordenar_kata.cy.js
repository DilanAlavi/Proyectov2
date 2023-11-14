describe('Pruebas de Ordenamiento por titulo', () => {
    it('Ordena catálogos en orden ascendente', () => {
      cy.visit("index.html")
      cy.get('#sort-select').select('asc');
      cy.get('#sort-select').should('have.value', 'asc');
      // Espera a que el primer elemento .catalog-item esté presente
      cy.get('.catalog-item:first').should('exist');
      cy.get('.catalog-item:first .Title').should('have.text', 'CalcularMCD');
    });
    it('Ordena catálogos en orden descendente', () => {
        cy.visit("index.html")
        cy.get('#sort-select').select('desc');
        cy.get('#sort-select').should('have.value', 'desc');
        // Espera a que el primer elemento .catalog-item esté presente
        cy.get('.catalog-item:first').should('exist');
        cy.get('.catalog-item:first .Title').should('have.text', 'Ordenar Arreglos');
      });
      
  });
  describe('Pruebas de Ordenamiento por dificultad', () => {
    it('Ordena catálogos en orden descendente', () => {
      cy.visit("index.html")
      cy.get('#sort-difficulty').select('desc');
      cy.get('#sort-difficulty').should('have.value', 'desc');
      // Espera a que el primer elemento .catalog-item esté presente
      cy.get('.catalog-item:first').should('exist');
      cy.get('.catalog-item:first .Title').should('have.text', 'Encontrar Ciclos en un Grafo');
    });
});