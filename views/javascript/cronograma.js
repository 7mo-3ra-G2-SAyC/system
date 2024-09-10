
const cronTable = document.getElementById("table-cronograma");

async function setTableContent(){

    const content = await fetchApi("cronograma", "getFullSchedule");

    content.forEach( row => {

        let tr = document.createElement("tr");
        let descriptions = Object.values(row);

        descriptions.forEach( description => {
            tr.innerHTML += `<td>${description}</td>`;
        });

        cronTable.appendChild(tr);

    });
}

setTableContent();