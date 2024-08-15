-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2024 a las 19:14:43
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades_categorias`
--

CREATE TABLE `actividades_categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aula_categorias`
--

CREATE TABLE `aula_categorias` (
  `id_categoria` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cronograma`
--

CREATE TABLE `cronograma` (
  `id_actividad` int(11) NOT NULL,
  `turno` varchar(20) NOT NULL,
  `fecha` date NOT NULL,
  `id_aula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL,
  `curso` varchar(5) DEFAULT NULL,
  `division` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_guias`
--

CREATE TABLE `curso_guias` (
  `id_curso` int(11) NOT NULL,
  `id_guia` int(11) NOT NULL,
  `dia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `presentadores`
--

CREATE TABLE `presentadores` (
  `id_presentacion` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `tabla` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id_actividad`),
  ADD KEY `fk_presentacion` (`id_presentacion`),
  ADD KEY `fk_category` (`id_categoria`);

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
  ADD PRIMARY KEY (`id_aula`,`fecha`,`turno`),
  ADD KEY `fk_act` (`id_actividad`);

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
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades_categorias`
--
ALTER TABLE `actividades_categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id_aula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `aula_categorias`
--
ALTER TABLE `aula_categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `guias`
--
ALTER TABLE `guias`
  MODIFY `id_guia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `talleristas`
--
ALTER TABLE `talleristas`
  MODIFY `id_tallerista` int(11) NOT NULL AUTO_INCREMENT;

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
-- Filtros para la tabla `curso_guias`
--
ALTER TABLE `curso_guias`
  ADD CONSTRAINT `fk_curso` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`),
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
