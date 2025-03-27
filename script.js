const dptDiv = document.getElementById("descripcion-puesto");
const generarDescripcionBtn = document.getElementById("generar-descripcion");

// Asegúrate de que el nombre de la variable coincida con el nombre que usaste en dpt.json
const dptPrecargadas = [
    "Desarrollador de Software Senior: Responsable del diseño, desarrollo y mantenimiento de aplicaciones web complejas.",
    "Gerente de Proyecto: Lidera la planificación, ejecución y cierre de proyectos, asegurando que se cumplan los objetivos dentro del tiempo y el presupuesto.",
    "Analista de Datos: Recopila, analiza e interpreta datos para proporcionar información valiosa y apoyar la toma de decisiones.",
    "Especialista en Marketing Digital: Desarrolla e implementa estrategias de marketing digital para aumentar la visibilidad de la marca y generar leads.",
    "Representante de Ventas: Identifica y cultiva nuevas oportunidades de negocio, y mantiene relaciones sólidas con los clientes."
];

function generarDescripcion() {
    // Aquí iría la lógica para generar una nueva descripción basada en las DPT precargadas
    // Por ahora, solo mostraremos una DPT aleatoria como ejemplo
    const indiceAleatorio = Math.floor(Math.random() * dptPrecargadas.length);
    const descripcionGenerada = dptPrecargadas[indiceAleatorio];
    dptDiv.textContent = descripcionGenerada;
}

generarDescripcionBtn.addEventListener("click", generarDescripcion);
