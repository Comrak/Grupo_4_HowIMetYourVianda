CREATE DATABASE  IF NOT EXISTS `himv` /*!40100 DEFAULT CHARACTER SET utf8mb4*/ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `himv`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: himv
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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `number` int DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `dept` varchar(255) DEFAULT NULL,
  `zipCode` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  KEY `country_id` (`country_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `address_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `address_lbfk3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Casa','Zapiola',21345,2,'b',1428,2,1,6,'2023-01-14 01:43:39','2023-01-14 01:44:39'),(2,'Vacaciones','Almafuerte',4264,2,'b',1246,2,1,6,'2023-01-14 01:45:00','2023-01-14 01:45:00');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'C.A.B.A.',1,'2023-01-13 22:43:14','2023-01-13 22:43:14'),(2,'Provincia Buenos Aires',2,'2023-01-13 22:43:14','2023-01-13 22:43:14');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Argentina','2022-12-29 21:16:44','2022-12-29 21:16:44'),(2,'Brasil','2022-12-29 21:16:44','2022-12-29 21:16:44'),(3,'Colombia','2022-12-29 21:16:44','2022-12-29 21:16:44'),(4,'Chile','2022-12-29 21:16:44','2022-12-29 21:16:44'),(5,'Perú','2022-12-29 21:16:44','2022-12-29 21:16:44'),(6,'México','2022-12-29 21:16:44','2022-12-29 21:16:44');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currency` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ISOCode` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (1,'ARS','Peso Argentino','2022-12-30 00:37:56','2022-12-30 00:37:56'),(2,'BRL','Real Brasilero','2022-12-30 00:37:56','2022-12-30 00:37:56'),(3,'COL','Peso Coombiano','2022-12-30 00:37:56','2022-12-30 00:37:56'),(4,'PER','Sol Peruano','2022-12-30 00:37:56','2022-12-30 00:37:56');
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethod`
--

DROP TABLE IF EXISTS `paymentmethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethod` (
  `id` int NOT NULL AUTO_INCREMENT,
  `method` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethod`
--

LOCK TABLES `paymentmethod` WRITE;
/*!40000 ALTER TABLE `paymentmethod` DISABLE KEYS */;
INSERT INTO `paymentmethod` VALUES (1,'Efectivo','2022-12-30 00:40:08','2022-12-30 00:40:08'),(2,'Tarjeta Débito','2022-12-30 00:40:08','2022-12-30 00:40:08'),(3,'Tarjeta Crédito','2022-12-30 00:40:08','2022-12-30 00:40:08'),(4,'Mercado Pago','2022-12-30 00:40:08','2022-12-30 00:40:08'),(5,'Modo','2022-12-30 00:40:08','2022-12-30 00:40:08');
/*!40000 ALTER TABLE `paymentmethod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentstatus`
--

DROP TABLE IF EXISTS `paymentstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentstatus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentstatus`
--

LOCK TABLES `paymentstatus` WRITE;
/*!40000 ALTER TABLE `paymentstatus` DISABLE KEYS */;
INSERT INTO `paymentstatus` VALUES (1,'En proceso','2022-12-30 00:41:42','2022-12-30 00:41:42'),(2,'Aprobado','2022-12-30 00:41:42','2022-12-30 00:41:42'),(3,'Rechazado','2022-12-30 00:41:42','2022-12-30 00:41:42');
/*!40000 ALTER TABLE `paymentstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'/img/productos/img_1672454335604.jpeg',124,'Pizza','Exquisita Pizza               \r\n                    \r\n                    \r\n                    \r\n                    ','                                                                                        pizza,amor,tomate','2022-12-31 00:57:40','2023-01-18 15:28:15'),(2,'/img/productos/img_1672452123846.jpeg',15212,'ensaladas','ensaladas','ensaladas,buena','2022-12-31 02:02:03','2022-12-31 02:02:03'),(4,'/img/productos/img_1672455594881.jpeg',12,'Milanesa','Milanesa Napolitana\r\n                    \r\n                    ','                                            Mila,Napo','2022-12-31 02:59:54','2023-01-02 16:58:29');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20221226023755-create-user-rol.js'),('20221226024123-create-country.js'),('20221226024202-create-city.js'),('20221226024256-create-transaction-status.js'),('20221226024506-create-transaction-type.js'),('20221226024559-create-currency.js'),('20221226024708-create-payment-method.js'),('20221226024812-create-payment-status.js'),('20221227022010-create-address.js'),('20221227022258-create-taxes.js'),('20221227023141-create-users.js'),('20221227023336-create-products.js'),('20221227023923-create-transactions.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax`
--

DROP TABLE IF EXISTS `tax`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tax` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tax` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `rate` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax`
--

LOCK TABLES `tax` WRITE;
/*!40000 ALTER TABLE `tax` DISABLE KEYS */;
INSERT INTO `tax` VALUES (2,'IVA','Impuesto al Valor Agregado',0.21,'2022-12-30 00:44:03','2022-12-30 00:44:03');
/*!40000 ALTER TABLE `tax` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactionstatus`
--

DROP TABLE IF EXISTS `transactionstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactionstatus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactionstatus`
--

LOCK TABLES `transactionstatus` WRITE;
/*!40000 ALTER TABLE `transactionstatus` DISABLE KEYS */;
INSERT INTO `transactionstatus` VALUES (1,'En Proceso','2022-12-30 00:46:33','2022-12-30 00:46:33'),(2,'Entregada','2022-12-30 00:46:33','2022-12-30 00:46:33'),(3,'Anulada','2022-12-30 00:46:33','2022-12-30 00:46:33');
/*!40000 ALTER TABLE `transactionstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactiontype`
--

DROP TABLE IF EXISTS `transactiontype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactiontype` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactiontype`
--

LOCK TABLES `transactiontype` WRITE;
/*!40000 ALTER TABLE `transactiontype` DISABLE KEYS */;
INSERT INTO `transactiontype` VALUES (1,'Viandas','2022-12-30 00:47:22','2022-12-30 00:47:22');
/*!40000 ALTER TABLE `transactiontype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobilePhone` varchar(255) DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirmPassword` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `address_id` (`address_id`),
  KEY `role_id` (`role_id`),
  KEY `country_id` (`country_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `userrol` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_3` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'magdalena','1974-01-02','magdalena@dh.com','4654654234',NULL,1,1,'$2a$10$bWL42cLxyHqDW99qqMEdaeFr6lbSo6jmsrRGNaw7ZUA/46x5ZUFqC','$2a$10$TI0R9nT/sy31MsygCnaWCuGjHZaoPid/PAhE3ZRsKAR1picrDZENO','1672359578521_img.jpeg','2022-12-30 00:19:39','2022-12-30 00:19:39'),(2,'Edgar','1974-02-02','edgar@dh.com','465432432465',NULL,2,2,'$2a$10$dnVAHYL1lbeH0bv5TBUVruiSazEUoM/QuC7IOYW1.Bt4frDcBUnM6','$2a$10$x8YUXaYIXkAimMnXiTIopOBzwOB8QtOLXsA9rb1NnfSBO14ZDjMkS','1672359644369_img.jpeg','2022-12-30 00:20:45','2022-12-30 00:20:45'),(3,'ariel','1980-12-02','ariel@dh.com','46543246654',NULL,1,1,'$2a$10$OZmCVyOyeSyfEPRHz7kIOeIW55ZGHbMx5Lw0xhZoH8TcKy.Z55PLK','$2a$10$Wz4K1JshD5Nf20TSw7BYOeSDVIiGC8Quad2ONoVyYJK1nonINKWT.','1672373666712_img.jpeg','2022-12-30 04:14:26','2022-12-30 04:14:26'),(4,'Carlos','2000-01-01','carlos@dh.com','65423423464654',NULL,1,1,'$2a$10$IBMuwQCe1yu3lniGK7bWaeBzXZKfOIcTYNBlBSWM798gQ1XyQI0n6','$2a$10$pb0C9UFQNP1BIRh0fjQYluJ2wwAHkRGkn/JBgVl50fKg9ZP.kFRaO','1672597477371_img.jpeg','2023-01-01 18:24:38','2023-01-01 18:24:38'),(5,'Lucas','1980-01-01','lucas@dh.com','546123454564',NULL,1,1,'$2a$10$BfBRewd9/rOJqdIGcHnu1ucizFrGu0qbdlqil3lOdz9jzQSrUKQS2','$2a$10$HFWXVvkbXuceBFVAVUuakOVOc3Q97yjuKyv.tJPofMG0kCxRF/jLK','1672608603989_img.jpeg','2023-01-01 21:30:04','2023-01-01 21:30:04'),(6,'caro','1985-10-01','caro@dh.com','4654212312465',NULL,1,1,'$2a$10$10CtBcxpfm0Hrvk9Jl0KEeztUmPYL/TdlYMdwwJFLPPG2Fot6nYzC','$2a$10$6WAxnPQtSLnIof.N/xwdpO36CHXhKE/WylliOPVsWoGMZlDz/66DC','1674055332491_img.jpeg','2023-01-02 15:55:14','2023-01-18 15:22:12'),(8,'NatiAdmin','0001-10-10','NatiAdmin@DH.com','1111111111111',NULL,1,2,'$2a$10$vY125HAzClIqwSOaBIMPQ.8gWtjbYUcqqo3x7p.ZgsAPI2TP7CgUG','$2a$10$BBxSNoSAmTY.jzaORvM95uEC4th3kbjx/FXNYfmKr0AnVOilYSLLa','1672970131665_img.png','2023-01-06 01:55:31','2023-01-06 01:55:31'),(9,'NatiUser','0001-01-01','NatiUser@DH.com','1111111111111',NULL,2,1,'$2a$10$/YXAhY1h3g2GenNbDw4mV.nBO6BmAwh756gsEmeocORXCwO1iVDE2','$2a$10$5etUezXoKn976HXjeGFM8OF4untqkzwVDcetrFAXnV7gJZyQIe9WC','1672970196008_img.png','2023-01-06 01:56:36','2023-01-06 01:56:36'),(10,'ariel','1985-02-12','arielhl@dh.com','454321345465',NULL,1,1,'$2a$10$/yH7rT8N4RmmDXL1.ykwIu9V.H/skD7YFmKa9l0TevM3qB9LJ4I/6','$2a$10$/finNyod1P.oNIZ.rXANOO7lRBdYQ3rNZM8mc.LCUnzlVvlw/UKkO','1673652133696_img.jpeg','2023-01-13 23:22:13','2023-01-13 23:22:13');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userrol`
--

DROP TABLE IF EXISTS `userrol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userrol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userrol`
--

LOCK TABLES `userrol` WRITE;
/*!40000 ALTER TABLE `userrol` DISABLE KEYS */;
INSERT INTO `userrol` VALUES (1,'admin','Administrador','2022-12-29 21:18:52','2022-12-29 21:18:52'),(2,'cliente','Cliente','2022-12-29 21:18:52','2022-12-29 21:18:52');
/*!40000 ALTER TABLE `userrol` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-18 18:38:52
