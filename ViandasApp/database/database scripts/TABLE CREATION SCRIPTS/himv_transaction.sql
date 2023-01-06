-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: Localhost    Database: himv
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `status_id` int DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  `currency_id` int DEFAULT NULL,
  `productQuantity` int DEFAULT NULL,
  `productPrice` decimal(10,0) DEFAULT NULL,
  `productTax` decimal(10,0) DEFAULT NULL,
  `transactionAmount` decimal(10,0) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `deliveryCharge` decimal(10,0) DEFAULT NULL,
  `paymentMethod_id` int DEFAULT NULL,
  `paymentStatus_id` int DEFAULT NULL,
  `transactionPaymentId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  KEY `status_id` (`status_id`),
  KEY `type_id` (`type_id`),
  KEY `currency_id` (`currency_id`),
  KEY `paymentMethod_id` (`paymentMethod_id`),
  KEY `paymentStatus_id` (`paymentStatus_id`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `transactionstatus` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_4` FOREIGN KEY (`type_id`) REFERENCES `transactiontype` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_5` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_6` FOREIGN KEY (`paymentMethod_id`) REFERENCES `paymentmethod` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_7` FOREIGN KEY (`paymentStatus_id`) REFERENCES `paymentstatus` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02 14:27:40
