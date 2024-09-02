// Ejemplo de cómo podrías cargar datos dinámicamente si los tuvieras
const data = [
    { actividad: "Visita guiada al museo", curso: "Historia del Arte", horario: "10:00 AM", duracion: "2 horas" },
    { actividad: "Tour por la ciudad", curso: "Historia Local", horario: "1:00 PM", duracion: "3 horas" },
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
