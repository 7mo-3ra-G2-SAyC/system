let param = new URLSearchParams(location.search);
const id = param.get('id_class');

const data = await fetchApi('Cronograma','getActivitiesForThisClassroom',`id_class=${id}`);
				if(data.errno == 200){

					// Recorre el listado de usuarios fila por fila
					let inicio = "08:20:00";
											console.log(data);

					// data.forEach( row => {
					// 	let duracion = data.duracion+data.descanso;
					// 	let hora = {"inicio" => inicio}
					// 	row = array_merge(row, hora);
					// 	addRowListado(row);
					// 	inicio = inicio+duracion;

					// })
					

				}

			
		/**
	 	 * 
	 	 * @brief Agrega una fila dentro de la tabla
	 	 * @param object data fila con datos de la actividad 
	 	 * */
		function addRowListado(data){

			/*< captura el contenido de la template */
			const tpl = tpl_row.content;
			/*< clona la plantilla como un nodo completo*/
			const clon = tpl.cloneNode(true);
			/*< alteramos el contenido del clon con los valores de data */
			clon.querySelector(".activity").innerHTML = data.activity_name;
			clon.querySelector(".activity_category").innerHTML = data.activity_category;
			clon.querySelector(".hora").innerHTML = inicio;
			clon.querySelector(".duracion").innerHTML = data.duracion;
			let date = new Date();
			if(data.inicio < date){
				let func = data.inicio+data.duracion;
				if(func >= date){
					clon.style.background = "orange";
				}
				else{
					clon.style.background = "red";
				}
			}
			/*< inserta el clon modificado dentro de la tabla */
			cronograma.appendChild(clon);
		}