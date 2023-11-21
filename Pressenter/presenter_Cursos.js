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
        cursoContainer.appendChild(cursoData);
    });
}