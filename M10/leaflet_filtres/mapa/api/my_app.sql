-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Temps de generació: 18-03-2021 a les 18:41:29
-- Versió del servidor: 10.4.17-MariaDB
-- Versió de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `my_app`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `address` text NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `kind_food` set('Catalana','Mediterrània','Vegana','Ètnica','Italiana','Francesa','Vegetariana','Mexicana') NOT NULL,
  `photo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `name`, `address`, `lat`, `lng`, `kind_food`, `photo`) VALUES
(1, 'La millor cuina', 'Carrer Primer, 1 08001 Barcelona', 41.4155, 2.1743, 'Catalana,Vegana', 'imatge1.png'),
(2, 'La cuina de casa', 'Carrer Primer, 2 08002 Barcelona', 41.4012, 2.1948, 'Catalana', 'imatge2.png'),
(3, 'Cuina de mercat', 'Carrer Segon, 3 08003 Barcelona', 41.4127, 2.1453, 'Vegetariana', 'imatge3.png'),
(4, 'Cal Sisquet', 'Carrer Tercer, 4 08004 Barcelona', 41.4013, 2.1835, 'Catalana', 'imatge4.png'),
(5, 'Kuines del món', 'Carrer Quart, 5 08005 Barcelona', 41.3884, 2.1506, 'Mexicana', 'imatge5.png'),
(6, 'La pasta', 'Carrer Cinquè, 6 08006 Barcelona', 41.4084, 2.1672, 'Italiana', 'imatge6.png'),
(7, 'Veggi', 'Carrer Sisè, 7 08007 Barcelona', 41.3735, 2.1619, 'Catalana,Vegana,Vegetariana', 'imatge7.png'),
(8, 'La cuisine', 'Carrer Setè, 8 08008 Barcelona', 41.3775, 2.1426, 'Francesa', 'imatge8.png'),
(9, 'Pasta en V', 'Carrer Novè, 9 08009 Barcelona', 41.3805, 2.178, 'Italiana,Vegetariana', 'imatge9.png'),
(10, 'Menja bé', 'Carrer Desè, 10 08010 Barcelona', 41.4077, 2.1447, 'Francesa', 'imatge10.png');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
