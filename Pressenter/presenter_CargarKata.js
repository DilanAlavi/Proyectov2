import catalogData from '../Data/catalogData.js';


const catalogContainer = document.getElementById("catalog-container");
const catalogTemplate = document.getElementById("catalog-template");
const createKataButton = document.getElementById("create-kata-button");
const createKataForm = document.getElementById("create-kata-form");
const saveKataButton = document.getElementById("save-kata-button");


export function CargarKata(catalogs) {
    catalogContainer.innerHTML = '';
    catalogs.forEach(catalog => {
        const catalogClone = document.importNode(catalogTemplate.content, true);
        ['Title', 'Description', 'Difficulty', 'Category', 'Type'].forEach(prop => {
            catalogClone.querySelector(`.${prop}`).textContent = catalog[prop];
        });
        const editButton = catalogClone.querySelector('.edit-button');
        const deleteButton = catalogClone.querySelector('.delete-button');
        editButton.addEventListener("click", () => {
            const form = createKataForm;
            form.style.display = "block";
            createKataButton.style.display = "none";
            form.dataset.editIndex = catalogData.indexOf(catalog);
            ['Title', 'Description', 'Difficulty', 'Category', 'Type'].forEach(prop => {
                document.getElementById(`kata-${prop.toLowerCase()}`).value = catalog[prop];
            });
        });
        deleteButton.addEventListener("click", () => {
            catalogData.splice(catalogData.indexOf(catalog), 1);
            CargarKata(catalogData);
        });
        catalogContainer.appendChild(catalogClone);
    });
}
export function CrearNUevaKata(){
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
        const editIndex = createKataForm.dataset.editIndex;
        if (editIndex !== undefined) {
            catalogData[editIndex] = newKata;
        } else {
            catalogData.push(newKata);
        }
        createKataForm.style.display = "none";
        CargarKata(catalogData);
}
