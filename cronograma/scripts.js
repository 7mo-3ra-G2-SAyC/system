// Ejemplo de cómo podrías cargar datos dinámicamente si los tuvieras
const data = [
    { actividad: "Clase de Yoga", curso: "Yoga Básico", horario: "10:00 AM", duracion: "1 hora" },
    { actividad: "Clase de Pilates", curso: "Pilates Intermedio", horario: "12:00 PM", duracion: "1.5 horas" },
    // Agrega más actividades aquí
];

function populateTable() {
    const tbody = document.querySelector("table tbody");
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.actividad}</td>
            <td>${item.curso}</td>
            <td>${item.horario}</td>
            <td>${item.duracion}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", populateTable);
