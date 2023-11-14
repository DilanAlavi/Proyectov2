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

    it('debería mostrar un mensaje si no hay resultados de búsqueda', () => {
        cy.visit('index.html');
        // Intercepta la función de alerta y verifica el mensaje
        cy.on('window:alert', (message) => {
          expect(message).to.equal('No se encontraron resultados');
        });
        cy.get('#search-input').type('Término Inexistente');
        cy.get('#search-button').click();
      });

      it('debería mostrar un mensaje si no se realiza ningúna busqueda', () => {
        cy.visit('index.html');
        // Simula una búsqueda sin resultados
        cy.get('#search-button').click();
        cy.on('window:alert', (message) => {
          expect(message).to.equal('Ingrese datos para la búsqueda');
        });
        // Espera un breve momento antes de continuar
        cy.wait(500);
      });
});