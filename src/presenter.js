import CatalogList from './index.js';
import catalogData from './catalogData.js';

const catalogListInstance = new CatalogList(catalogData);
const catalogContainer = document.getElementById("catalog-container");
const catalogTemplate = document.getElementById("catalog-template");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const createKataButton = document.getElementById("create-kata-button");
const createKataForm = document.getElementById("create-kata-form");
const saveKataButton = document.getElementById("save-kata-button");
const sortDifficultySelect = document.getElementById("sort-difficulty");

function renderCatalogs(catalogs) {
    catalogContainer.innerHTML = '';
    catalogs.forEach((catalog, index) => { // Añade el parámetro 'index'
        const catalogClone = document.importNode(catalogTemplate.content, true);
        catalogClone.querySelector('.Title').textContent = catalog.Title;
        catalogClone.querySelector('.Description').textContent = catalog.Description;
        catalogClone.querySelector('.Difficulty').textContent = catalog.Difficulty;
        catalogClone.querySelector('.Category').textContent = catalog.Category;
        catalogClone.querySelector('.Type').textContent = catalog.Type;

        // Botón de Editar
        const editButton = catalogClone.querySelector('.edit-button');
        editButton.addEventListener("click", () => {
            // Rellenar el formulario con los datos del ejercicio para editar
            document.getElementById("kata-title").value = catalog.Title;
            document.getElementById("kata-description").value = catalog.Description;
            document.getElementById("kata-difficulty").value = catalog.Difficulty;
            document.getElementById("kata-category").value = catalog.Category;
            document.getElementById("kata-type").value = catalog.Type;

            // Mostrar el formulario para editar
            createKataForm.style.display = "block";
            createKataButton.style.display = "none"; // Ocultar el botón de creación durante la edición

            // Guardar el índice del ejercicio que se está editando
            createKataForm.dataset.editIndex = index;
        });

        // Botón de Eliminar
        const deleteButton = catalogClone.querySelector('.delete-button');
        deleteButton.addEventListener("click", () => {
            // Obtener el índice del ejercicio en el catálogo y luego eliminarlo
            const exerciseIndex = index;
            catalogData.splice(exerciseIndex, 1);
            // Renderizar el catálogo actualizado
            renderCatalogs(catalogData);
        });

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
                    // Ordenar de "Fácil" a "Intermedio" a "Difícil"
                    if (a.Difficulty === "Facil" && b.Difficulty !== "Facil") return -1;
                    if (a.Difficulty === "Intermedio" && b.Difficulty === "Difícil") return -1;
                    return 1;
                } else if (sortValue === "desc") {
                    // Ordenar de "Difícil" a "Intermedio" a "Fácil"
                    if (a.Difficulty === "Difícil" && b.Difficulty !== "Difícil") return -1;
                    if (a.Difficulty === "Intermedio" && b.Difficulty === "Facil") return -1;
                    return 1;
                }
            });

            renderCatalogs(catalogData);
        }
    });

    // Mostrar el formulario de creación de kata al hacer clic en el botón
    createKataButton.addEventListener("click", () => {
        catalogContainer.innerHTML = '';
        createKataForm.style.display = "block";
    });

    // Guardar un nuevo kata
    saveKataButton.addEventListener("click", () => {
        const title = document.getElementById("kata-title").value;
        const description = document.getElementById("kata-description").value;
        const difficulty = document.getElementById("kata-difficulty").value;
        const category = document.getElementById("kata-category").value;
        const type = document.getElementById("kata-type").value;

        const newKata = {
            Title: title,
            Description: description,
            Difficulty: difficulty,
            Category: category,
            Type: type
        };
// Obtener el índice del ejercicio que se está editando (si está en modo edición)
        const editIndex = createKataForm.dataset.editIndex;
        if (editIndex !== undefined) {
            // Actualizar el ejercicio existente en el catálogo
            catalogData[editIndex] = newKata;
        } else {
            // Agregar el nuevo kata al catálogo de datos (catalogData)
            catalogData.push(newKata);
        }


        // Limpiar el formulario y ocultarlo
        createKataForm.style.display = "none";

        // Renderizar el catálogo actualizado
        renderCatalogs(catalogData);
    });
};