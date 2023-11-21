import { ConstructorCurso } from "../src/Cursos";

test('Crear un objeto Curso', () => {
    const curso = new ConstructorCurso('JavaScript', 'Curso de JavaScript', 'Programación');
    expect(curso.Title).toBe('JavaScript');
    expect(curso.Description).toBe('Curso de JavaScript');
    expect(curso.Category).toBe('Programación');
  });