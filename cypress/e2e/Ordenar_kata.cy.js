describe('Pruebas de Ordenamiento por titulo', () => {
  it('Ordena catálogos en orden ascendente', () => {
    cy.visit("index.html")
    cy.get('#sort-select').select('asc');
    cy.get('#sort-select').should('have.value', 'asc');
    cy.get('.catalog-item:first').should('exist');
    cy.get('.catalog-item:first .Title').should('have.text', 'Buscar Primos');
  });
  it('Ordena catálogos en orden descendente', () => {
      cy.visit("index.html")
      cy.get('#sort-select').select('desc');
      cy.get('#sort-select').should('have.value', 'desc');
      // Espera a que el primer elemento .catalog-item esté presente
      cy.get('.catalog-item:first').should('exist');
      cy.get('.catalog-item:first .Title').should('have.text', 'Validar Palíndromos');
    });
  });
  describe('Pruebas de Ordenamiento por dificultad', () => {
      it('Ordena catálogos en orden descendente', () => {
        cy.visit("index.html")
        cy.get('#sort-difficulty').select('desc');
        cy.get('#sort-difficulty').should('have.value', 'desc');
        cy.get('.catalog-item:first').should('exist');
        cy.get('.catalog-item:first .Title').should('have.text', 'Resolver Sudoku');
      });
      it('Ordena catálogos en orden ascendente', () => {
          cy.visit("index.html")
          cy.get('#sort-difficulty').select('asc');
          cy.get('#sort-difficulty').should('have.value', 'asc');
          cy.get('.catalog-item:first').should('exist');
          cy.get('.catalog-item:first .Title').should('have.text', 'Convertir a Mayúsculas');
        });
      });
      