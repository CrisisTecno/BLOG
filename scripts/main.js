
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: ["Curso definitivo de HTML", "Curso definitivo de HTML"],
    aprobarCurso1: function () {},

    aprobarCurso(nuevoCurso) {
      this.cursosAprobados.push(nuevoCurso);
    },
  };
  function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.aprobarCurso = function (nuevoCurso) {
      this.cursosAprobados.push(nuevoCurso);
    };
  }
  Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  };
  
  const juanita = new Student("Juana", 20, ["ufa , UFAA II"]);
  
  var obj1 = {
    a: 1,
    b: 2,
  };
  
  var obj2 = Object.create(obj1);
  obj2.a = 2;
  
  console.log(obj2.a); // 2
  console.log(obj2.b); // 2
  console.log(obj2.c);
  