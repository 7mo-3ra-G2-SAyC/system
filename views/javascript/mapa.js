// const estadosSalas = {
//     plantaBaja: [
//         {
//             name: "Proyecto A",
//             sala: 1,
//             estado: "libre",
//             descripcion: "Este es un proyecto enfocado en la creación de espacios colaborativos para nuevas empresas tecnológicas.",
//             fecha: "miércoles, 10:30"
//         },
//         {
//             name: "Proyecto E",
//             sala: 4,
//             estado: "ocupado",
//             descripcion: "Desarrollo de una aplicación móvil para gestión de tareas personales.",
//             fecha: "lunes, 11:00"
//         },
//         {
//             name: "Proyecto F",
//             sala: 5,
//             estado: "libre",
//             descripcion: "Creación de una red de apoyo para emprendedores locales.",
//             fecha: "martes, 09:30"
//         },
//         {
//             name: "Proyecto G",
//             sala: 6,
//             estado: "ocupado",
//             descripcion: "Investigación en sistemas de gestión de inventarios.",
//             fecha: "miércoles, 13:00"
//         },
//         {
//             name: "Proyecto H",
//             sala: 7,
//             estado: "libre",
//             descripcion: "Desarrollo de un sistema de reservas en línea para eventos.",
//             fecha: "jueves, 08:30"
//         },
//         {
//             name: "Proyecto I",
//             sala: 8,
//             estado: "ocupado",
//             descripcion: "Creación de un programa de fidelización para clientes.",
//             fecha: "jueves, 15:00"
//         },
//         {
//             name: "Proyecto J",
//             sala: 9,
//             estado: "libre",
//             descripcion: "Optimización de procesos de logística y distribución.",
//             fecha: "viernes, 10:00"
//         },
//         {
//             name: "Proyecto K",
//             sala: 10,
//             estado: "ocupado",
//             descripcion: "Desarrollo de una plataforma de telemedicina.",
//             fecha: "viernes, 14:00"
//         },
//         {
//             name: "Proyecto L",
//             sala: 11,
//             estado: "libre",
//             descripcion: "Diseño de un sistema de análisis de datos para comercio electrónico.",
//             fecha: "lunes, 09:00"
//         },
//         {
//             name: "Proyecto M",
//             sala: 12,
//             estado: "ocupado",
//             descripcion: "Implementación de una red social para profesionales.",
//             fecha: "martes, 16:00"
//         },
//         {
//             name: "Proyecto N",
//             sala: 13,
//             estado: "libre",
//             descripcion: "Desarrollo de un chatbot para atención al cliente.",
//             fecha: "miércoles, 11:30"
//         },
//         {
//             name: "Proyecto O",
//             sala: 14,
//             estado: "ocupado",
//             descripcion: "Creación de un sistema de gestión de proyectos.",
//             fecha: "jueves, 12:30"
//         },
//         {
//             name: "Proyecto P",
//             sala: 15,
//             estado: "libre",
//             descripcion: "Investigación en nuevos métodos de educación a distancia.",
//             fecha: "viernes, 13:00"
//         },
//         {
//             name: "Proyecto Q",
//             sala: 16,
//             estado: "ocupado",
//             descripcion: "Desarrollo de una aplicación de realidad aumentada.",
//             fecha: "lunes, 14:00"
//         },
//         {
//             name: "Proyecto R",
//             sala: 17,
//             estado: "libre",
//             descripcion: "Optimización de algoritmos de búsqueda en grandes volúmenes de datos.",
//             fecha: "martes, 15:00"
//         }
//     ],
//     pisoUno: [
//         {
//             name: "Proyecto B",
//             sala: 1,
//             estado: "ocupado",
//             descripcion: "Desarrollo de una plataforma educativa para la enseñanza de programación en línea, con múltiples cursos y recursos.",
//             fecha: "jueves, 14:45"
//         },
//         {
//             name: "Proyecto G",
//             sala: 2,
//             estado: "libre",
//             descripcion: "Investigación en inteligencia artificial para análisis de datos.",
//             fecha: "martes, 13:00"
//         },
//         {
//             name: "Proyecto H",
//             sala: 3,
//             estado: "ocupado",
//             descripcion: "Diseño de un software para optimización de procesos industriales.",
//             fecha: "miércoles, 15:30"
//         },
//         {
//             name: "Proyecto I",
//             sala: 4,
//             estado: "cerrado",
//             descripcion: "Desarrollo de un sistema de gestión de relaciones con clientes.",
//             fecha: "lunes, 10:00"
//         },
//         {
//             name: "Proyecto J",
//             sala: 5,
//             estado: "ocupado",
//             descripcion: "Implementación de una herramienta de análisis de mercado.",
//             fecha: "martes, 11:00"
//         },
//         {
//             name: "Proyecto K",
//             sala: 6,
//             estado: "libre",
//             descripcion: "Creación de una plataforma de crowdfunding para proyectos sociales.",
//             fecha: "miércoles, 09:00"
//         },
//         {
//             name: "Proyecto L",
//             sala: 7,
//             estado: "cerrado",
//             descripcion: "Desarrollo de una aplicación de gestión de proyectos de construcción.",
//             fecha: "jueves, 10:30"
//         },
//         {
//             name: "Proyecto M",
//             sala: 8,
//             estado: "libre",
//             descripcion: "Investigación en técnicas de machine learning para previsión de ventas.",
//             fecha: "viernes, 11:00"
//         },
//         {
//             name: "Proyecto N",
//             sala: 9,
//             estado: "ocupado",
//             descripcion: "Diseño de un sistema de seguimiento de proyectos en tiempo real.",
//             fecha: "lunes, 12:00"
//         },
//         {
//             name: "Proyecto O",
//             sala: 10,
//             estado: "cerrado",
//             descripcion: "Desarrollo de una aplicación de control de gastos personales.",
//             fecha: "martes, 13:30"
//         },
//         {
//             name: "Proyecto P",
//             sala: 11,
//             estado: "libre",
//             descripcion: "Optimización de procesos de manufactura utilizando técnicas de análisis de datos.",
//             fecha: "miércoles, 14:00"
//         },
//         {
//             name: "Proyecto Q",
//             sala: 12,
//             estado: "ocupado",
//             descripcion: "Creación de una plataforma de aprendizaje automático para reconocimiento de imágenes.",
//             fecha: "jueves, 09:30"
//         },
//         {
//             name: "Proyecto R",
//             sala: 13,
//             estado: "libre",
//             descripcion: "Desarrollo de un sistema de gestión de inventarios basado en blockchain.",
//             fecha: "viernes, 15:00"
//         },
//         {
//             name: "Proyecto S",
//             sala: 14,
//             estado: "cerrado",
//             descripcion: "Investigación en tecnologías de realidad virtual para entrenamiento profesional.",
//             fecha: "lunes, 10:30"
//         },
//         {
//             name: "Proyecto T",
//             sala: 15,
//             estado: "ocupado",
//             descripcion: "Diseño de una solución de ciberseguridad para pequeñas y medianas empresas.",
//             fecha: "martes, 11:30"
//         }
//     ],
//     pisoDos: [
//         {
//             name: "Proyecto C",
//             sala: 12,
//             estado: "cerrado",
//             descripcion: "Revisión y mejora de sistemas de energía renovable, enfocados en la eficiencia y la reducción de costos.",
//             fecha: "viernes, 16:00"
//         },
//         {
//             name: "Proyecto I",
//             sala: 13,
//             estado: "libre",
//             descripcion: "Desarrollo de un sistema de gestión de recursos para pequeñas empresas.",
//             fecha: "lunes, 10:30"
//         },
//         {
//             name: "Proyecto J",
//             sala: 14,
//             estado: "ocupado",
//             descripcion: "Implementación de tecnologías blockchain para la seguridad de transacciones.",
//             fecha: "martes, 11:00"
//         },
//         {
//             name: "Proyecto K",
//             sala: 15,
//             estado: "libre",
//             descripcion: "Desarrollo de un sistema de seguimiento de proyectos.",
//             fecha: "miércoles, 12:00"
//         },
//         {
//             name: "Proyecto L",
//             sala: 16,
//             estado: "ocupado",
//             descripcion: "Investigación en soluciones de movilidad urbana.",
//             fecha: "jueves, 09:30"
//         },
//         {
//             name: "Proyecto M",
//             sala: 17,
//             estado: "libre",
//             descripcion: "Diseño de una plataforma para el análisis de datos de sensores.",
//             fecha: "viernes, 11:30"
//         },
//         {
//             name: "Proyecto N",
//             sala: 18,
//             estado: "ocupado",
//             descripcion: "Creación de un sistema de monitorización de redes sociales.",
//             fecha: "lunes, 14:00"
//         },
//         {
//             name: "Proyecto O",
//             sala: 19,
//             estado: "libre",
//             descripcion: "Desarrollo de un software para la gestión de eventos.",
//             fecha: "martes, 15:00"
//         },
//         {
//             name: "Proyecto P",
//             sala: 20,
//             estado: "ocupado",
//             descripcion: "Optimización de procesos de cadena de suministro utilizando análisis predictivo.",
//             fecha: "miércoles, 16:00"
//         },
//         {
//             name: "Proyecto Q",
//             sala: 21,
//             estado: "libre",
//             descripcion: "Investigación en tecnologías emergentes para el cuidado de la salud.",
//             fecha: "jueves, 10:00"
//         },
//         {
//             name: "Proyecto R",
//             sala: 22,
//             estado: "ocupado",
//             descripcion: "Diseño de una plataforma de colaboración para equipos distribuidos.",
//             fecha: "viernes, 12:00"
//         },
//         {
//             name: "Proyecto S",
//             sala: 23,
//             estado: "libre",
//             descripcion: "Desarrollo de un sistema de análisis de comportamiento de usuarios.",
//             fecha: "lunes, 13:00"
//         },
//         {
//             name: "Proyecto T",
//             sala: 24,
//             estado: "ocupado",
//             descripcion: "Creación de un software para la gestión de recursos humanos.",
//             fecha: "martes, 14:00"
//         },
//         {
//             name: "Proyecto U",
//             sala: 25,
//             estado: "libre",
//             descripcion: "Optimización de algoritmos de búsqueda en bases de datos.",
//             fecha: "miércoles, 15:00"
//         }
//     ],
//     taller: [
//         {
//             name: "Proyecto D",
//             sala: 15,
//             estado: "ocupado",
//             descripcion: "Fabricación y prototipado de dispositivos IoT, integrando sensores avanzados para monitoreo ambiental.",
//             fecha: "miércoles, 09:00"
//         },
//         {
//             name: "Proyecto K",
//             sala: 16,
//             estado: "libre",
//             descripcion: "Desarrollo de prototipos para tecnología wearable.",
//             fecha: "lunes, 12:00"
//         },
//         {
//             name: "Proyecto L",
//             sala: 17,
//             estado: "ocupado",
//             descripcion: "Investigación en robótica para la automatización de tareas repetitivas.",
//             fecha: "jueves, 10:30"
//         },
//         {
//             name: "Proyecto M",
//             sala: 18,
//             estado: "libre",
//             descripcion: "Desarrollo de sistemas de energía solar portátiles.",
//             fecha: "lunes, 11:00"
//         },
//         {
//             name: "Proyecto N",
//             sala: 19,
//             estado: "ocupado",
//             descripcion: "Creación de dispositivos de monitoreo para entornos industriales.",
//             fecha: "martes, 12:00"
//         },
//         {
//             name: "Proyecto O",
//             sala: 20,
//             estado: "libre",
//             descripcion: "Prototipado de equipos para telemetría avanzada.",
//             fecha: "miércoles, 13:00"
//         },
//         {
//             name: "Proyecto P",
//             sala: 21,
//             estado: "ocupado",
//             descripcion: "Desarrollo de sensores para agricultura inteligente.",
//             fecha: "jueves, 14:00"
//         },
//         {
//             name: "Proyecto Q",
//             sala: 22,
//             estado: "libre",
//             descripcion: "Diseño de sistemas de automatización para procesos de manufactura.",
//             fecha: "viernes, 09:00"
//         },
//         {
//             name: "Proyecto R",
//             sala: 23,
//             estado: "ocupado",
//             descripcion: "Creación de dispositivos para el seguimiento de salud en tiempo real.",
//             fecha: "lunes, 15:00"
//         },
//         {
//             name: "Proyecto S",
//             sala: 24,
//             estado: "libre",
//             descripcion: "Desarrollo de sistemas de control para robots colaborativos.",
//             fecha: "martes, 16:00"
//         },
//         {
//             name: "Proyecto T",
//             sala: 25,
//             estado: "ocupado",
//             descripcion: "Fabricación de dispositivos de realidad aumentada para entrenamiento.",
//             fecha: "miércoles, 10:00"
//         },
//         {
//             name: "Proyecto U",
//             sala: 26,
//             estado: "libre",
//             descripcion: "Desarrollo de equipos para medición de parámetros ambientales.",
//             fecha: "jueves, 11:00"
//         },
//         {
//             name: "Proyecto V",
//             sala: 27,
//             estado: "ocupado",
//             descripcion: "Creación de prototipos para sistemas de navegación autónoma.",
//             fecha: "viernes, 12:00"
//         },
//         {
//             name: "Proyecto W",
//             sala: 28,
//             estado: "libre",
//             descripcion: "Investigación en nuevas tecnologías de impresión 3D.",
//             fecha: "lunes, 13:30"
//         }
//     ]
// };



const libre = "libre";
const ocupado = "ocupado";
const cerrado = "cerrado";
console.log(libre);

document.addEventListener('DOMContentLoaded', () => {

    resultMap.querySelectorAll('path').forEach((element) => {
        element.addEventListener('click', () => abrirCardSala(element.id))
    })

    let cardAnterior = plantaBajaSpan;
    const cargarMapa = (card) => {
        cardAnterior.classList.remove("mapControllerSelect")
        cardAnterior = card;
        card.classList.add("mapControllerSelect");

        resultMap.querySelectorAll('svg').forEach(element => {
            element.style.display = "none"
        });

        console.table(card.id)
        switch(card.id){
            case "piso1Span":    
                plantaUnoSvg.style.display = "block"
            break;
            case "plantaBajaSpan":    
                plantaBajaSvg.style.display = "block"
            break;
            case "piso2Span":    
                plantaDosSvg.style.display = "block"
            break;
            case "tallerSpan":    
                tallerSvg.style.display = "block"
            break;
        }

    };

    cargarMapa(plantaBajaSpan)

    plantaBajaSpan.addEventListener('click', () => cargarMapa(plantaBajaSpan));
    piso1Span.addEventListener('click', () => cargarMapa(piso1Span));
    piso2Span.addEventListener('click', () => cargarMapa(piso2Span));
    tallerSpan.addEventListener('click', () => cargarMapa(tallerSpan));


    function getUbicacion(ubicacion,sala) {

        console.log(ubicacion);
        if (ubicacion.includes("pisoUno")) {
            return "Primer piso, Sala "+sala;
        }
        if (ubicacion.includes("pisoDos")) {
            return "Segundo piso, Sala "+sala;
        }
        if (ubicacion.includes("taller")) {
            return "Taller, Sala "+sala;
        }
        if (ubicacion.includes("plantaBaja")) {
            return "Planta baja, Sala "+sala;
        }
    }

    function getTiempoRestante() {
        
        const fechaProxima = new Date('2024-11-4 20:10:00');
        const fechaActual = new Date();

        const diferencia = fechaProxima - fechaActual;

        const segundosTotales = Math.floor(diferencia / 1000);
        const minutosTotales = Math.floor(segundosTotales / 60);
        const horasTotales = Math.floor(minutosTotales / 60);

        const segundos = segundosTotales % 60;
        const minutos = minutosTotales % 60;
        const horas = horasTotales % 24;

        nextFuncionCardFuncion.innerText = `Proxima funcion en ${numerosDoble(horas)}:${numerosDoble(minutos)}:${numerosDoble(segundos)}`;
    }

    function numerosDoble(num) {
        if (num < 10) {
            return "0"+num;
        }
        return num;
    }

    function abrirCardSala(pisodata) {

        const [ piso, nroSala ] = pisodata.split('_')

        estadosSalas.plantaBaja.map((sala) => {
            
            if (`sala${sala.sala}` == nroSala) {

                const template = cardFuncionTemplate.content.cloneNode(true)
        
                document.querySelector('body').appendChild(template)
                
                cerrarCard.addEventListener('click',() => popUpCardSala.remove())

                switch (sala.estado) {
                    case "libre":
                        cardFuncion.style.background = "#9ACC77";
                        estadoCardFuncion.innerText = "Sala disponible";
                        tituloCardFuncion.innerText = sala.name;
                        ubicacionCardFuncion.innerText = getUbicacion(piso, sala.sala);
                        descripcionCardFuncion.innerText = sala.descripcion;
                        nextFuncionCardFuncion.innerText = "Cargando siguiente funcion ...";
                        setInterval(getTiempoRestante, 1000);
                        break;

                    case "ocupado":
                        cardFuncion.style.background = "#F0D442";
                        estadoCardFuncion.innerText = "Sala ocupada";
                        tituloCardFuncion.innerText = sala.name;
                        ubicacionCardFuncion.innerText = getUbicacion(piso, sala.sala);
                        descripcionCardFuncion.innerText = sala.descripcion;
                        nextFuncionCardFuncion.innerText = "Cargando siguiente funcion ...";
                        setInterval(getTiempoRestante, 1000);
                        break;

                    case "cerrado":
                        cardFuncion.style.background = "#CC2649";
                        estadoCardFuncion.innerText = "";
                        tituloCardFuncion.innerText = "Sala Cerrada";
                        ubicacionCardFuncion.innerText = getUbicacion(piso, sala.sala);
                        descripcionCardFuncion.innerText = "\nEsta sala no esta en el recorrido de la SAyC\n\n";
                        nextFuncionCardFuncion.innerText = "";
                        iconoCardFuncion.className = "fa-solid fa-rectangle-xmark";
                        break;
                }
            }
        });
    }
});