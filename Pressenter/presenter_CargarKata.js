import catalogData from '../Data/catalogData.js';


const catalogContainer = document.getElementById("catalog-container");
const catalogTemplate = document.getElementById("catalog-template");
const createKataButton = document.getElementById("create-kata-button");
const createKataForm = document.getElementById("create-kata-form");
const saveKataButton = document.getElementById("save-kata-button");

export function GuardarFormularioKata(){
    if (usuarioPuedeRealizarAccionesKata()) {
        CrearNUevaKata();
    } else {
        alert("Debes iniciar sesión o crear una cuenta para realizar esta acción.");
    }
}
export function mostrarFormularioKata()
{
    if (usuarioPuedeRealizarAccionesKata()) {
        catalogContainer.innerHTML = '';
        createKataForm.style.display = "block";
    } else {
        alert("Debes iniciar sesión o crear una cuenta para realizar esta acción.");
    }
}
// Función para verificar si el usuario puede realizar acciones de kata
export function usuarioPuedeRealizarAccionesKata() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    return usuarioActual !== null;
}
function editarKata(catalog){
    const form = createKataForm;
    form.style.display = "block";
    createKataButton.style.display = "none";
    form.dataset.editIndex = catalogData.indexOf(catalog);
    ['Title', 'Description', 'Difficulty', 'Category', 'Type'].forEach(prop => {
        document.getElementById(`kata-${prop.toLowerCase()}`).value = catalog[prop];
    });
}
function eliminarKata(catalog){
    catalogData.splice(catalogData.indexOf(catalog), 1);
            CargarKata(catalogData);

}

export function CargarKata(catalogs) {
    catalogContainer.innerHTML = '';
    catalogs.forEach(catalog => {
        const catalogClone = document.importNode(catalogTemplate.content, true);
        ['Title', 'Description', 'Difficulty', 'Category', 'Type'].forEach(prop => {
            catalogClone.querySelector(`.${prop}`).textContent = catalog[prop];
        });
        const editButton = catalogClone.querySelector('.edit-button');
        const deleteButton = catalogClone.querySelector('.delete-button');
        editButton.addEventListener("click", () => editarKata(catalog));
        deleteButton.addEventListener("click", () => eliminarKata(catalog));
        catalogContainer.appendChild(catalogClone);
    });
}
function ActualizarKata(newKata, editIndex) {
    if (editIndex !== undefined) {
        catalogData[editIndex] = newKata;
    } else {
        catalogData.push(newKata);
    }
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
       ActualizarKata(newKata,editIndex);
        createKataForm.style.display = "none";
        CargarKata(catalogData);
}
export function LimpairContenedorKatas(){
     // Limpiar el contenedor
     document.getElementById("search-container").style.display = "none";
     document.getElementById("sort-select").style.display = "none";
     document.getElementById("sort-difficulty").style.display = "none";
     document.getElementById("create-kata-button").style.display = "none";
     document.getElementById("create-kata-form").style.display = "none";
     document.getElementById("catalog-container").style.display = "none";
     document.getElementById("sort-select").style.display = "none";
     document.getElementById("sort-difficulty").style.display = "none";
     document.getElementById("sort-select1").style.display = "none";
     document.getElementById("sort-difficulty1").style.display = "none";
}