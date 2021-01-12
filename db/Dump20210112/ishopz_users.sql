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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT 'User',
  `phonenumber` varchar(255) DEFAULT '0',
  `email` varchar(255) DEFAULT 'none@hddshop.com',
  `address` varchar(255) DEFAULT 'Hồ Chí Minh',
  `image` varchar(255) DEFAULT '/img/avatar-default.jpg',
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT '1',
  `isBanned` int(11) DEFAULT '0',
  `isDeleted` int(11) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('247610d1-8342-4cb3-aaf2-63691b8f991b','Người dùng',NULL,'regis2@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','lovinu99','$2b$10$Cj/5z27xTF3NsbcKwll5QeoNI1U9G/64E38DsMLxiJl7OLUW/R0Dy',1,0,0,'2021-01-04 19:57:29','2021-01-04 20:19:47'),('2a10606b-5db1-435b-b963-2e73c5620113','Người dùng',NULL,'hdanh26041999@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','huydanh99','$2b$10$W6lIIbTtUPuyN9mpLEQgYuvKGXvpvy2fa/ZkgOjX3Y6g6GGOKkjaK',1,0,0,'2021-01-07 22:43:37','2021-01-07 22:45:05'),('3ad5f181-f0f7-4433-8819-6c428f12454a','Danh Huy N','0123456789','nhdanh260499@gmail.com','TPHCM','/img/uploads/107569358_2663119543935717_6663550829889460571_n.png','1712318','$2b$10$BPoDdwWTwbFbpmvSZ2gaVeIL03HzBLtWHDZJMDtYmfbvN5r/iC2Am',1,0,0,'2021-01-03 21:19:28','2021-01-05 00:57:56'),('484c7156-697d-44ec-a2a3-011fee1de809','Danh dep giai','0123456789','nhdanh2604@gmail.com','TPHCM KHTN','/img/avatar-default.jpg','huydanh','$2b$10$09ueTCb7GEcygNtM0VHwAeZa0joaRqKTC/6AYSpY02iy2m.BdsOVu',1,0,0,'2021-01-05 00:10:57','2021-01-07 22:34:53'),('53fff72d-93e5-4763-99c8-fd468f119d9a','Người dùng',NULL,'email02@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','user003','$2b$10$eyN3zJ3e0NWI7t3mMXlWwuEAERRINqoPta51dyAz19b2xttmbytvm',1,0,0,'2021-01-04 19:55:44','2021-01-04 19:55:44'),('78a8406b-114b-4ad5-b6e2-d90120d48212','QUẢN TRỊ VIÊN 001','0123456789','Admin001@gmail.com','TPHCM KHTN','/img/avatar-default.jpg','admin','$2b$10$FP.D1pDX0WpgQH4bM0Ensuzeel3s0csby90WtfNLaCxRxMZQICY8e',0,0,0,'2021-01-03 13:55:04','2021-01-04 12:41:59'),('7bcd5a43-880d-48a9-a3e6-24579042f9b9','Người dùng',NULL,'regis@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','register01','$2b$10$FkAb8pMFh1fN4F8Kygf3sOcfQdDqd1Ge5xv7pcPmXdexHZfkj3aYa',1,0,0,'2021-01-04 19:57:12','2021-01-04 19:57:12'),('8f335620-7d7d-4fcb-9cf8-5deb6449fbe3','Nguyễn Hữu Hòa','0982327118','nguyenhuuhoa1998@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','hhpr98','$2b$10$06WHhXUbWrSicSqlOptu3ef.LGfnP2fXG3ZgqdrMB1G/bHjJCx6VC',1,0,0,'2021-01-03 13:55:35','2021-01-03 13:55:35'),('acd7d975-f7a7-4a9f-8db0-bb9ee6e343ae','Người dùng',NULL,'email1@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','im_user1','$2b$10$sKbWnDunMDsIomZJAc.6keorV8.pSdKgHR/VLT6Fk.8bNqHiVBlVy',1,0,0,'2021-01-04 19:54:57','2021-01-04 19:54:57'),('c873b9ac-dc32-4269-8375-d8904b3be9ee','Người dùng',NULL,'email2@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','user002','$2b$10$S1rMufh.CxUnTkVmu/j59up5Dww6LQI0sfQIh5/kp8yze5lqH4wp.',1,0,0,'2021-01-04 19:55:17','2021-01-04 19:55:17'),('e5d109f7-a784-488e-b21f-10356ee58273','Người dùng',NULL,'email02@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','user004','$2b$10$yn5hAHhKxlg./m/MVtFLd.JYrf1RSXDRfXymonx3/q1m4lpMSgjVC',1,0,0,'2021-01-04 19:56:49','2021-01-04 19:56:49'),('ed41855d-7f41-41d9-962f-df3c29ce4acc','Người dùng',NULL,'hdanh26041999@gmail.com','Hồ Chí Minh','/img/avatar-default.jpg','danhhuy','$2b$10$YOGoVJlgJWheUr9AnUA2R.qoot6DW9Gq4htTZTuAKBomvG62LLEXG',1,232,0,'2021-01-04 23:17:43','2021-01-05 00:09:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-12 22:12:51
