import { ConstructorCurso } from "../src/Cursos";
const cursoContainer = document.getElementById("curso-container");
const cursoTemplate=document.getElementById("curso-template");

export function cargarCursos(DataCurso) {
    cursoContainer.innerHTML = '';
    DataCurso.forEach(Curso => {
        const nuevoCurso = new ConstructorCurso(Curso.Title,Curso.Description, Curso.Category);
        const cursoData = document.importNode(cursoTemplate.content, true);
        Object.keys(nuevoCurso).forEach(prop => {
            cursoData.querySelector(`.${prop}`).textContent = nuevoCurso[prop];
        });
        const buttonAñadirCursos = cursoData.querySelector('.anadir-button');
        const ButtoneliminarCursos= cursoData.querySelector('.salir-button');
        buttonAñadirCursos.addEventListener("click",() => {
            cargarCursoUsuario(DataCurso);
            buttonAñadirCursos.style.display = "none";
            ButtoneliminarCursos.style.display = "block";
         });

        cursoContainer.appendChild(cursoData);
    });

}

export function cargarCursoUsuario(title, description, category) {//cambiar nombre de la funcion
    unirseCursoUsuario(title, description, category);
   alert("Curso añadido exitosamente.");
   // Ocultar el botón de añadir y mostrar el botón de eliminar

}