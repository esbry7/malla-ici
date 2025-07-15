const ramosPorSemestre = {
  "Semestre 1": [
    { id: "calculo1", nombre: "CÁLCULO I" },
    { id: "algebra1", nombre: "ÁLGEBRA I" },
    { id: "fisica", nombre: "INTRODUCCIÓN A LA FÍSICA" },
    { id: "introIng", nombre: "PR. INTRO. A LA INGENIERÍA" },
    { id: "comunicacion1", nombre: "COMUNICACIÓN EFECTIVA I" },
    { id: "ingles1", nombre: "INGLÉS 1" },
    { id: "identidad", nombre: "IDENTIDAD, UNIV. Y EQ. DE GÉN." }
  ],
  "Semestre 2": [
    { id: "mecanica", nombre: "MECÁNICA", prer: ["calculo1", "fisica"] },
    { id: "quimica", nombre: "QUÍMICA GENERAL" },
    { id: "calculo2", nombre: "CÁLCULO II", prer: ["calculo1"] },
    { id: "algebra2", nombre: "ÁLGEBRA II", prer: ["algebra1"] },
    { id: "ingles2", nombre: "INGLÉS 2", prer: ["ingles1"] },
    { id: "dialogo1", nombre: "DIÁLOGO, FE Y CULTURA", prer: ["identidad"] }
  ],
  "Semestre 3": [
    { id: "ecuaciones", nombre: "ECUACIONES DIFERENCIALES", prer: ["calculo2", "algebra2"] },
    { id: "calculo3", nombre: "CÁLCULO III", prer: ["calculo2"] },
    { id: "programacion", nombre: "PROGRAMACIÓN", prer: ["algebra2", "introIng"] },
    { id: "estadistica", nombre: "ESTADÍSTICA", prer: ["calculo2"] },
    { id: "proyecto1", nombre: "PROYECTO: DISEÑO E INNOVACIÓN", prer: ["introIng"] },
    { id: "voley", nombre: "VOLEIBOL" }
  ],
  "Semestre 4": [
    { id: "electromagnetismo", nombre: "ELECTROMAGNETISMO", prer: ["algebra1", "mecanica", "calculo3"] },
    { id: "economia", nombre: "ECONOMÍA", prer: ["calculo2", "algebra2"] },
    { id: "estadisticaApl", nombre: "ESTADÍSTICA APLICADA", prer: ["estadistica"] },
    { id: "produccion1", nombre: "ADM. DE LA PRODUCCIÓN I", prer: ["calculo2"] },
    { id: "termo", nombre: "TERMODINÁMICA", prer: ["quimica", "calculo2"] },
    { id: "comunicacion2", nombre: "COMUNICACIÓN EFECTIVA II", prer: ["comunicacion1"] }
  ],
  "Semestre 5": [
    { id: "progCientifica", nombre: "PROGRAMACIÓN CIENTÍFICA", prer: ["estadisticaApl"] },
    { id: "investigacion1", nombre: "INVESTIGACIÓN OPERATIVA I", prer: ["algebra2", "calculo3"] },
    { id: "datos", nombre: "CIENCIA DE DATOS", prer: ["estadisticaApl", "programacion"] },
    { id: "contabilidad", nombre: "CONTABILIDAD DE DIRECCIÓN", prer: ["economia"] },
    { id: "proyecto2", nombre: "PROYECTO: SISTEMAS PRODUCTIVOS", prer: ["proyecto1", "produccion1"] },
    { id: "dibujo", nombre: "DIBUJO DE INGENIERÍA", prer: ["ecuaciones"] }
  ],
  "Semestre 6": [
    { id: "ml", nombre: "MACHINE LEARNING", prer: ["progCientifica"] },
    { id: "emprendimiento", nombre: "EMPRENDIMIENTO" },
    { id: "proyectoCalidad", nombre: "PROYECTO: CALIDAD", prer: ["proyecto2"] },
    { id: "economiaIng", nombre: "INGENIERÍA ECONÓMICA", prer: ["contabilidad"] },
    { id: "investigacion2", nombre: "INVESTIGACIÓN OPERATIVA II", prer: ["estadisticaApl", "investigacion1"] },
    { id: "produccion2", nombre: "ADM. DE LA PRODUCCIÓN II", prer: ["produccion1", "investigacion1"] },
    { id: "dialogo2", nombre: "DIÁLOGO, FE Y CIENCIA", prer: ["dialogo1"] }
  ],
  "Semestre 7": [
    { id: "dl", nombre: "DEEP LEARNING", prer: ["ml"] },
    { id: "ti", nombre: "TECNOLOGÍAS DE INFORMACIÓN", prer: ["produccion2", "datos"] },
    { id: "evaluacion", nombre: "PR. FORM. EVA. PROY. INVERSIÓN", prer: ["economiaIng", "proyectoCalidad"] },
    { id: "simulacion", nombre: "SIMULACIÓN", prer: ["investigacion2"] },
    { id: "cadena", nombre: "CADENA DE SUMINISTROS", prer: ["investigacion2", "produccion2"] },
    { id: "sustentable", nombre: "ING. Y DESAROLLO SUSTENTABLE", prer: ["dibujo", "investigacion1", "datos", "contabilidad", "proyecto2"] },
    { id: "practica", nombre: "PRÁCTICA PRE-PROFESIONAL" },
    { id: "etica", nombre: "ÉTICA PROFESIONAL", prer: ["dialogo2"] }
  ],
  "Semestre 8": [
    { id: "gestionIA", nombre: "GESTIÓN DE PROYECTOS DE IA", prer: ["dl"] },
    { id: "planificacion", nombre: "PLANIFICACIÓN ESTRATÉGICA", prer: ["electromagnetismo", "economia", "estadisticaApl", "produccion1", "investigacion1", "datos", "termo", "contabilidad", "proyecto2"] },
    { id: "proyCadena", nombre: "PROYECTO CADENA DE SUMINISTROS", prer: ["cadena", "evaluacion"] },
    { id: "activos", nombre: "GESTIÓN DE ACTIVOS", prer: ["economiaIng", "cadena"] },
    { id: "capital", nombre: "GESTIÓN DE CAPITAL HUMANO", prer: ["electromagnetismo", "economia", "estadisticaApl", "produccion1", "investigacion1", "datos", "termo", "contabilidad", "proyecto2"] },
    { id: "organizacion", nombre: "ORGANIZACIÓN DIGITAL", prer: ["ti"] }
  ],
  "Semestre 9": [
    { id: "electivo1", nombre: "FORMACIÓN PROFESIONAL ELECTIVA" },
    { id: "electivo2", nombre: "FORMACIÓN PROFESIONAL ELECTIVA" },
    { id: "electivo3", nombre: "FORMACIÓN PROFESIONAL ELECTIVA" },
    { id: "electivo4", nombre: "FORMACIÓN PROFESIONAL ELECTIVA" },
    { id: "electivo5", nombre: "FORMACIÓN PROFESIONAL ELECTIVA" },
    { id: "electivo6", nombre: "FORMACIÓN PROFESIONAL ELECTIVA" }
  ],
  "Semestre 10": [
    { id: "capstone", nombre: "CAPSTONE PROJECT", prer: Object.keys(ramosPorSemestre).flatMap(s => ramosPorSemestre[s]?.map(r => r.id)) }
  ]
};

// Inicializar la malla
const contenedor = document.getElementById("contenedor-malla");
const aprobados = new Set();

for (const [semestre, ramos] of Object.entries(ramosPorSemestre)) {
  const div = document.createElement("div");
  div.className = "semestre";
  const h2 = document.createElement("h2");
  h2.textContent = semestre;
  div.appendChild(h2);

  ramos.forEach(ramo => {
    const r = document.createElement("div");
    r.className = "ramo";
    r.textContent = ramo.nombre;
    r.dataset.id = ramo.id;
    if (ramo.prer) r.dataset.prer = JSON.stringify(ramo.prer);
    div.appendChild(r);
  });

  contenedor.appendChild(div);
}

// Funcionalidad de clic
document.querySelectorAll(".ramo").forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;
    const id = ramo.dataset.id;

    if (ramo.classList.contains("aprobado")) {
      ramo.classList.remove("aprobado");
      aprobados.delete(id);
    } else {
      ramo.classList.add("aprobado");
      aprobados.add(id);
    }

    actualizarBloqueos();
  });
});

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const prer = ramo.dataset.prer;
    if (prer) {
      const requisitos = JSON.parse(prer);
      const cumplido = requisitos.every(req => aprobados.has(req));
      if (cumplido) {
        ramo.classList.remove("bloqueado");
      } else {
        ramo.classList.add("bloqueado");
      }
    }
  });
}

actualizarBloqueos();


