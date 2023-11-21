import { ConstructorCurso,unirseCursoUsuario } from "../src/Cursos";

describe('Crear un objeto Curso', () => {
  it('debería crear un objeto Curso correctamente', () => {
    const curso = new ConstructorCurso('JavaScript', 'Curso de JavaScript', 'Programación');
    expect(curso.Title).toBe('JavaScript');
    expect(curso.Description).toBe('Curso de JavaScript');
    expect(curso.Category).toBe('Programación');
  });
});

describe('unirseCursoUsuario', () => {
  let agregarCursos;

  beforeEach(() => {
    agregarCursos = [];
  });

  it('debería añadirse el Usuario a un curso exitosamente', () => {
    const resultado = unirseCursoUsuario(agregarCursos, 'JavaScript', 'Curso de JavaScript', 'Programación');
    expect(resultado).toBe('Curso añadido exitosamente.');
    expect(agregarCursos).toHaveLength(1);
    expect(agregarCursos[0]).toEqual(ConstructorCurso('JavaScript', 'Curso de JavaScript', 'Programación'));
  });

  it('debería intentar añadir un curso existente', () => {
    unirseCursoUsuario(agregarCursos, 'JavaScript', 'Curso de JavaScript', 'Programación');
    const resultado = unirseCursoUsuario(agregarCursos, 'JavaScript', 'Otra descripción', 'Otra categoría');
    expect(resultado).toBe('Este curso ya ha sido agregado anteriormente.');
    expect(agregarCursos).toHaveLength(1);
  });
});