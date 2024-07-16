-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 05:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `std_info_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `std_school_tbl`
--

CREATE TABLE `std_school_tbl` (
  `std_id` char(10) NOT NULL,
  `sch_name` varchar(100) NOT NULL,
  `sch_province` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `std_school_tbl`
--

INSERT INTO `std_school_tbl` (`std_id`, `sch_name`, `sch_province`) VALUES
('6720210035', 'StreePhananga', 'Phangnga'),
('6720210036', 'Thanksin', 'Shongkra'),
('6720210037', 'Thanksin', 'Phathalung');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `std_school_tbl`
--
ALTER TABLE `std_school_tbl`
  ADD PRIMARY KEY (`std_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
