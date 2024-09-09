// hace un fetch y trae la info del guia logueado
fetchApi('guia','getByNroCarnet').then(data=>{
	// selecciona el elemento '#name_guide' y le inserta el nombre del guia
	document.getElementById('name_guide').innerHTML=`${data[0].nombre}`
})
