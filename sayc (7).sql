-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-08-2024 a las 02:15:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sayc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `nombre` varchar(50) DEFAULT NULL,
  `duracion` time DEFAULT NULL,
  `id_actividad` int(11) NOT NULL,
  `descanso` time DEFAULT NULL,
  `id_presentacion` int(11) NOT NULL,
  `descripcion` tinytext DEFAULT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`nombre`, `duracion`, `id_actividad`, `descanso`, `id_presentacion`, `descripcion`, `id_categoria`) VALUES
('Contraseñas, hacemos un buen uso de ellas?', '00:20:00', 1, '00:10:00', 1, 'Charla sobre como dar un buen uso de las contraseñas de nuestras redes y sitios personales', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades_categorias`
--

CREATE TABLE `actividades_categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades_categorias`
--

INSERT INTO `actividades_categorias` (`id_categoria`, `nombre`) VALUES
(1, 'Charla grupal'),
(2, 'Demostracion tecnica'),
(3, 'Charla informativa'),
(4, 'Obra de teatro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `nombre` varchar(100) DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL,
  `id_aula` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`nombre`, `capacidad`, `id_aula`, `id_categoria`) VALUES
('Aula 1', 30, 7, 1),
('Aula 2', 30, 8, 1),
('Aula 3', 30, 9, 1),
('Aula 4', 30, 10, 1),
('Aula 5', 30, 11, 1),
('Aula 6', 30, 12, 1),
('Aula 1', 30, 13, 2),
('Aula 2', 30, 14, 2),
('Aula 3', 30, 15, 2),
('Aula 4', 30, 16, 2),
('Aula 5', 30, 17, 2),
('Aula 6', 30, 18, 2),
('Aula 1', 30, 19, 3),
('Aula 2', 30, 20, 3),
('Aula 3', 30, 21, 3),
('Aula 4', 30, 22, 3),
('Aula 5', 30, 23, 3),
('Aula 6', 30, 24, 3),
('Aula 1', 30, 25, 4),
('Aula 2', 30, 26, 4),
('Aula 3', 30, 27, 4),
('Aula 4', 30, 28, 4),
('Aula 5', 30, 29, 4),
('Aula 6', 30, 30, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula_categorias`
--

CREATE TABLE `aula_categorias` (
  `id_categoria` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aula_categorias`
--

INSERT INTO `aula_categorias` (`id_categoria`, `descripcion`) VALUES
(1, 'Primer piso'),
(2, 'Segundo piso'),
(3, 'Planta baja'),
(4, 'Taller');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cronograma`
--

CREATE TABLE `cronograma` (
  `id_actividad` int(11) NOT NULL,
  `id_turno` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `id_aula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cronograma`
--

INSERT INTO `cronograma` (`id_actividad`, `id_turno`, `fecha`, `id_aula`) VALUES
(1, 1, '2024-08-20', 7),
(1, 2, '2024-08-22', 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cronograma_cursos`
--

CREATE TABLE `cronograma_cursos` (
  `fecha_hora` datetime NOT NULL,
  `id_curso` int(11) NOT NULL,
  `id_actividad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cronograma_cursos`
--

INSERT INTO `cronograma_cursos` (`fecha_hora`, `id_curso`, `id_actividad`) VALUES
('2024-08-20 02:25:00', 3, 1),
('2024-08-20 02:50:00', 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL,
  `curso` varchar(5) DEFAULT NULL,
  `division` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id_curso`, `curso`, `division`) VALUES
(3, '1ro', '1ra'),
(4, '1ro', '2da'),
(5, '1ro', '3ra'),
(6, '1ro', '4ta'),
(7, '1ro', '5ta'),
(8, '1ro', '6ta'),
(9, '2do', '1ra'),
(10, '2do', '2da'),
(11, '2do', '3ra'),
(12, '2do', '4ta'),
(13, '2do', '5ta'),
(14, '2do', '6ta'),
(15, '3ro', '1ra'),
(16, '3ro', '2da'),
(17, '3ro', '3ra'),
(18, '3ro', '4ta'),
(19, '3ro', '5ta'),
(20, '3ro', '6ta'),
(21, '4to', '1ra'),
(22, '4to', '2da'),
(23, '4to', '3ra'),
(24, '4to', '4ta'),
(25, '4to', '5ta'),
(26, '4to', '6ta'),
(27, '5to', '1ra'),
(28, '5to', '2da'),
(29, '5to', '3ra'),
(30, '5to', '4ta'),
(31, '5to', '5ta'),
(32, '5to', '6ta'),
(33, '6to', '1ra'),
(34, '6to', '2da'),
(35, '6to', '3ra'),
(36, '6to', '4ta'),
(37, '6to', '5ta'),
(38, '6to', '6ta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_guias`
--

CREATE TABLE `curso_guias` (
  `id_curso` int(11) NOT NULL,
  `id_guia` int(11) NOT NULL,
  `dia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso_guias`
--

INSERT INTO `curso_guias` (`id_curso`, `id_guia`, `dia`) VALUES
(3, 1, '0000-00-00'),
(3, 1, '2024-08-20'),
(4, 2, '0000-00-00'),
(4, 2, '2024-08-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `guias`
--

CREATE TABLE `guias` (
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(60) DEFAULT NULL,
  `id_guia` int(11) NOT NULL,
  `carnet` int(11) NOT NULL,
  `dni` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `guias`
--

INSERT INTO `guias` (`nombre`, `apellido`, `id_guia`, `carnet`, `dni`) VALUES
('jose', 'hernandez', 1, 1234, 1234),
('lucas', 'gomez', 2, 4321, 4321);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `presentadores`
--

CREATE TABLE `presentadores` (
  `id_presentacion` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `tabla` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `presentadores`
--

INSERT INTO `presentadores` (`id_presentacion`, `id`, `tabla`) VALUES
(1, 6, 'talleristas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talleristas`
--

CREATE TABLE `talleristas` (
  `nombre` varchar(50) DEFAULT 'no corresponde',
  `apellido` varchar(50) DEFAULT 'no corresponde',
  `id_tallerista` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `talleristas`
--

INSERT INTO `talleristas` (`nombre`, `apellido`, `id_tallerista`) VALUES
('Juan', 'Pérez', 1),
('María', 'González', 2),
('Carlos', 'Rodríguez', 3),
('Ana', 'López', 4),
('Luis', 'Martínez', 5),
('Laura', 'García', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id_turno` int(11) NOT NULL,
  `descripcion` varchar(20) DEFAULT NULL,
  `inicio` time DEFAULT NULL,
  `fin` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id_turno`, `descripcion`, `inicio`, `fin`) VALUES
(1, 'Mañana', '08:00:00', '12:00:00'),
(2, 'Tarde', '13:00:00', '17:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id_actividad`),
  ADD KEY `fk_category` (`id_categoria`),
  ADD KEY `fk_presentacion` (`id_presentacion`);

--
-- Indices de la tabla `actividades_categorias`
--
ALTER TABLE `actividades_categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id_aula`),
  ADD KEY `fk_categoria` (`id_categoria`);

--
-- Indices de la tabla `aula_categorias`
--
ALTER TABLE `aula_categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `cronograma`
--
ALTER TABLE `cronograma`
  ADD PRIMARY KEY (`id_turno`,`fecha`,`id_aula`),
  ADD KEY `fk_act` (`id_actividad`),
  ADD KEY `fk_classroom` (`id_aula`);

--
-- Indices de la tabla `cronograma_cursos`
--
ALTER TABLE `cronograma_cursos`
  ADD PRIMARY KEY (`fecha_hora`,`id_curso`,`id_actividad`),
  ADD KEY `fk_actividad_curso` (`id_actividad`),
  ADD KEY `fk_cronograma_curso` (`id_curso`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indices de la tabla `curso_guias`
--
ALTER TABLE `curso_guias`
  ADD PRIMARY KEY (`id_curso`,`id_guia`,`dia`),
  ADD KEY `fk_guia` (`id_guia`);

--
-- Indices de la tabla `guias`
--
ALTER TABLE `guias`
  ADD PRIMARY KEY (`id_guia`);

--
-- Indices de la tabla `presentadores`
--
ALTER TABLE `presentadores`
  ADD PRIMARY KEY (`id_presentacion`),
  ADD KEY `fk_id_tallerista` (`id`);

--
-- Indices de la tabla `talleristas`
--
ALTER TABLE `talleristas`
  ADD PRIMARY KEY (`id_tallerista`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id_turno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id_actividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `actividades_categorias`
--
ALTER TABLE `actividades_categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id_aula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `aula_categorias`
--
ALTER TABLE `aula_categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `guias`
--
ALTER TABLE `guias`
  MODIFY `id_guia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `presentadores`
--
ALTER TABLE `presentadores`
  MODIFY `id_presentacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `talleristas`
--
ALTER TABLE `talleristas`
  MODIFY `id_tallerista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id_turno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `fk_category` FOREIGN KEY (`id_categoria`) REFERENCES `actividades_categorias` (`id_categoria`),
  ADD CONSTRAINT `fk_presentacion` FOREIGN KEY (`id_presentacion`) REFERENCES `presentadores` (`id_presentacion`);

--
-- Filtros para la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `aula_categorias` (`id_categoria`);

--
-- Filtros para la tabla `cronograma`
--
ALTER TABLE `cronograma`
  ADD CONSTRAINT `fk_act` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id_actividad`),
  ADD CONSTRAINT `fk_aula` FOREIGN KEY (`id_aula`) REFERENCES `aulas` (`id_aula`);

--
-- Filtros para la tabla `cronograma_cursos`
--
ALTER TABLE `cronograma_cursos`
  ADD CONSTRAINT `fk_actividad_curso` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id_actividad`),
  ADD CONSTRAINT `fk_cronograma_curso` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`);

--
-- Filtros para la tabla `curso_guias`
--
ALTER TABLE `curso_guias`
  ADD CONSTRAINT `fk_curso` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`) ON DELETE NO ACTION,
  ADD CONSTRAINT `fk_guia` FOREIGN KEY (`id_guia`) REFERENCES `guias` (`id_guia`);

--
-- Filtros para la tabla `presentadores`
--
ALTER TABLE `presentadores`
  ADD CONSTRAINT `fk_id_curso` FOREIGN KEY (`id`) REFERENCES `talleristas` (`id_tallerista`),
  ADD CONSTRAINT `fk_id_tallerista` FOREIGN KEY (`id`) REFERENCES `cursos` (`id_curso`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
