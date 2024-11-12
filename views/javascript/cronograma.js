const cronTable = document.querySelector("#table-cronograma tbody");

const content = await fetchApi("cronograma", "getFullSchedule");

const dia1='2024-11-13'

const dataDia =  content.filter(item => item.fecha==dia1)

async function setTableContent(date){
    cronTable.innerHTML=''

    date.forEach( row => {   
        /*< captuta la plantilla*/
        const tpl = tpl_row_table.content
        /*< clona la plantilla como un nodo completo*/
        const tr = tpl.cloneNode(true);


		tr.querySelector('.tpl-col-pre').innerHTML = row.presentador
        tr.querySelector('.tpl-col-act').innerHTML = row.actividad
        tr.querySelector('.tpl-col-tur').innerHTML = row.turno
        // tr.querySelector('.tpl-col-cat').innerHTML = row.categoria
        tr.querySelector('.tpl-col-aul').innerHTML = row.aula
        tr.querySelector('.tpl-col-pis').innerHTML = row.ubicacion

        cronTable.appendChild(tr);

    });
}

await setTableContent(dataDia);

document.querySelector(".loading-screen").style.opacity = "0%";
document.querySelector(".loading-screen").style.visibility = "hidden";


select_dia.addEventListener('change',async e=>{
    const dataDia = content.filter(item => item.fecha==select_dia.value)
    
    await setTableContent(dataDia);
})

