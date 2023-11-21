import { ConstructorCurso,unirseCursoUsuario } from "../src/Cursos";

test('Crear un objeto Curso', () => {
    const curso = new ConstructorCurso('JavaScript', 'Curso de JavaScript', 'Programación');
    expect(curso.Title).toBe('JavaScript');
    expect(curso.Description).toBe('Curso de JavaScript');
    expect(curso.Category).toBe('Programación');
  });
// Cursos.test.js



describe("unirseCursoUsuario", () => {
  let agregarCursos;

  beforeEach(() => {
    agregarCursos = [];
  });

  test("Deberia Añadirse el Usuario a un curso exitosamente", () => {
    const resultado = unirseCursoUsuario(agregarCursos, "JavaScript", "Curso de JavaScript", "Programación");
    expect(resultado).toBe("Curso añadido exitosamente.");
    expect(agregarCursos).toHaveLength(1);
    expect(agregarCursos[0]).toEqual(ConstructorCurso("JavaScript", "Curso de JavaScript", "Programación"));
  });


});