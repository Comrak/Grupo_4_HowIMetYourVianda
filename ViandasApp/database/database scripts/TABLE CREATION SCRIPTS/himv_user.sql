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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) DEFAULT NULL,
  `birthDate` datetime DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'magdalena','1974-01-02 00:00:00','magdalena@dh.com','4654654234',NULL,1,1,'$2a$10$bWL42cLxyHqDW99qqMEdaeFr6lbSo6jmsrRGNaw7ZUA/46x5ZUFqC','$2a$10$TI0R9nT/sy31MsygCnaWCuGjHZaoPid/PAhE3ZRsKAR1picrDZENO','1672359578521_img.jpeg','2022-12-30 00:19:39','2022-12-30 00:19:39'),(2,'Edgar','1974-02-02 00:00:00','edgar@dh.com','465432432465',NULL,2,2,'$2a$10$dnVAHYL1lbeH0bv5TBUVruiSazEUoM/QuC7IOYW1.Bt4frDcBUnM6','$2a$10$x8YUXaYIXkAimMnXiTIopOBzwOB8QtOLXsA9rb1NnfSBO14ZDjMkS','1672359644369_img.jpeg','2022-12-30 00:20:45','2022-12-30 00:20:45'),(3,'ariel','1980-12-02 00:00:00','ariel@dh.com','46543246654',NULL,1,1,'$2a$10$OZmCVyOyeSyfEPRHz7kIOeIW55ZGHbMx5Lw0xhZoH8TcKy.Z55PLK','$2a$10$Wz4K1JshD5Nf20TSw7BYOeSDVIiGC8Quad2ONoVyYJK1nonINKWT.','1672373666712_img.jpeg','2022-12-30 04:14:26','2022-12-30 04:14:26'),(4,'Carlos','2000-01-01 00:00:00','carlos@dh.com','65423423464654',NULL,1,1,'$2a$10$IBMuwQCe1yu3lniGK7bWaeBzXZKfOIcTYNBlBSWM798gQ1XyQI0n6','$2a$10$pb0C9UFQNP1BIRh0fjQYluJ2wwAHkRGkn/JBgVl50fKg9ZP.kFRaO','1672597477371_img.jpeg','2023-01-01 18:24:38','2023-01-01 18:24:38'),(5,'Lucas','1980-01-01 00:00:00','lucas@dh.com','546123454564',NULL,1,1,'$2a$10$BfBRewd9/rOJqdIGcHnu1ucizFrGu0qbdlqil3lOdz9jzQSrUKQS2','$2a$10$HFWXVvkbXuceBFVAVUuakOVOc3Q97yjuKyv.tJPofMG0kCxRF/jLK','1672608603989_img.jpeg','2023-01-01 21:30:04','2023-01-01 21:30:04'),(6,'caro','1980-01-01 00:00:00','caro@dh.com','4654212312465',NULL,1,1,'$2a$10$u8ugh/5TgqQvb4rgnFZuXuNmGFHJT5wSnRA4Y4tsFi1RcAElIFMnu','$2a$10$HZS0fVkBPE89pc/y.zbtkuYWSiym/h30a5Nuz5JO8uPgcly/ceBEy','1672674914443_img.jpeg','2023-01-02 15:55:14','2023-01-02 15:55:14'),(8, 'NatiAdmin', '0001-10-10 00:00:00', 'NatiAdmin@DH.com', '1111111111111', NULL, 1, 2, '$2a$10$vY125HAzClIqwSOaBIMPQ.8gWtjbYUcqqo3x7p.ZgsAPI2TP7CgUG', '$2a$10$BBxSNoSAmTY.jzaORvM95uEC4th3kbjx/FXNYfmKr0AnVOilYSLLa', '1672970131665_img.png', '2023-01-06 01:55:31', '2023-01-06 01:55:31'),(9, 'NatiUser', '0001-01-01 00:00:00', 'NatiUser@DH.com', '1111111111111', NULL, 2, 1, '$2a$10$/YXAhY1h3g2GenNbDw4mV.nBO6BmAwh756gsEmeocORXCwO1iVDE2', '$2a$10$5etUezXoKn976HXjeGFM8OF4untqkzwVDcetrFAXnV7gJZyQIe9WC', '1672970196008_img.png', '2023-01-06 01:56:36', '2023-01-06 01:56:36');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02 14:27:41
