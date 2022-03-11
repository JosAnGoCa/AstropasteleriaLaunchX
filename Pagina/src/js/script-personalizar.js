// Grupos
var tipos = document.querySelectorAll("#grupo-tipos .opciones-escoger_opcion");
var pisos = document.querySelectorAll("#grupo-pisos .opciones-escoger_opcion");
var tamanios = document.querySelectorAll(
    "#grupo-tamanios .opciones-escoger_opcion"
);
var sabores = document.querySelectorAll(
    "#grupo-sabor .opciones-escoger_opcion"
);
var decorador = document.querySelectorAll(
    "#grupo-decorador .opciones-escoger_opcion"
);

// Funciones
function eliminar(grupo) {
    grupo.forEach(elemento => {
        elemento.classList.remove("active");
    });
}

function toggle(element) {
    element.classList.toggle("active");
}

// Añadir eventos
tipos.forEach(elemento => {
    elemento.addEventListener("click", () => {
        eliminar(tipos);
        elemento.classList.add("active");
    });
});

pisos.forEach(elemento => {
    elemento.addEventListener("click", () => {
        eliminar(pisos);
        elemento.classList.add("active");
    });
});

tamanios.forEach(elemento => {
    elemento.addEventListener("click", () => {
        eliminar(tamanios);
        elemento.classList.add("active");
    });
});

sabores.forEach(elemento => {
    elemento.addEventListener("click", () => {
        eliminar(sabores);
        elemento.classList.add("active");
    });
});

decorador.forEach(elemento => {
    elemento.addEventListener("click", () => {
        toggle(elemento);
    });
});
