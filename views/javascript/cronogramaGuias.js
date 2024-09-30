const cronTable = document.querySelector(".table-cronograma.actual tbody");

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

document.addEventListener("DOMContentLoaded", async e => {

    await setTableContent();

    document.querySelector(".loading-screen").style.opacity = "0%";
    document.querySelector(".loading-screen").style.visibility = "hidden";

});
