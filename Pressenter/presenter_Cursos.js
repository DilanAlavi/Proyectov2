import { ConstructorCurso,unirseCursoUsuario} from "../src/Cursos";
const cursoContainer = document.getElementById("curso-container");
const cursoTemplate=document.getElementById("curso-template");

export function cargarCursos(DataCurso) {
    cursoContainer.innerHTML = '';
    DataCurso.forEach(Curso => {
        const nuevoCurso = new ConstructorCurso(Curso.Title,Curso.Description, Curso.Category);
        const cursoData = document.importNode(cursoTemplate.content, true);
        Object.keys(nuevoCurso).forEach(prop => {cursoData.querySelector(`.${prop}`).textContent = nuevoCurso[prop];});
        const buttonAñadirCursos = cursoData.querySelector('.anadir-button');
        const ButtoneliminarCursos= cursoData.querySelector('.salir-button');
        buttonAñadirCursos.addEventListener("click",() => {AñadirUnCurso(DataCurso,buttonAñadirCursos,ButtoneliminarCursos);});
        ButtoneliminarCursos.addEventListener("click",() => {RetirarUnCurso(DataCurso,buttonAñadirCursos,ButtoneliminarCursos);});
        cursoContainer.appendChild(cursoData);
    });
}

function AñadirUnCurso(DataCurso,buttonAñadirCursos,ButtoneliminarCursos){
    cargarCursoAUsuario(DataCurso);
     // Ocultar el botón de añadir y mostrar el botón de eliminar
     buttonAñadirCursos.style.display = "none";
     ButtoneliminarCursos.style.display = "block";

}
function RetirarUnCurso(DataCurso,buttonAñadirCursos,ButtoneliminarCursos){
    RetirarCursoAUsuario(DataCurso);
    buttonAñadirCursos.style.display = "block";//Mostrar Button
    ButtoneliminarCursos.style.display = "none";//Esconder boton

}
export function cargarCursoAUsuario(title, description, category) {//cambiar nombre de la funcion
    unirseCursoUsuario(title, description, category);
   alert("Curso añadido exitosamente.");   
}
export function RetirarCursoAUsuario() {
    alert("Curso se elimino exitosamente.");
}