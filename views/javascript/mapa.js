const estadosSalas = {
    plantaBaja: [
        {
            name: "Proyecto A",
            sala: 3,
            estado: "libre",
            descripcion: "Este es un proyecto enfocado en la creación de espacios colaborativos para nuevas empresas tecnológicas.",
            fecha: "miércoles, 10:30"
        },
        {
            name: "Proyecto E",
            sala: 4,
            estado: "ocupado",
            descripcion: "Desarrollo de una aplicación móvil para gestión de tareas personales.",
            fecha: "lunes, 11:00"
        },
        {
            name: "Proyecto F",
            sala: 5,
            estado: "libre",
            descripcion: "Creación de una red de apoyo para emprendedores locales.",
            fecha: "martes, 09:30"
        },
        {
            name: "Proyecto G",
            sala: 6,
            estado: "ocupado",
            descripcion: "Investigación en sistemas de gestión de inventarios.",
            fecha: "miércoles, 13:00"
        },
        {
            name: "Proyecto H",
            sala: 7,
            estado: "libre",
            descripcion: "Desarrollo de un sistema de reservas en línea para eventos.",
            fecha: "jueves, 08:30"
        },
        {
            name: "Proyecto I",
            sala: 8,
            estado: "ocupado",
            descripcion: "Creación de un programa de fidelización para clientes.",
            fecha: "jueves, 15:00"
        },
        {
            name: "Proyecto J",
            sala: 9,
            estado: "libre",
            descripcion: "Optimización de procesos de logística y distribución.",
            fecha: "viernes, 10:00"
        },
        {
            name: "Proyecto K",
            sala: 10,
            estado: "ocupado",
            descripcion: "Desarrollo de una plataforma de telemedicina.",
            fecha: "viernes, 14:00"
        },
        {
            name: "Proyecto L",
            sala: 11,
            estado: "libre",
            descripcion: "Diseño de un sistema de análisis de datos para comercio electrónico.",
            fecha: "lunes, 09:00"
        },
        {
            name: "Proyecto M",
            sala: 12,
            estado: "ocupado",
            descripcion: "Implementación de una red social para profesionales.",
            fecha: "martes, 16:00"
        },
        {
            name: "Proyecto N",
            sala: 13,
            estado: "libre",
            descripcion: "Desarrollo de un chatbot para atención al cliente.",
            fecha: "miércoles, 11:30"
        },
        {
            name: "Proyecto O",
            sala: 14,
            estado: "ocupado",
            descripcion: "Creación de un sistema de gestión de proyectos.",
            fecha: "jueves, 12:30"
        },
        {
            name: "Proyecto P",
            sala: 15,
            estado: "libre",
            descripcion: "Investigación en nuevos métodos de educación a distancia.",
            fecha: "viernes, 13:00"
        },
        {
            name: "Proyecto Q",
            sala: 16,
            estado: "ocupado",
            descripcion: "Desarrollo de una aplicación de realidad aumentada.",
            fecha: "lunes, 14:00"
        },
        {
            name: "Proyecto R",
            sala: 17,
            estado: "libre",
            descripcion: "Optimización de algoritmos de búsqueda en grandes volúmenes de datos.",
            fecha: "martes, 15:00"
        }
    ],
    pisoUno: [
        {
            name: "Proyecto B",
            sala: 1,
            estado: "ocupado",
            descripcion: "Desarrollo de una plataforma educativa para la enseñanza de programación en línea, con múltiples cursos y recursos.",
            fecha: "jueves, 14:45"
        },
        {
            name: "Proyecto G",
            sala: 2,
            estado: "libre",
            descripcion: "Investigación en inteligencia artificial para análisis de datos.",
            fecha: "martes, 13:00"
        },
        {
            name: "Proyecto H",
            sala: 3,
            estado: "ocupado",
            descripcion: "Diseño de un software para optimización de procesos industriales.",
            fecha: "miércoles, 15:30"
        },
        {
            name: "Proyecto I",
            sala: 4,
            estado: "cerrado",
            descripcion: "Desarrollo de un sistema de gestión de relaciones con clientes.",
            fecha: "lunes, 10:00"
        },
        {
            name: "Proyecto J",
            sala: 5,
            estado: "ocupado",
            descripcion: "Implementación de una herramienta de análisis de mercado.",
            fecha: "martes, 11:00"
        },
        {
            name: "Proyecto K",
            sala: 6,
            estado: "libre",
            descripcion: "Creación de una plataforma de crowdfunding para proyectos sociales.",
            fecha: "miércoles, 09:00"
        },
        {
            name: "Proyecto L",
            sala: 7,
            estado: "cerrado",
            descripcion: "Desarrollo de una aplicación de gestión de proyectos de construcción.",
            fecha: "jueves, 10:30"
        },
        {
            name: "Proyecto M",
            sala: 8,
            estado: "libre",
            descripcion: "Investigación en técnicas de machine learning para previsión de ventas.",
            fecha: "viernes, 11:00"
        },
        {
            name: "Proyecto N",
            sala: 9,
            estado: "ocupado",
            descripcion: "Diseño de un sistema de seguimiento de proyectos en tiempo real.",
            fecha: "lunes, 12:00"
        },
        {
            name: "Proyecto O",
            sala: 10,
            estado: "cerrado",
            descripcion: "Desarrollo de una aplicación de control de gastos personales.",
            fecha: "martes, 13:30"
        },
        {
            name: "Proyecto P",
            sala: 11,
            estado: "libre",
            descripcion: "Optimización de procesos de manufactura utilizando técnicas de análisis de datos.",
            fecha: "miércoles, 14:00"
        },
        {
            name: "Proyecto Q",
            sala: 12,
            estado: "ocupado",
            descripcion: "Creación de una plataforma de aprendizaje automático para reconocimiento de imágenes.",
            fecha: "jueves, 09:30"
        },
        {
            name: "Proyecto R",
            sala: 13,
            estado: "libre",
            descripcion: "Desarrollo de un sistema de gestión de inventarios basado en blockchain.",
            fecha: "viernes, 15:00"
        },
        {
            name: "Proyecto S",
            sala: 14,
            estado: "cerrado",
            descripcion: "Investigación en tecnologías de realidad virtual para entrenamiento profesional.",
            fecha: "lunes, 10:30"
        },
        {
            name: "Proyecto T",
            sala: 15,
            estado: "ocupado",
            descripcion: "Diseño de una solución de ciberseguridad para pequeñas y medianas empresas.",
            fecha: "martes, 11:30"
        }
    ],
    pisoDos: [
        {
            name: "Proyecto C",
            sala: 12,
            estado: "cerrado",
            descripcion: "Revisión y mejora de sistemas de energía renovable, enfocados en la eficiencia y la reducción de costos.",
            fecha: "viernes, 16:00"
        },
        {
            name: "Proyecto I",
            sala: 13,
            estado: "libre",
            descripcion: "Desarrollo de un sistema de gestión de recursos para pequeñas empresas.",
            fecha: "lunes, 10:30"
        },
        {
            name: "Proyecto J",
            sala: 14,
            estado: "ocupado",
            descripcion: "Implementación de tecnologías blockchain para la seguridad de transacciones.",
            fecha: "martes, 11:00"
        },
        {
            name: "Proyecto K",
            sala: 15,
            estado: "libre",
            descripcion: "Desarrollo de un sistema de seguimiento de proyectos.",
            fecha: "miércoles, 12:00"
        },
        {
            name: "Proyecto L",
            sala: 16,
            estado: "ocupado",
            descripcion: "Investigación en soluciones de movilidad urbana.",
            fecha: "jueves, 09:30"
        },
        {
            name: "Proyecto M",
            sala: 17,
            estado: "libre",
            descripcion: "Diseño de una plataforma para el análisis de datos de sensores.",
            fecha: "viernes, 11:30"
        },
        {
            name: "Proyecto N",
            sala: 18,
            estado: "ocupado",
            descripcion: "Creación de un sistema de monitorización de redes sociales.",
            fecha: "lunes, 14:00"
        },
        {
            name: "Proyecto O",
            sala: 19,
            estado: "libre",
            descripcion: "Desarrollo de un software para la gestión de eventos.",
            fecha: "martes, 15:00"
        },
        {
            name: "Proyecto P",
            sala: 20,
            estado: "ocupado",
            descripcion: "Optimización de procesos de cadena de suministro utilizando análisis predictivo.",
            fecha: "miércoles, 16:00"
        },
        {
            name: "Proyecto Q",
            sala: 21,
            estado: "libre",
            descripcion: "Investigación en tecnologías emergentes para el cuidado de la salud.",
            fecha: "jueves, 10:00"
        },
        {
            name: "Proyecto R",
            sala: 22,
            estado: "ocupado",
            descripcion: "Diseño de una plataforma de colaboración para equipos distribuidos.",
            fecha: "viernes, 12:00"
        },
        {
            name: "Proyecto S",
            sala: 23,
            estado: "libre",
            descripcion: "Desarrollo de un sistema de análisis de comportamiento de usuarios.",
            fecha: "lunes, 13:00"
        },
        {
            name: "Proyecto T",
            sala: 24,
            estado: "ocupado",
            descripcion: "Creación de un software para la gestión de recursos humanos.",
            fecha: "martes, 14:00"
        },
        {
            name: "Proyecto U",
            sala: 25,
            estado: "libre",
            descripcion: "Optimización de algoritmos de búsqueda en bases de datos.",
            fecha: "miércoles, 15:00"
        }
    ],
    taller: [
        {
            name: "Proyecto D",
            sala: 15,
            estado: "ocupado",
            descripcion: "Fabricación y prototipado de dispositivos IoT, integrando sensores avanzados para monitoreo ambiental.",
            fecha: "miércoles, 09:00"
        },
        {
            name: "Proyecto K",
            sala: 16,
            estado: "libre",
            descripcion: "Desarrollo de prototipos para tecnología wearable.",
            fecha: "lunes, 12:00"
        },
        {
            name: "Proyecto L",
            sala: 17,
            estado: "ocupado",
            descripcion: "Investigación en robótica para la automatización de tareas repetitivas.",
            fecha: "jueves, 10:30"
        },
        {
            name: "Proyecto M",
            sala: 18,
            estado: "libre",
            descripcion: "Desarrollo de sistemas de energía solar portátiles.",
            fecha: "lunes, 11:00"
        },
        {
            name: "Proyecto N",
            sala: 19,
            estado: "ocupado",
            descripcion: "Creación de dispositivos de monitoreo para entornos industriales.",
            fecha: "martes, 12:00"
        },
        {
            name: "Proyecto O",
            sala: 20,
            estado: "libre",
            descripcion: "Prototipado de equipos para telemetría avanzada.",
            fecha: "miércoles, 13:00"
        },
        {
            name: "Proyecto P",
            sala: 21,
            estado: "ocupado",
            descripcion: "Desarrollo de sensores para agricultura inteligente.",
            fecha: "jueves, 14:00"
        },
        {
            name: "Proyecto Q",
            sala: 22,
            estado: "libre",
            descripcion: "Diseño de sistemas de automatización para procesos de manufactura.",
            fecha: "viernes, 09:00"
        },
        {
            name: "Proyecto R",
            sala: 23,
            estado: "ocupado",
            descripcion: "Creación de dispositivos para el seguimiento de salud en tiempo real.",
            fecha: "lunes, 15:00"
        },
        {
            name: "Proyecto S",
            sala: 24,
            estado: "libre",
            descripcion: "Desarrollo de sistemas de control para robots colaborativos.",
            fecha: "martes, 16:00"
        },
        {
            name: "Proyecto T",
            sala: 25,
            estado: "ocupado",
            descripcion: "Fabricación de dispositivos de realidad aumentada para entrenamiento.",
            fecha: "miércoles, 10:00"
        },
        {
            name: "Proyecto U",
            sala: 26,
            estado: "libre",
            descripcion: "Desarrollo de equipos para medición de parámetros ambientales.",
            fecha: "jueves, 11:00"
        },
        {
            name: "Proyecto V",
            sala: 27,
            estado: "ocupado",
            descripcion: "Creación de prototipos para sistemas de navegación autónoma.",
            fecha: "viernes, 12:00"
        },
        {
            name: "Proyecto W",
            sala: 28,
            estado: "libre",
            descripcion: "Investigación en nuevas tecnologías de impresión 3D.",
            fecha: "lunes, 13:30"
        }
    ]
};
const libre = "libre";
const ocupado = "ocupado";
const cerrado = "cerrado";
console.log(libre);

document.addEventListener('DOMContentLoaded', () => {
    let cardAnterior = plantaBajaSpan;
    const cargarMapa = (card) => {
        cardAnterior.classList.remove("mapControllerSelect")
        cardAnterior = card;
        card.classList.add("mapControllerSelect");

        resultMap.innerHTML = "";
        console.table(card.id)
        switch(card.id){
            case "piso1Span":
                console.log("piso 1");
                
                resultMap.innerHTML = `<svg viewBox="0 0 1350.000000 830.000000"> <g transform="translate(0.000000,830.000000) scale(0.100000,-0.100000)" > <path onclick="abrirCardSala('pisoUno',2)" id="pisoUno_sala2" d="M1530 7345 l0 -806 63 3 62 3 3 103 c3 115 2 114 84 87 60 -21 96 -60 118 -131 l18 -59 546 -3 546 -2 0 805 0 805 -720 0 -720 0 0 -805z"/> <path onclick="abrirCardSala('pisoUno',1)" id="pisoUno_sala1" d="M90 7345 l0 -795 55 0 55 0 0 100 c0 73 3 100 13 100 15 0 106 -44 128 -62 27 -22 59 -81 59 -110 l0 -28 555 0 555 0 0 795 0 795 -710 0 -710 0 0 -795z"/> <path onclick="abrirCardSala('pisoUno',3)" id="pisoUno_sala3" d="M2990 7345 l0 -795 40 0 40 0 0 100 c0 113 2 115 75 81 51 -23 90 -68 112 -131 l18 -50 577 0 578 0 0 795 0 795 -720 0 -720 0 0 -795z"/> <path onclick="abrirCardSala('pisoUno',4)" id="pisoUno_sala4" d="M4450 6990 l0 -440 218 0 219 0 12 43 c27 92 76 140 160 153 l41 7 0 -102 0 -101 210 0 210 0 0 100 c0 62 4 100 10 100 20 0 105 -48 127 -72 25 -27 43 -69 43 -104 l0 -24 310 0 310 0 0 440 0 440 -935 0 -935 0 0 -440z"/> <path onclick="abrirCardSala('pisoUno',5)" id="pisoUno_sala5" d="M6340 6706 l0 -724 63 -21 c88 -30 137 -86 137 -157 0 -24 -1 -24 -100 -24 l-100 0 0 -50 0 -50 695 0 695 0 0 875 0 875 -695 0 -695 0 0 -724z"/> <path onclick="abrirCardSala('pisoUno',6)" id="pisoUno_sala6" d="M7740 6555 l0 -875 564 0 564 0 6 32 c12 59 54 116 109 148 85 49 87 47 87 -75 l0 -105 30 0 30 0 0 875 0 875 -695 0 -695 0 0 -875z"/> <path onclick="abrirCardSala('pisoUno',7)" id="pisoUno_sala7" d="M9140 6555 l0 -875 30 0 30 0 0 105 c0 121 0 121 85 81 78 -37 125 -98 125 -162 l0 -24 575 0 575 0 0 875 0 875 -710 0 -710 0 0 -875z"/> <path onclick="abrirCardSala('pisoUno',8)" id="pisoUno_sala8" d="M10570 6555 l0 -875 584 0 584 0 23 61 c27 73 70 120 126 137 75 22 73 24 73 -93 0 -98 1 -105 20 -105 20 0 20 7 20 875 l0 875 -715 0 -715 0 0 -875z"/> <path onclick="abrirCardSala('pisoUno',9)" id="pisoUno_sala9" d="M12010 6555 l0 -875 25 0 25 0 0 105 c0 117 -2 115 71 90 62 -22 116 -78 136 -142 l17 -53 563 0 563 0 0 875 0 875 -700 0 -700 0 0 -875z"/> <path id="pasillo" d="M208 6633 l-3 -98 -57 -3 -58 -3 0 -688 0 -688 287 -6 c157 -4 328 -7 379 -7 l93 0 3 132 3 132 44 8 c57 10 112 48 139 97 39 68 36 71 -83 71 l-105 0 0 35 0 35 585 0 c460 0 586 -3 590 -12 2 -7 6 -30 10 -51 7 -45 54 -101 106 -128 70 -35 72 -33 67 86 l-5 105 473 0 472 0 11 -52 c19 -85 90 -158 154 -158 l27 0 0 105 0 105 268 0 c148 0 411 -3 585 -7 l317 -6 0 -74 0 -73 -100 0 c-113 0 -116 -3 -79 -69 25 -46 76 -81 134 -93 l45 -10 0 -235 0 -236 173 6 c94 4 368 6 607 6 239 -1 1959 -4 3822 -6 l3388 -5 0 281 0 281 35 0 c87 0 175 81 175 161 0 18 -8 19 -105 19 l-105 0 0 35 0 35 -115 0 c-84 0 -117 3 -119 13 -2 6 -9 31 -15 54 -15 54 -55 101 -106 124 -75 34 -77 33 -73 -81 3 -113 5 -110 -75 -110 l-52 0 3 106 4 107 -38 -6 c-68 -11 -114 -59 -145 -148 l-18 -54 -1175 -3 -1175 -2 -6 44 c-4 24 -15 58 -26 75 -22 37 -83 78 -127 87 l-32 7 0 -107 0 -106 -75 0 -75 0 0 105 c0 88 -2 105 -15 105 -52 0 -141 -88 -151 -148 -3 -22 -9 -44 -13 -50 -7 -12 -111 -13 -1853 -12 l-708 0 0 65 0 65 101 0 102 0 -6 42 c-7 55 -40 86 -124 114 l-68 23 -3 280 -2 281 -313 2 -312 3 -11 46 c-17 68 -30 87 -82 120 -71 45 -72 43 -72 -71 l0 -100 -220 0 -220 0 0 101 0 102 -41 -7 c-77 -12 -124 -68 -136 -157 l-6 -39 -825 2 -825 3 -12 47 c-15 58 -53 110 -98 132 -64 30 -67 27 -67 -78 0 -76 -3 -95 -16 -100 -9 -3 -283 -6 -610 -6 l-594 0 -6 28 c-11 52 -35 110 -52 125 -23 21 -86 47 -113 47 -20 0 -21 -4 -17 -100 l3 -100 -630 0 c-346 0 -635 4 -642 8 -7 4 -16 27 -22 51 -11 51 -51 96 -106 122 -64 30 -64 29 -67 -78z"/> <path id="salonCerrado" d="M12520 5630 l0 -30 105 0 c118 0 121 -2 89 -78 -28 -68 -110 -131 -171 -132 l-23 0 0 -270 0 -270 445 0 445 0 0 405 0 405 -445 0 -445 0 0 -30z"/> <path id="salonCerrado" d="M870 5610 c0 -19 7 -20 105 -20 119 0 119 0 83 -76 -25 -54 -83 -100 -145 -116 l-43 -10 0 -129 0 -129 525 0 525 0 0 250 0 250 -525 0 c-518 0 -525 0 -525 -20z"/> <path onclick="abrirCardSala('pisoUno',10)" id="pisoUno_sala10" d="M1950 4755 l0 -876 568 3 567 3 50 25 c35 17 60 40 83 74 51 76 49 78 -73 74 l-105 -3 0 788 0 787 -410 0 -410 0 0 -105 c0 -114 -2 -117 -57 -93 -65 28 -103 62 -128 111 -14 28 -25 59 -25 69 0 13 -8 18 -30 18 l-30 0 0 -875z"/> <path onclick="abrirCardSala('pisoUno',11)" id="pisoUno_sala11" d="M3060 4875 l0 -755 505 0 505 0 0 755 0 755 -360 0 -360 0 0 -106 0 -107 -41 6 c-72 10 -153 92 -165 169 -6 36 -8 38 -45 38 l-39 0 0 -755z"/> <path id="salonCerrado" d="M4090 5235 l0 -385 200 0 200 0 0 230 0 230 -23 0 c-43 0 -129 61 -154 110 -39 78 -37 80 77 80 l100 0 0 60 0 60 -200 0 -200 0 0 -385z"/> <path id="escalera" d="M90 4800 l0 -330 380 0 380 0 0 330 0 330 -187 -2 -188 -3 -5 -155 -6 -155 -2 158 -2 157 -185 0 -185 0 0 -330z"/> <path id="escalera" d="M5725 4838 c-3 -7 -4 -236 -3 -508 l3 -495 300 0 300 0 0 505 0 505 -298 3 c-233 2 -299 0 -302 -10z"/> <path onclick="abrirCardSala('pisoUno',12)" id="pisoUno_sala12" d="M3060 4085 c0 -12 18 -15 105 -15 66 0 105 -4 105 -10 0 -24 -51 -109 -83 -137 -18 -16 -55 -35 -80 -43 l-47 -13 0 -436 0 -437 44 -12 c57 -15 110 -62 142 -123 13 -27 24 -51 24 -54 0 -3 -47 -5 -105 -5 -87 0 -105 -3 -105 -15 0 -13 29 -15 205 -15 l205 0 0 -385 0 -385 23 0 c18 0 26 10 40 50 10 28 31 66 48 84 26 31 104 76 129 76 5 0 11 -44 12 -102 l3 -103 175 0 175 0 0 193 c0 105 -1 577 -3 1047 l-2 855 -505 0 c-442 0 -505 -2 -505 -15z"/> <path onclick="abrirCardSala('pisoUno',13)" id="pisoUno_sala13" d="M1950 3320 l0 -540 544 0 c497 0 545 1 548 16 3 14 17 17 100 15 53 -1 99 2 102 7 8 14 -47 96 -81 120 -17 12 -51 27 -77 34 l-46 12 0 438 0 438 -545 0 -545 0 0 -540z"/> <path onclick="abrirCardSala('pisoUno',14)" id="pisoUno_sala14" d="M1950 2020 l0 -730 750 0 750 0 0 98 0 98 -44 12 c-54 14 -110 61 -137 113 -34 67 -31 69 81 69 l100 0 0 535 0 535 -750 0 -750 0 0 -730z"/> <path id="pasillo" d="M3647 2169 c-47 -25 -95 -91 -103 -141 -6 -35 -9 -38 -40 -38 l-34 0 0 -160 0 -160 -100 0 c-62 0 -100 -4 -100 -10 0 -54 77 -135 137 -145 21 -4 44 -8 51 -10 9 -3 12 -36 12 -120 l0 -115 -60 0 -60 0 0 -40 0 -40 -98 0 c-54 0 -101 -2 -104 -6 -11 -10 11 -77 34 -101 27 -30 113 -73 146 -73 26 0 24 23 22 -263 l-1 -198 163 3 163 3 3 203 2 202 200 0 200 0 -2 513 -3 512 -182 3 -183 2 0 100 c0 111 -1 112 -63 79z"/> <path onclick="abrirCardSala('pisoUno',15)" id="pisoUno_sala15" d="M1952 688 l3 -583 685 0 685 0 0 215 0 215 -440 -4 -440 -3 0 217 0 218 445 -4 c390 -4 445 -2 448 11 2 10 -14 21 -50 34 -96 33 -158 97 -158 163 l0 32 103 3 102 3 3 33 3 32 -695 0 -696 0 2 -582z"/> <path id="escalera" d="M3697 943 c-4 -3 -7 -95 -7 -204 l0 -199 -172 -2 -173 -3 0 -215 0 -215 364 -3 c201 -1 369 2 373 6 5 5 6 192 2 426 l-7 416 -187 0 c-103 0 -190 -3 -193 -7z"/> <path id="escalera" d="M2462 743 l3 -198 420 3 c231 2 428 6 438 8 16 5 17 21 15 192 l-3 187 -438 3 -437 2 2 -197z"/> </g></svg>`;
            break;
            case "plantaBajaSpan":
                resultMap.innerHTML = `<svg version="1.0" viewBox="0 0 962.000000 808.000000"><g transform="translate(0.000000,808.000000) scale(0.100000,-0.100000)"><path onclick="abrirCardSala('plantaBaja',1)" id="plantaBaja_sala1" d="M2110 7710 l0 -370 853 0 854 0 6 158 c4 86 7 210 7 275 l0 117 81 0 c79 0 80 0 73 23 -3 12 -11 28 -17 35 -15 19 -82 52 -106 52 -21 0 -31 18 -31 56 l0 24 -860 0 -860 0 0 -370z"/><path onclick="abrirCardSala('plantaBaja',2)" id="plantaBaja_sala2" d="M3860 8051 c0 -25 5 -30 33 -35 47 -9 104 -60 116 -103 6 -20 8 -40 5 -45 -3 -4 -41 -8 -85 -8 l-79 0 0 -260 0 -260 165 0 c149 0 166 2 171 18 26 87 40 107 84 129 25 12 56 23 70 25 25 3 25 2 28 -84 l3 -88 44 0 45 0 0 370 0 370 -300 0 -300 0 0 -29z"/><path onclick="abrirCardSala('plantaBaja',3)" id="plantaBaja_sala3" d="M4480 7710 l0 -370 185 0 184 0 10 38 c6 21 26 53 45 71 32 31 103 64 118 54 5 -2 8 -40 8 -84 l0 -79 270 0 270 0 0 370 0 370 -545 0 -545 0 0 -370 z"/><path onclick="abrirCardSala('plantaBaja',4)" id="plantaBaja_sala4" d="M5590 6711 l0 -1361 78 0 c43 0 81 -3 84 -6 13 -12 -19 -81 -55 -118 -33 -35 -36 -41 -20 -50 45 -25 93 -111 77 -138 -3 -4 -39 -8 -80 -8 l-74 0 -2 -737 -3 -738 -429 -3 c-293 -1 -433 1 -440 8 -7 7 -12 78 -15 176 l-3 166 -27 -6 c-14 -4 -58 -22 -97 -41 -89 -43 -173 -130 -202 -207 -26 -71 -46 -70 -86 5 -41 77 -77 120 -131 157 -46 32 -177 90 -201 90 -11 0 -14 -33 -14 -170 l0 -170 -1632 0 -1633 0 -328 -691 c-181 -381 -331 -698 -334 -705 -4 -12 425 -14 2751 -14 l2756 0 0 490 0 490 310 0 310 0 0 -485 0 -485 138 0 c77 0 207 -3 290 -7 l152 -6 2 1799 3 1799 396 3 c339 2 398 0 402 -12 3 -8 3 -159 0 -335 -5 -278 -8 -321 -21 -321 -46 0 -122 -60 -122 -95 0 -3 29 -5 64 -5 36 0 67 -3 69 -7 3 -5 7 -219 8 -476 l4 -468 -55 -19 c-53 -18 -90 -49 -90 -76 0 -9 20 -14 73 -16 l72 -3 3 -175 c3 -215 2 -220 -43 -220 -32 0 -34 2 -39 43 -4 23 -7 61 -9 85 l-2 42 -35 -17 c-35 -19 -64 -59 -86 -121 -10 -31 -18 -38 -56 -48 -63 -16 -83 -29 -101 -66 l-16 -33 80 -3 c59 -2 81 -7 86 -17 4 -12 27 -15 108 -15 95 0 104 -2 110 -20 3 -11 3 -29 0 -40 -6 -17 -15 -20 -76 -20 l-70 0 15 -28 c10 -19 34 -38 74 -55 l59 -27 -4 -517 c-3 -285 -6 -523 -8 -528 -3 -12 -1774 -13 -1793 -1 -7 4 -12 34 -12 72 l0 65 -28 -15 c-38 -20 -59 -45 -69 -86 -8 -32 -13 -36 -54 -42 -24 -3 -484 -7 -1021 -7 l-978 -1 0 -59 c0 -68 -3 -71 -91 -71 -51 0 -59 -3 -59 -19 0 -28 37 -68 75 -82 43 -16 45 -35 6 -44 -38 -8 -81 -48 -81 -75 0 -18 6 -20 75 -20 l75 0 0 -70 0 -70 70 0 70 0 0 -36 c0 -26 8 -43 29 -65 47 -46 60 -39 63 33 3 61 4 63 32 66 15 2 39 1 52 -2 22 -6 24 -12 24 -66 0 -33 4 -60 9 -60 21 0 62 47 74 85 l14 40 702 3 701 2 0 -65 c0 -53 3 -65 16 -65 23 0 84 67 90 100 l6 27 568 8 c312 4 577 4 589 0 19 -6 21 -14 21 -76 0 -38 3 -69 8 -69 21 0 71 42 83 69 17 37 35 40 43 7 5 -21 60 -66 80 -66 3 0 6 29 6 65 0 59 2 65 23 70 12 3 229 4 482 3 l460 -3 5 -73 5 -74 35 24 c19 13 41 38 49 56 18 40 37 41 44 3 5 -25 57 -71 80 -71 3 0 7 30 9 68 l3 67 291 3 291 2 7 -31 c4 -19 25 -50 54 -78 l47 -46 5 75 c6 83 11 88 76 75 l34 -6 0 -64 c0 -36 3 -65 6 -65 4 0 21 9 39 20 32 20 65 72 65 104 0 14 31 16 290 16 l290 0 0 150 0 149 -147 3 -148 3 -3 73 c-2 39 -5 72 -7 72 -37 0 -86 -64 -89 -116 -1 -24 -3 -24 -103 -24 l-103 0 0 350 0 350 300 0 300 0 0 1535 0 1535 -530 0 -530 0 0 75 0 75 54 24 c47 21 86 56 86 78 0 5 -29 8 -65 8 -36 0 -66 1 -66 3 -1 1 -4 50 -8 109 -7 122 -10 118 75 118 58 0 66 9 39 47 -9 12 -36 27 -65 34 l-50 13 0 488 0 488 31 0 c22 0 41 10 65 34 19 19 34 39 34 45 0 7 -24 11 -65 11 -56 0 -65 2 -65 18 0 18 -16 19 -242 25 -133 4 -362 7 -510 7 l-268 0 0 -335 0 -335 -305 0 -305 0 0 84 0 85 -31 -11 c-34 -12 -59 -57 -59 -108 0 -23 -4 -30 -20 -30 -16 0 -20 7 -20 30 0 43 -25 87 -60 105 -16 8 -31 15 -34 15 -3 0 -6 -37 -8 -82 l-3 -83 -397 -3 -398 -2 0 655 0 655 -22 4 c-13 3 -57 7 -98 11 -41 3 -99 8 -127 11 l-53 6 0 -1361z m2590 -996 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m0 -630 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m0 -590 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m0 -540 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m0 -600 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m-10 -535 c0 -25 -4 -30 -25 -30 -21 0 -25 5 -25 30 0 25 4 30 25 30 21 0 25 -5 25 -30z"/><path onclick="abrirCardSala('plantaBaja',5)" id="plantaBaja_sala5" d="M5910 7400 l0 -650 345 0 345 0 0 40 0 40 -109 0 c-61 0 -112 3 -114 8 -9 13 20 83 45 109 12 14 39 32 58 41 l35 15 -27 11 c-39 17 -69 47 -89 90 -27 62 -21 66 97 66 l104 0 0 440 0 440 -345 0 -345 0 0 -650z"/><path onclick="abrirCardSala('plantaBaja',6)" id="plantaBaja_sala6" d="M1630 7405 l0 -85 -470 0 -470 0 0 -1870 0 -1870 1615 0 1615 0 0 173 c0 96 3 176 6 180 8 7 131 -37 198 -70 67 -34 145 -110 181 -177 17 -31 33 -56 36 -56 4 0 14 21 24 46 23 60 123 163 195 199 69 35 160 66 171 59 5 -3 9 -81 9 -175 l0 -169 410 0 410 0 2 733 3 732 83 3 c80 3 83 4 77 25 -10 34 -71 87 -100 87 -18 0 -25 5 -25 20 0 14 7 20 23 20 30 0 64 25 82 60 24 47 20 50 -60 50 l-75 0 0 1000 0 1000 -285 0 -285 0 0 80 c0 44 -2 80 -5 80 -4 0 -18 -6 -33 -14 -43 -22 -75 -63 -81 -103 l-6 -38 -268 -3 -267 -2 0 86 c0 84 0 85 -22 78 -67 -20 -98 -59 -110 -139 -3 -20 -12 -20 -1161 -23 l-1157 -2 0 80 c0 91 -8 98 -60 54 -34 -30 -60 -73 -53 -91 3 -8 -4 -13 -16 -13 -15 0 -21 6 -21 24 0 34 -40 88 -77 103 l-33 13 0 -85z"/><path onclick="abrirCardSala('plantaBaja',7)" id="plantaBaja_sala7" d="M6618 7278 l-3 -133 -102 -5 -101 -5 13 -32 c16 -37 64 -70 115 -79 36 -7 60 -20 60 -34 0 -4 -24 -10 -54 -12 -64 -5 -118 -41 -134 -87 l-11 -30 107 -3 107 -3 3 -52 c3 -45 6 -53 23 -53 17 0 19 7 19 84 0 47 3 87 8 89 16 11 89 -24 114 -54 15 -18 29 -31 31 -28 3 2 10 15 17 27 13 26 94 67 110 57 6 -3 10 -44 10 -91 l0 -84 280 0 280 0 0 324 0 324 -22 6 c-13 3 -213 6 -445 6 l-422 0 -3 -132z"/><path onclick="abrirCardSala('plantaBaja',8)" id="plantaBaja_sala8" d="M8630 7383 c35 -2 68 -9 71 -15 19 -30 -42 -110 -98 -129 l-33 -11 0 -249 0 -249 525 0 525 0 0 330 0 330 -527 -2 c-291 -1 -499 -3 -463 -5z"/><path onclick="abrirCardSala('plantaBaja',9)" id="plantaBaja_sala9" d="M8570 6501 l0 -199 43 -10 c48 -13 79 -41 95 -89 13 -39 5 -43 -79 -43 -33 0 -59 -4 -59 -10 0 -7 182 -10 525 -10 l525 0 0 280 0 280 -525 0 -525 0 0 -199z"/><path onclick="abrirCardSala('plantaBaja',10)" id="plantaBaja_sala10" d="M8570 6050 l0 -59 73 -3 72 -3 -3 -30 c-4 -39 -44 -80 -98 -102 l-44 -18 0 -57 0 -58 525 0 525 0 0 195 0 195 -525 0 -525 0 0 -60z"/><path onclick="abrirCardSala('plantaBaja',11)" id="plantaBaja_sala11" d="M6760 5320 l0 -400 375 0 c322 0 375 2 375 15 0 11 -17 15 -72 17 l-73 3 3 30 c5 46 29 75 83 99 l49 21 0 216 0 216 -77 7 c-42 3 -134 6 -205 6 l-128 0 0 85 0 85 -165 0 -165 0 0 -400z"/><path onclick="abrirCardSala('plantaBaja',12)" id="plantaBaja_sala12" d="M7120 5651 l0 -68 77 -7 c42 -3 129 -6 195 -6 l118 0 0 75 0 75 -195 0 -195 0 0 -69z"/><path onclick="abrirCardSala('plantaBaja',13)" id="plantaBaja_sala13" d="M6760 4365 l0 -525 375 0 375 0 0 25 c0 24 -2 25 -70 25 -81 0 -89 8 -66 64 16 37 62 73 109 83 l27 6 0 423 0 424 -375 0 -375 0 0 -525z"/><path onclick="abrirCardSala('plantaBaja',14)" id="plantaBaja_sala14" d="M6760 3585 l0 -225 268 2 c147 1 230 4 185 5 -94 4 -101 11 -71 73 23 46 64 76 116 86 18 3 35 11 38 16 4 7 -24 9 -82 7 l-89 -4 -3 133 -3 132 -179 0 -180 0 0 -225z"/><path onclick="abrirCardSala('plantaBaja',15)" id="plantaBaja_sala15" d="M7150 3689 l0 -122 78 6 c57 4 80 10 87 23 47 78 82 109 135 116 24 3 25 1 28 -64 2 -52 6 -68 17 -68 12 0 15 21 15 115 l0 115 -180 0 -180 0 0 -121z"/><path onclick="abrirCardSala('plantaBaja',16)" id="plantaBaja_sala16" d="M6883 3333 l-123 -4 0 -589 0 -590 368 0 369 0 6 248 c4 136 7 364 7 508 l0 260 -52 25 c-42 19 -58 33 -75 68 -12 24 -20 48 -17 52 3 5 36 9 75 9 39 0 69 4 69 10 0 9 -309 11 -627 3z"/><path onclick="abrirCardSala('plantaBaja',17)" id="plantaBaja_sala17" d="M5550 2625 c0 -471 0 -475 20 -475 11 0 23 8 26 18 14 49 45 88 85 108 61 31 69 24 69 -57 l0 -69 30 0 30 0 0 475 0 475 -130 0 -130 0 0 -475z"/><path onclick="abrirCardSala('plantaBaja',18)" id="plantaBaja_sala18" d="M5830 2625 l0 -475 145 0 145 0 0 475 0 475 -145 0 -145 0 0 -475z"/><path onclick="abrirCardSala('plantaBaja',19)" id="plantaBaja_sala19" d="M9020 2280 l0 -340 85 0 c69 0 85 3 85 15 0 8 10 36 22 61 17 37 31 51 66 66 24 11 48 16 53 11 4 -4 10 -39 12 -78 1 -38 4 21 5 133 l2 202 130 0 130 0 0 135 0 135 -295 0 -295 0 0 -340z"/><path onclick="abrirCardSala('plantaBaja',20)" id="plantaBaja_sala20" d="M9360 2145 l0 -195 125 0 125 0 0 195 0 195 -125 0 -125 0 0 -195z"/><path onclick="abrirCardSala('plantaBaja',21)" id="plantaBaja_sala21" d="M0 1815 l0 -305 410 0 410 0 0 73 -1 72 -52 25 c-43 21 -54 32 -65 63 -6 22 -10 43 -6 48 3 5 32 9 65 9 l59 0 0 160 0 160 -410 0 -410 0 0 -305z"/><path onclick="abrirCardSala('plantaBaja',22)" id="plantaBaja_sala22" d="M848 1948 l-3 -173 -62 -3 c-35 -2 -63 -7 -63 -12 0 -20 47 -60 85 -72 l40 -13 3 -98 3 -97 -426 0 -425 0 0 -665 0 -665 1385 0 1385 0 0 693 c0 382 -3 735 -6 785 l-7 92 -68 0 c-37 0 -70 4 -74 9 -11 19 28 92 63 116 l35 24 -26 6 c-35 9 -63 42 -76 90 -13 50 -6 55 82 55 l67 0 0 50 0 50 -955 0 -955 0 -2 -172z"/><path onclick="abrirCardSala('plantaBaja',23)" id="plantaBaja_sala23" d="M2788 2058 l-3 -63 -77 -3 c-43 -2 -78 -5 -78 -8 0 -2 6 -20 14 -38 10 -25 26 -38 60 -52 54 -22 58 -37 16 -54 -30 -12 -80 -63 -80 -80 0 -5 33 -10 73 -12 l72 -3 3 -67 3 -68 374 0 375 0 0 55 0 54 -72 3 c-66 3 -73 5 -76 25 -5 31 24 81 58 101 l29 18 -34 27 c-34 27 -63 96 -50 117 3 6 37 10 76 10 l69 0 0 50 0 50 -375 0 -374 0 -3 -62z"/><path onclick="abrirCardSala('plantaBaja',24)" id="plantaBaja_sala24" d="M2790 870 l0 -720 525 0 525 0 -2 723 c-1 397 -3 693 -5 657 -5 -92 -5 -93 -50 -75 -52 22 -81 52 -93 97 l-11 38 -444 0 -445 0 0 -720z"/><path onclick="abrirCardSala('plantaBaja',25)" id="plantaBaja_sala25" d="M4429 1583 l-407 -3 -6 -23 c-3 -13 -15 -36 -27 -51 -23 -29 -93 -69 -103 -59 -3 4 -6 35 -6 70 0 35 -4 63 -10 63 -7 0 -10 -245 -10 -715 l0 -715 603 0 604 0 6 307 c4 170 7 494 7 721 l0 412 -122 -2 c-68 -2 -306 -4 -529 -5z"/><path onclick="abrirCardSala('plantaBaja',26)" id="plantaBaja_sala26" d="M5107 1268 c-4 -178 -7 -502 -7 -720 l0 -398 963 0 964 0 6 308 c4 169 7 493 7 720 l0 412 -45 0 -45 0 0 -68 c0 -38 -3 -71 -6 -75 -10 -9 -101 40 -117 63 -14 20 -14 20 -31 -6 -19 -28 -100 -69 -116 -59 -6 3 -10 37 -10 76 l0 69 -564 0 -564 0 -6 -24 c-9 -37 -56 -87 -100 -107 -22 -10 -44 -15 -48 -13 -4 3 -8 36 -8 75 l0 69 -133 0 -134 0 -6 -322z"/><path onclick="abrirCardSala('plantaBaja',27)" id="plantaBaja_sala27" d="M7065 1189 c-4 -220 -4 -403 -1 -406 3 -4 6 30 6 75 0 44 4 83 8 86 5 3 37 -9 73 -27 56 -28 67 -38 89 -84 l25 -53 53 0 52 0 0 55 0 55 -64 0 c-36 0 -67 4 -70 8 -2 4 8 30 22 57 20 37 38 55 69 70 51 25 49 9 45 323 l-3 242 -148 0 -148 0 -8 -401z"/><path onclick="abrirCardSala('plantaBaja',28)" id="plantaBaja_sala28" d="M7400 1355 l0 -235 134 0 134 0 12 29 c15 38 57 76 98 89 39 13 40 11 45 -68 2 -30 4 8 5 85 1 77 -1 184 -5 238 l-6 97 -209 0 -208 0 0 -235z"/><path onclick="abrirCardSala('plantaBaja',29)" id="plantaBaja_sala29" d="M7856 1343 l4 -253 -35 0 -35 0 0 65 c0 57 -2 64 -17 58 -31 -11 -55 -37 -75 -80 l-19 -43 -139 0 -140 0 0 -33 c0 -30 -3 -34 -44 -45 -33 -8 -49 -20 -65 -45 -12 -19 -21 -37 -21 -41 0 -3 27 -6 59 -6 44 0 60 -4 65 -16 3 -9 6 -85 6 -170 l0 -154 143 0 144 0 12 -40 c14 -47 46 -86 80 -95 24 -7 24 -7 18 50 -3 31 -3 63 0 71 7 19 49 18 57 -2 3 -9 6 -84 6 -169 l0 -152 24 0 c30 0 93 -38 107 -65 l11 -20 14 20 c17 24 71 59 99 64 18 3 21 -4 26 -72 3 -41 6 74 7 256 l2 332 33 6 c39 7 93 52 102 84 6 21 4 22 -64 22 l-71 0 -2 363 c-1 199 -3 333 -5 297 -5 -95 -5 -94 -62 -65 -27 13 -56 33 -63 44 -13 19 -15 18 -47 -14 -18 -19 -46 -37 -62 -40 -16 -4 -32 -7 -36 -8 -5 -1 -11 32 -15 73 -3 41 -4 -39 -2 -177z"/><path onclick="abrirCardSala('plantaBaja',30)" id="plantaBaja_sala30" d="M8180 1245 l0 -345 58 0 c76 0 84 -6 71 -53 -10 -38 -67 -93 -106 -103 l-23 -6 0 -369 0 -369 330 0 330 0 0 723 c0 722 0 723 -21 724 -39 3 -84 39 -114 91 l-30 51 -247 1 -248 0 0 -345z"/><path onclick="abrirCardSala('plantaBaja',31)" id="plantaBaja_sala31" d="M8870 793 l0 -796 248 6 c136 4 302 7 370 7 l122 0 0 790 0 790 -280 0 c-219 0 -280 -3 -280 -13 0 -28 -53 -88 -99 -112 -27 -13 -51 -21 -55 -18 -3 4 -6 37 -6 75 0 39 -4 68 -10 68 -7 0 -10 -272 -10 -797z"/><path onclick="abrirCardSala('plantaBaja',32)" id="plantaBaja_sala32" d="M7100 834 c0 -67 -2 -76 -20 -81 -20 -5 -20 -14 -20 -379 l0 -374 160 0 160 0 0 165 0 165 -70 0 c-83 0 -91 9 -61 68 21 42 68 86 101 97 19 6 20 15 20 131 l0 124 -64 0 -64 0 -6 35 c-8 43 -50 94 -93 111 -18 8 -35 14 -38 14 -3 0 -5 -34 -5 -76z"/><path onclick="abrirCardSala('plantaBaja',33)" id="plantaBaja_sala33" d="M7400 517 c0 -29 -4 -34 -42 -47 -29 -10 -51 -28 -70 -55 -15 -22 -27 -43 -28 -47 0 -4 33 -8 73 -10 l72 -3 3 -178 2 -177 215 0 215 0 -1 233 c0 127 -4 252 -9 277 -8 42 -8 40 -7 -25 2 -51 -1 -70 -10 -69 -7 1 -22 2 -32 3 -30 2 -78 47 -97 91 l-18 40 -133 0 -133 0 0 -33z"/></g></svg>`
            break;
            case "piso2Span":
                resultMap.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><g transform="translate(0.000000,735.000000) scale(0.100000,-0.100000)"><path id="sala1" d="M580 7340 l-575 -5 0 -745 0 -744 70 -1 c39 -1 76 1 83 3 9 3 12 37 12 124 l0 120 47 -7 c101 -15 168 -76 199 -180 l15 -52 518 -5 c285 -3 566 -3 624 0 l107 5 -2 746 -3 746 -260 0 c-143 0 -519 -2 -835 -5z"/><path id="sala2" d="M1692 6598 l3 -753 80 0 80 0 3 124 3 123 40 -6 c95 -15 173 -84 209 -184 l22 -59 626 1 627 1 0 750 0 750 -848 3 -847 2 2 -752z"/><path id="sala3" d="M3409 7348 c-1 -2 -3 -339 -4 -750 -2 -543 1 -748 9 -750 6 0 46 -2 88 -2 l77 -1 3 120 3 120 38 3 c82 7 166 -62 202 -166 9 -26 20 -53 23 -60 6 -10 129 -13 612 -15 l605 -2 5 745 c3 410 4 748 2 753 -3 6 -1660 11 -1663 5z"/><path id="sala4" d="M5491 7027 c-8 -8 -74 -12 -204 -12 l-192 0 0 -745 0 -745 756 -3 756 -2 23 62 c31 85 97 151 175 173 31 9 58 15 61 13 2 -2 5 -58 6 -124 l3 -119 65 0 65 0 2 746 2 746 -315 0 c-219 0 -318 3 -323 11 -9 16 -864 15 -880 -1z"/><path id="sala5" d="M7026 7031 c-3 -5 -5 -348 -3 -762 l2 -754 30 0 30 0 3 119 3 118 32 -6 c108 -21 194 -102 204 -190 l6 -46 813 0 814 0 -2 763 -3 762 -962 3 c-545 1 -964 -2 -967 -7z"/><path id="sala6" d="M8988 6163 c-2 -483 -1 -881 2 -886 3 -4 352 -6 774 -5 l768 3 21 54 c28 78 98 145 172 166 31 9 58 15 61 13 2 -3 5 -57 5 -121 l1 -117 69 0 69 0 2 773 c1 424 2 822 2 882 l1 110 -971 3 -972 2 -4 -877z"/><path id="sala7" d="M10955 7031 c-3 -6 -8 -404 -12 -885 l-6 -876 36 0 37 0 0 111 0 112 32 -7 c105 -21 191 -96 204 -178 l7 -38 826 2 826 3 0 880 0 880 -972 3 c-607 1 -974 -1 -978 -7z"/><path id="sala8" d="M12927 7033 c-11 -11 -8 -1708 3 -1737 l10 -26 776 2 776 3 21 54 c28 78 98 145 172 166 31 9 58 15 61 13 2 -3 5 -57 5 -121 l1 -117 69 0 69 0 -2 883 -3 882 -976 3 c-536 1 -979 -1 -982 -5z"/><path id="sala9" d="M14907 7033 c-4 -3 -7 -401 -7 -884 l0 -878 35 2 35 2 0 109 0 109 32 -7 c105 -21 191 -96 204 -178 l7 -38 826 3 826 2 0 880 0 880 -976 3 c-536 1 -979 -1 -982 -5z"/><path id="pasillo" d="M3607 6073 c-4 -3 -7 -61 -7 -127 l0 -121 -745 0 c-697 0 -745 1 -745 17 0 44 -43 128 -85 167 -50 46 -81 61 -126 61 l-30 0 2 -122 c1 -68 -1 -122 -4 -120 -4 1 -333 2 -732 2 l-725 0 0 30 c0 39 -41 129 -71 157 -31 29 -90 53 -129 53 l-30 0 0 -120 c0 -89 -3 -120 -12 -121 -7 0 -34 0 -61 1 -26 1 -61 -1 -77 -5 l-30 -7 2 -426 3 -427 439 -2 c423 -2 440 -1 482 18 48 23 79 64 89 122 l7 37 -94 0 c-52 0 -97 2 -99 5 -3 2 -3 20 -1 40 l4 35 1149 0 1149 0 0 -175 c0 -173 0 -176 23 -184 12 -5 35 -23 51 -40 17 -17 34 -31 39 -31 9 0 106 76 118 92 3 4 27 -15 54 -42 27 -28 55 -50 61 -50 6 0 28 18 47 39 20 22 46 41 59 43 23 3 23 4 26 176 l2 172 220 0 219 0 3 -102 3 -103 40 3 c73 6 115 52 136 149 l12 53 576 0 576 0 0 -466 0 -467 90 2 c50 1 100 1 113 1 46 0 62 0 75 -1 6 0 272 -3 591 -5 422 -3 582 -1 592 7 9 8 18 8 27 2 14 -12 116 -12 134 0 7 4 21 2 31 -4 12 -7 27 -9 38 -4 11 5 24 7 29 5 27 -8 131 -7 141 1 9 7 19 6 33 -3 16 -10 25 -10 40 -1 13 8 21 9 29 1 8 -8 15 -8 26 1 14 11 16 -1 18 -101 l3 -113 772 -2 c510 -1 774 1 779 8 4 7 10 6 18 -1 9 -7 1040 -9 3382 -8 l3369 3 3 432 2 431 76 17 c119 26 173 86 186 205 l3 25 -132 3 -133 3 0 35 0 35 -264 -3 -264 -3 -7 40 c-11 74 -67 138 -144 164 -61 20 -61 21 -61 -93 0 -58 -4 -107 -8 -110 -4 -2 -60 -2 -125 1 l-117 6 0 113 c0 90 -3 114 -14 114 -32 0 -103 -33 -135 -63 -34 -33 -81 -118 -81 -149 0 -17 -85 -18 -1634 -18 l-1634 0 -7 38 c-12 73 -68 135 -144 161 -61 20 -61 21 -61 -94 l0 -105 -125 0 -125 0 0 115 c0 91 -3 115 -14 115 -32 0 -103 -33 -135 -63 -34 -33 -81 -118 -81 -149 0 -17 -47 -18 -790 -20 l-789 -3 -3 120 -3 120 -58 3 c-37 1 -56 -1 -52 -8 9 -14 -8 -13 -23 2 -9 9 -18 9 -38 -1 -20 -9 -30 -9 -40 0 -11 9 -21 9 -40 1 -19 -9 -29 -9 -44 0 -16 10 -24 10 -41 0 -16 -10 -24 -11 -35 -1 -11 9 -21 9 -40 1 -19 -9 -29 -9 -44 0 -16 10 -24 10 -41 0 -16 -10 -24 -11 -35 -1 -11 9 -20 9 -40 0 -20 -9 -30 -9 -40 0 -11 9 -21 9 -41 0 -18 -8 -29 -9 -37 -1 -14 14 -43 13 -49 -2 -3 -10 -10 -10 -31 2 -22 11 -31 12 -48 1 -15 -9 -23 -10 -31 -2 -14 14 -57 14 -57 1 0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 9 14 -48 13 -63 -2 -9 -9 -15 -9 -24 0 -16 16 -45 15 -52 0 -5 -10 -7 -10 -12 0 -7 16 -46 16 -62 0 -10 -10 -17 -10 -32 0 -24 15 -50 16 -50 2 0 -5 -7 -10 -16 -10 -8 0 -12 5 -9 10 9 15 -39 12 -54 -2 -11 -10 -14 -10 -18 0 -3 6 -15 12 -27 12 -12 0 -28 -6 -35 -12 -11 -10 -14 -10 -18 0 -6 16 -45 16 -61 0 -10 -10 -15 -10 -21 0 -5 8 -24 13 -47 12 -104 -5 -124 -1 -124 23 0 97 -76 183 -179 203 l-31 7 0 -104 c0 -57 -4 -110 -8 -116 -7 -11 -132 -13 -229 -4 -10 1 -13 32 -13 121 0 134 2 131 -71 105 -76 -27 -139 -104 -157 -192 l-8 -38 -772 0 -772 0 -1 25 c-1 14 -2 75 -4 135 -1 61 -3 122 -3 138 l-2 27 -619 -2 -619 -3 -6 43 c-10 75 -62 159 -116 187 -32 16 -94 27 -103 18z"/><path id="sala10" d="M15742 5233 l3 -28 134 -3 133 -3 -6 -52 c-15 -111 -86 -185 -200 -208 l-66 -13 2 -425 3 -426 560 0 560 0 3 593 2 592 -566 0 -565 0 3 -27z"/><path id="sala11" d="M844 5195 c-15 -38 2 -45 102 -45 l97 0 -7 -32 c-18 -89 -71 -150 -145 -164 -20 -4 -36 -15 -41 -28 -4 -12 -7 -116 -6 -231 l1 -210 770 0 770 0 0 360 0 360 -768 3 c-676 2 -768 0 -773 -13z"/><path id="sala12" d="M2404 5199 c-3 -6 -3 -14 2 -18 5 -3 9 -835 9 -1926 l0 -1920 139 -5 139 -5 19 -54 c21 -63 49 -98 95 -117 59 -25 63 -21 63 55 0 38 3 83 6 100 6 29 10 31 48 31 l41 0 -3 255 c-2 202 0 255 10 256 7 0 195 1 418 2 l405 2 0 1675 0 1675 -83 0 -84 0 2 -172 c0 -112 -3 -174 -10 -178 -6 -4 -24 -8 -41 -10 -18 -3 -44 -19 -64 -40 -19 -19 -37 -35 -40 -35 -3 0 -22 18 -42 41 -58 64 -61 64 -127 7 l-57 -51 -38 37 c-24 23 -46 36 -63 36 -15 0 -31 6 -35 14 -4 8 -6 88 -3 178 3 90 4 166 2 171 -5 12 -700 9 -708 -4z"/><path id="sala13" d="M3818 5203 c-2 -4 -2 -213 0 -464 l2 -456 58 1 c31 1 62 5 69 9 7 4 21 2 33 -5 15 -10 24 -10 38 -1 12 7 24 8 36 1 11 -6 27 -6 44 0 18 6 33 6 44 -2 13 -8 23 -8 38 1 12 8 21 9 25 3 8 -13 48 -13 62 1 8 8 13 8 17 0 4 -6 17 -11 30 -11 12 0 27 5 33 11 8 8 13 8 17 0 9 -14 53 -14 61 -1 4 6 12 7 18 3 17 -11 136 -13 142 -2 3 5 15 3 25 -4 16 -9 24 -9 40 0 12 8 21 9 25 3 7 -11 134 -8 152 3 6 4 14 3 17 -2 5 -8 116 -9 141 -1 6 2 18 0 29 -5 11 -5 26 -4 37 3 11 7 20 8 24 2 8 -13 48 -13 62 1 8 8 17 7 32 -3 17 -11 25 -11 43 1 16 10 23 10 26 2 5 -15 45 -14 60 1 10 10 15 10 21 0 5 -8 19 -12 32 -10 l24 3 0 460 0 460 -559 0 -560 0 -12 -47 c-25 -100 -72 -148 -153 -156 l-50 -4 -3 103 -3 104 -107 3 c-58 1 -108 -1 -110 -5z"/><path id="escalera" d="M9 4946 c-2 -2 -3 -108 -1 -235 l3 -231 407 3 407 2 0 230 0 230 -406 3 c-223 1 -407 0 -410 -2z"/><path id="escalera" d="M6784 4257 c-2 -7 -3 -163 -2 -347 l3 -335 305 0 305 0 3 239 c1 160 -1 243 -8 252 -7 7 -10 51 -9 106 l2 93 -297 2 c-222 1 -298 -1 -302 -10z"/><path id="sala14" d="M2994 1826 c-2 -6 -3 -137 -2 -291 l3 -280 93 -3 c102 -3 102 -2 80 -75 -14 -45 -61 -85 -134 -113 l-44 -17 2 -246 3 -246 400 0 400 0 3 633 c2 501 0 633 -10 637 -7 2 -188 6 -401 8 -291 4 -389 2 -393 -7z"/><path id="sala15" d="M2899 1326 c-1 -3 -3 -10 -4 -16 -1 -5 -3 -50 -4 -100 -1 -86 -2 -90 -23 -90 -67 1 -138 61 -170 145 l-16 40 -133 0 -134 0 -3 -280 c-2 -154 -1 -322 3 -372 l7 -93 47 0 46 0 13 -52 c20 -87 57 -125 132 -135 l40 -6 0 91 c0 73 3 91 16 96 9 3 67 6 130 6 l114 0 0 175 c0 96 1 178 3 183 1 4 -65 9 -148 12 l-150 6 149 4 149 5 1 54 1 55 61 23 c81 31 123 68 131 116 l6 37 -76 0 c-100 0 -107 4 -107 51 0 35 -3 39 -24 39 -13 0 -31 3 -40 6 -9 3 -17 3 -17 0z"/><path id="sala16" d="M2416 532 c-2 -4 -4 -125 -3 -270 l1 -262 693 0 693 0 0 260 c0 200 -3 262 -12 265 -7 2 -250 6 -540 8 l-527 4 -3 -91 c-3 -102 -6 -105 -77 -86 -60 16 -97 53 -122 121 -21 58 -22 59 -60 59 -21 0 -40 -3 -43 -8z"/></g></svg>`
            break;
            case "tallerSpan":
                resultMap.innerHTML = ``
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
    
    const fechaProxima = new Date('2024-08-20 18:00:00');
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

function abrirCardSala(numeroSala){

    popUpCardSala.style.display = "block";

    console.log(estadosSalas);

    estadosSalas.pisoUno.map((sala) => {

        if (sala.sala == numeroSala) {
            
            console.log(sala)
            
            switch(sala.estado){
                case libre:

                    cardFuncion.style.background = "#9ACC77";
                    estadoCardFuncion.innerText = "Sala disponible";
                    tituloCardFuncion.innerText = sala.name;
                    ubicacionCardFuncion.innerText = getUbicacion(salaSelecionada.attributes.id.value,sala.sala);
                    descripcionCardFuncion.innerText = sala.descripcion;
                    nextFuncionCardFuncion.innerText = "Cargando siguiente funcion ..."
                    setInterval(getTiempoRestante, 1000);

                break;
                case ocupado:

                    cardFuncion.style.background = "#F0D442";
                    estadoCardFuncion.innerText = "Sala ocupada"
                    tituloCardFuncion.innerText = sala.name;
                    ubicacionCardFuncion.innerText = getUbicacion(salaSelecionada.attributes.id.value,sala.sala);
                    descripcionCardFuncion.innerText = sala.descripcion;
                    nextFuncionCardFuncion.innerText = "Cargando siguiente funcion ..."
                    setInterval(getTiempoRestante, 1000);

                break;
                case cerrado:
                    cardFuncion.style.background = "#CC2649";
                    estadoCardFuncion.innerText = "";
                    tituloCardFuncion.innerText = "Sala Cerrada";
                    ubicacionCardFuncion.innerText = getUbicacion(salaSelecionada.attributes.id.value,sala.sala);
                    descripcionCardFuncion.innerText = "\nEsta sala no esta en el recorrido de la SAyC\n\n";
                    nextFuncionCardFuncion.innerText = "";
                    iconoCardFuncion.className = "fa-solid fa-rectangle-xmark";
                break;
            }

        }

    })
}
});