
cronTable = document.getElementById("table-cronograma");

async function setTableContent(){

    const content = await fetchApi('cronograma', 'getFullCronograma');

    for(let i = 0; i < content.lenght; i++){

        let tr = document.createElement("tr");
        tr.innerHTML = "";

        content.forEach( ({ nombre, turno, fecha }) => {

            let tdName = document.createElement("td");
            let tdTurno = document.createElement("td");
            let tdFecha = document.createElement("td");

            tdName.innerText = nombre;
            tdTurno.innerText = turno;
            tdFecha.innerText = fecha;

            tr.appendChild(tdName);
            tr.appendChild(tdTurno);
            tr.appendChild(tdFecha);

        })

        cronTable.appendChild(tr);


    }

    
    

}

setTableContent();