
cronTable = document.getElementById("table-cronograma");

async function setTableContent(){

    const content = await fetchApi('cronograma', 'getFullCronograma');

    content.forEach(({nombre, turno, fecha}) => {

        let tr = document.createElement("tr");

        let tdName = document.createElement("td");
        let tdTurno = document.createElement("td");
        let tdFecha = document.createElement("td");

        tdName.innerText = nombre;
        tdTurno.innerText = turno;
        tdFecha.innerText = fecha;

        tr.appendChild(tdName);
        tr.appendChild(tdTurno);
        tr.appendChild(tdFecha);

        cronTable.appendChild(tr);

    });
}

setTableContent();