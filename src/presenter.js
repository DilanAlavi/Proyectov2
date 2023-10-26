import CatalogList from './index.js';
import catalogData from './catalogData.js';

const catalogListInstance = new CatalogList(catalogData);
const catalogContainer = document.getElementById("catalog-container");
const catalogTemplate = document.getElementById("catalog-template");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const sortDifficultySelect = document.getElementById("sort-difficulty"); // Nuevo select

// Función para renderizar la lista de catálogos
function renderCatalogs(catalogs) {
    catalogContainer.innerHTML = '';
    catalogs.forEach(catalog => {
        const catalogClone = document.importNode(catalogTemplate.content, true);
        catalogClone.querySelector('.Title').textContent = catalog.Title;
        catalogClone.querySelector('.Description').textContent = catalog.Description;
        catalogClone.querySelector('.Difficulty').textContent = catalog.Difficulty;
        catalogClone.querySelector('.Category').textContent = catalog.Category;
        catalogClone.querySelector('.Type').textContent = catalog.Type;
        catalogContainer.appendChild(catalogClone);
    });
}

window.onload = () => {
    catalogListInstance.renderCatalogsToContainer();

    searchButton.addEventListener("click", () => {
        const searchName = searchInput.value.trim();

        if (searchName === '') {
            alert("Ingrese datos para la búsqueda");
        } else {
            try {
                const searchResult = catalogListInstance.searchGlobal(searchName);
                renderCatalogs(searchResult);
            } catch (error) {
                alert(error.message);
            }
        }
    });

    sortSelect.addEventListener("change", () => {
        const sortValue = sortSelect.value;

        if (sortValue === "asc" || sortValue === "desc") {
            catalogListInstance.OrdenarCatalogs(sortValue);
            renderCatalogs(catalogData);
        }
    });
     // Nuevo evento para ordenar por dificultad
     sortDifficultySelect.addEventListener("change", () => {
        const sortValue = sortDifficultySelect.value;

        if (sortValue === "asc" || sortValue === "desc") {
            catalogData.sort((a, b) => {
                if (sortValue === "asc") {
                    // Ordenar de "Fácil" a "Difícil" o viceversa
                    if (a.Difficulty < b.Difficulty) return -1;
                    if (a.Difficulty > b.Difficulty) return 1;
                    return 0;
                } else if (sortValue === "desc") {
                    // Ordenar de "Difícil" a "Fácil" o viceversa
                    if (a.Difficulty > b.Difficulty) return -1;
                    if (a.Difficulty < b.Difficulty) return 1;
                    return 0;
                }

            });

            renderCatalogs(catalogData);
        }
    });
};
