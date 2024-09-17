// hace un fetch y trae la info del guia logueado
function getContent(){

	fetchApi('guia', 'getByNroCarnet').then( data => {

		// selecciona el elemento '#name_guide' y le inserta el nombre del guia
		document.getElementById('name_guide').innerHTML = data[0].nombre; 

		hideLoadingScreen();

	});

}

function hideLoadingScreen(){

	document.querySelector(".loading-screen").style.opacity = "0%";
    document.querySelector(".loading-screen").style.visibility = "hidden";

}

document.addEventListener("DOMContentLoaded", () => {

    getContent();

});