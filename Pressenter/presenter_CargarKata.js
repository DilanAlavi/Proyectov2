import catalogData from '../Data/catalogData.js';


const catalogContainer = document.getElementById("catalog-container");
const catalogTemplate = document.getElementById("catalog-template");
const createKataButton = document.getElementById("create-kata-button");
const createKataForm = document.getElementById("create-kata-form");

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
        const editarKataButton = catalogClone.querySelector('.edit-button');
        const elminarKataButton = catalogClone.querySelector('.delete-button');
        editarKataButton.addEventListener("click", () => editarKata(catalog));
        elminarKataButton.addEventListener("click", () => eliminarKata(catalog));
        catalogContainer.appendChild(catalogClone);
    });
}

function ActualizarKata(nuevaKata, indiceEdicion) {
    if (indiceEdicion !== undefined) {
        catalogData[indiceEdicion] = nuevaKata;
    } else {
        catalogData.push(nuevaKata);
    }
}

export function CrearNUevaKata(){
    const title = document.getElementById("kata-title").value;
        const description = document.getElementById("kata-description").value;
        const difficulty = document.getElementById("kata-difficulty").value;
        const category = document.getElementById("kata-category").value;
        const type = document.getElementById("kata-type").value;
        const NuevaKata = {
            Title: title,
            Description: description,
            Difficulty: difficulty,
            Category: category,
            Type: type
        };
        const editIndex = createKataForm.dataset.editIndex;
        ActualizarKata(NuevaKata,editIndex);
        createKataForm.style.display = "none";
        CargarKata(catalogData);
}