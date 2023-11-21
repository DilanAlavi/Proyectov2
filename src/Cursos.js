// Cursos.js

export function ConstructorCurso(title, description, category) {
    return {
        Title: title,
        Description: description,
        Category: category,
      };
    }
  
    let agregarCursos = [];
  
    export function unirseCursoUsuario(agregarCursos, title, description, category) {
      const nuevoCurso = ConstructorCurso(title, description, category);
      if (!agregarCursos.some((curso) => curso.Title === nuevoCurso.Title)) {
        agregarCursos.push(nuevoCurso);
        return "Curso añadido exitosamente.";
      } else {
        return "Este curso ya ha sido agregado anteriormente.";
      }
 }