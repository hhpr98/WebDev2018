-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: den1.mysql2.gear.host    Database: ishopz
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `originPrice` bigint(20) DEFAULT NULL,
  `salePrice` bigint(20) DEFAULT NULL,
  `salePercent` int(11) DEFAULT '0',
  `quantity` int(11) DEFAULT '0',
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `branch` varchar(255) DEFAULT 'Chưa cập nhật',
  `image1` varchar(255) DEFAULT '/img/product-default.jpg',
  `image2` varchar(255) DEFAULT '/img/product-default.jpg',
  `image3` varchar(255) DEFAULT '/img/product-default.jpg',
  `size` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `specification1` varchar(255) DEFAULT 'Chưa cập nhật',
  `specification2` varchar(255) DEFAULT 'Chưa cập nhật',
  `specification3` varchar(255) DEFAULT 'Chưa cập nhật',
  `viewCount` int(11) DEFAULT '0',
  `isDeleted` int(11) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('0e660737-1cb9-4b6b-b394-ee691a9088e7','Tai nghe V17',125000,125000,0,100,'Không có mô tả','3','Không','/img/uploads/pokemon.png','/img/uploads/doraemon.jpeg','/img/uploads/gao.webp','M','Trắng','nhỏ gọn','internet connective','Đang cập nhật',41,0,'2020-12-27 22:02:25','2021-01-04 19:46:09'),('44ab0c3d-6d57-4243-8872-f9f6930117e2','Quần K9',270000,260000,0,100,'Cam','1','Chưa','/img/product-1.jpg','/img/product-2.jpg','/img/product-3.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',11,0,'2020-12-06 18:38:24','2021-01-07 21:59:33'),('4aaf4502-6d27-4655-ad17-297821176172','Mũ len m11',170000,160000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','4','Chưa cập nhật','/img/product-2.jpg','/img/product-5.jpg','/img/product-6.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',8,0,'2020-12-06 18:38:23','2020-12-20 21:39:42'),('5a8da5f6-0cd0-4227-99dd-3cf281aaeacc','Áo phông chống nắng',210000,200000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','2','Chưa cập nhật','/img/product-4.jpg','/img/product-3.jpg','/img/product-6.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',0,0,'2020-12-06 18:38:23','2020-12-06 18:38:23'),('6dcf55ee-1dcd-4a44-9b14-ddea82a56e9a','Áo ngắn tay',310000,300000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','4','Chưa cập nhật','/img/product-9.jpg','/img/product-5.jpg','/img/product-2.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',0,0,'2020-12-06 18:38:25','2020-12-06 18:38:25'),('73b3ee07-e789-40fa-97c0-0c30c6717792','sản phẩm này không bán',100000,99000,0,10,'Không có','1','Không','/img/product-default.jpg','/img/product-6.jpg','/img/product-3.jpg','M','Trắng','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',13,0,'2020-12-06 18:38:24','2020-12-30 22:15:12'),('88ad8136-3ae7-40be-aaed-63bfc788de80','Sản phẩm 5',230000,220000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','1','Chưa cập nhật','/img/product-5.jpg','/img/product-2.jpg','/img/product-2.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',0,0,'2020-12-06 18:38:24','2020-12-06 18:38:24'),('92d43e18-31a8-4c24-aec0-4f2de06f9355','Sản phẩm 6',250000,240000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','1','Chưa cập nhật','/img/product-6.jpg','/img/product-6.jpg','/img/product-3.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',2,0,'2020-12-06 18:38:24','2020-12-21 20:26:20'),('97e189ea-95b3-4388-92ae-a794445998b9','Sản phẩm 3',190000,180000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','3','Chưa cập nhật','/img/product-3.jpg','/img/product-1.jpg','/img/product-4.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',3,0,'2020-12-06 18:38:23','2020-12-07 20:50:01'),('bb387c73-8927-4a2c-a076-101359ed437a','Sản phẩm 1',150000,140000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','3','Chưa cập nhật','/img/product-1.jpg','/img/product-2.jpg','/img/product-4.jpg','M','Đen','Chất liệu coton','Mát vào mùa hè, ấm vào mùa đông','Giá cả phải chăng',0,0,'2020-12-06 18:38:20','2020-12-06 18:38:20'),('bb387c73-8927-4a2c-a076-101359ed437c','Thêm',150000,150000,0,100,'Cam kết chính hãng, bền, rẻ, đẹp','2','Chưa cập nhật','/img/product-1.jpg','/img/product-2.jpg','/img/product-4.jpg','M','Đỏ','Chất liệu tốt','Mát vào mùa hè, ấm vào mùa đông','Freeship nội thành',0,0,'2020-12-06 19:38:20','2020-12-07 20:49:07');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-12 22:12:44
