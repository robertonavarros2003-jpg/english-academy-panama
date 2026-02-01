const cursos = [
    "Inglés para principiantes",
    "Inglés intermedio",
    "Inglés avanzado",
    "Inglés para negocios",
    "Preparación TOEFL"
];

const lista = document.getElementById("lista-cursos");

cursos.forEach(curso => {
    let li = document.createElement("li");
    li.textContent = curso;
    lista.appendChild(li);
});

function mostrarMensaje() {
    alert("Gracias por contactarnos. Pronto te responderemos.");
}
