-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: demo_web
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `about`
--

DROP TABLE IF EXISTS `about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about`
--

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
INSERT INTO `about` VALUES (1,'Giới thiệu về Viện:','Viện Phát triển Khoa học Công nghệ và Giáo dục là tổ chức khoa học, có tư cách pháp nhân và hoạt động theo Luật Khoa học và Công nghệ năm 2013, Nghị định số 08/2014/NĐ-CP ban hành ngày 27/01/2014 của Chính phủ quy định chi tiết và hướng dẫn thi hành một số điều của Luật Khoa học và Công nghệ, Thông tư số 04/2014/TT-BKHCN ban hành ngày 31/03/2014 của Bộ Khoa học và Công nghệ hướng dẫn điều kiện thành lập và đăng ký hoạt động của tổ chức khoa học và công nghệ, văn phòng đại diện, chi nhánh của tổ chức khoa học và công nghệ.'),(2,'Chức năng:','Tập hợp các nhà khoa học, các chuyên gia có kinh nghiệm và cán bộ có trình độ chuyên môn đa ngành, nhiệt huyết, tự nguyện tham gia nghiên cứu ứng dụng khoa học công nghệ và kỹ thuật vào môi trường giáo dục đào tạo nhằm phát triển năng lực quản trị, năng lực sáng tạo của các đối tượng có nhu cầu, nâng cao năng lực cạnh tranh đáp ứng nhu cầu phát triển kinh tế xã hội.'),(3,'Nhiệm vụ:','- Nghiên cứu và ứng dụng khoa học kỹ thuật và công nghệ vào các chương trình giáo dục đào tạo phù hợp với môi trường xã hội hóa. Nghiên cứu việc nâng cao kỹ thuật dạy nghề, quy hoạch thiết kế kiến trúc, xây dựng, giao thông vận tải; xây dựng vận hành các hệ thống quản lý theo tiêu chuẩn ISO, tự động hóa, phát triển năng lực sáng tạo khoa học và công nghệ trước nhu cầu cấp bách của xã hội về công nghệ sản xuất các thiết bị hỗ trợ khoa học công nghệ đạt chuẩn phục vụ đa ngành nghề và cuộc sống, bảo vệ môi trường.\n- Tư vấn, truyền thông phổ biến kiến thức, đào tạo tập huấn, chuyển giao công nghệ, phản biện khoa học, biên soạn sách, tài liệu; thực hiện các đề tài, dự án, chương trình và tiêu chuẩn, quy chuẩn, đánh giá chất lượng công nghệ quản lý giáo dục và dạy nghề vào lĩnh vực nghiên cứu như trên.\n- Hợp tác với các tổ chức, cá nhân trong và ngoài nước để thực hiện các nhiệm vụ của Viện.\n');
/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'Bộ Khoa học và Công nghệ cập nhật phiên bản mới của Khung Kiến trúc Chính phủ Số Việt Nam','Bộ Khoa học và Công nghệ (KH&CN) vừa chính thức ban hành Khung Kiến trúc Chính phủ số Việt Nam, phiên bản 4.0. Bản cập nhật này sẽ là cơ sở quan trọng giúp các bộ, ngành, địa phương điều chỉnh khung kiến trúc số của mình cho phù hợp với thực tiễn, hướng tới sự kết nối và liên thông hiệu quả.','/src/assets/images/Blog1.jpg','2025-06-27 00:47:27'),(2,'Bộ Khoa học và Công nghệ công bố 5 giá trị cốt lõi, 4 phương châm hành động','Bộ trưởng Nguyễn Mạnh Hùng đã chính thức công bố 5 giá trị cốt lõi và 4 phương châm hành động của Bộ Khoa học và Công nghệ, khẳng định đây là nền tảng vững chắc cho mọi hoạt động của Bộ trong thời gian tới.','/src/assets/images/Blog2.jpg','2025-06-27 00:47:27'),(3,'tin tuc','Bộ Khoa học và Công nghệ cập nhật phiên bản mới của Khung Kiến trúc Chính phủ Số Việt Nam\nBộ Khoa học và Công nghệ (KH&CN) vừa chính thức ban hành Khung Kiến trúc Chính phủ số Việt Nam, phiên bản 4.0. Bản cập nhật này sẽ là cơ sở quan trọng giúp các bộ, ngành, địa phương điều chỉnh khung kiến trúc số của mình cho phù hợp với thực tiễn, hướng tới sự kết nối và liên thông hiệu quả','','2025-06-28 11:51:26');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'aaaa','2423432','aaa@gmail.com','aaaa','2025-06-26 00:43:50');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homepage_banner`
--

DROP TABLE IF EXISTS `homepage_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homepage_banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homepage_banner`
--

LOCK TABLES `homepage_banner` WRITE;
/*!40000 ALTER TABLE `homepage_banner` DISABLE KEYS */;
INSERT INTO `homepage_banner` VALUES (1,'Chào mừng quý khách đã đến thăm ISED.','Viện Phát triển Khoa học Công nghệ và Giáo dục.','/src/assets/images/banner.jpg');
/*!40000 ALTER TABLE `homepage_banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homepage_units`
--

DROP TABLE IF EXISTS `homepage_units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homepage_units` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homepage_units`
--

LOCK TABLES `homepage_units` WRITE;
/*!40000 ALTER TABLE `homepage_units` DISABLE KEYS */;
INSERT INTO `homepage_units` VALUES (1,'Trung tâm Đào tạo và Ứng dụng Chuyển đổi số','/src/assets/images/DTC_logo.jpg','https://ised.edu.vn/dtc/index.php');
/*!40000 ALTER TABLE `homepage_units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'Đề án 1 triệu ắc quy xanh - Hướng đi mới trong phát triển, bảo vệ môi trường bền vững','Trước thực trạng ô nhiễm môi trường do ắc quy, axit chì thải gây ra ngày càng nghiêm trọng, Viện Phát triển Khoa học Công nghệ và Giáo Dục, phối hợp cùng Tiến sĩ Dương Văn Sinh, chính thức triển khai Đề án “1 triệu bình ắc quy xanh”.','/src/assets/images/News1.jpg','2025-06-27 00:55:08'),(2,'Hợp tác với Alibaba Việt Nam hỗ trợ doanh nghiệp chuẩn hóa hàng hóa, tham gia thương mại điện tử và chuỗi cung ứng toàn cầu','Nhằm thúc đẩy sự phát triển của các doanh nghiệp Việt Nam trên thị trường thương mại điện tử và chuỗi cung ứng toàn cầu, Viện Phát triển Khoa học Công nghệ và Giáo dục đã làm việc với Alibaba Việt Nam để hỗ trợ các doanh nghiệp trong việc chuẩn hóa hàng hóa theo các tiêu chuẩn quốc tế vào ngày 18/02/2025.','/src/assets/images/News2.jpg','2025-06-27 00:55:08'),(3,'Viện Phát triển Khoa học Công nghệ và Giáo dục thăm và làm việc với Trường THPT Cần Thạnh','Ngày 05/08/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục (ISED) đã có chuyến thăm và làm việc với Ban Giám hiệu Trường THPT Cần Thạnh (Huyện Cần Giờ, Thành phố Hồ Chí Minh).','/src/assets/images/News3.jpg','2025-06-27 00:55:08'),(4,'Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công nghệ và Giáo dục theo tinh thần của UNESCO','Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục phối hợp cùng Trung tâm UNESCO Khoa học, Công nghệ và Tư vấn đầu tư phát triển đã tổ chức Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công nghệ và Giáo dục theo tinh thần của UNESCO.','/src/assets/images/News4.jpg','2025-06-27 00:55:08'),(5,'Ký kết biên bản ghi nhớ hợp tác với Công ty TNHH MTV Thương mại Dịch vụ CHUYÊN TÂM','Vào ngày 15/03/2024, Trung tâm Đào tạo và Chuyển giao công nghệ (T3C) đã tiến hành ký biên bản ghi nhớ hợp tác với Công ty TNHH MTV Thương mại Dịch vụ CHUYÊN TÂM (Chuyên Tâm).','/src/assets/images/News5.jpg','2025-06-27 00:55:08'),(6,'Lễ ra mắt Trung tâm Đào tạo và Chuyển giao công nghệ (T3C)','Trong không khí hân hoan chuẩn bị chào đón năm Giáp Thìn 2024, vào sáng ngày 27/01/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục đã tổ chức lễ ra mắt Trung tâm Đào tạo và Chuyển giao công nghệ trực thuộc Viện.','/src/assets/images/News6.jpg','2025-06-27 00:55:08');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Đào tạo, nâng cao kiến thức và năng lực chuyên môn','Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn, sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.','','2025-06-25 00:33:02'),(2,'Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền','Nhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các tổ chức, cá nhân khác nhau. Nhãn hiệu bao gồm nhãn hiệu thông thường, nhãn hiệu tập thể, nhãn hiệu chứng nhận, nhãn hiệu liên kết và nhãn hiệu nổi tiếng.','','2025-06-25 00:33:02'),(3,'Dịch vụ chứng nhận ISO 9001:2015','Để đạt được chứng nhận ISO 9001:2015, tổ chức phải hoàn thành một quá trình đánh giá và xác minh của một tổ chức độc lập bên thứ 3 để chứng minh rằng hệ thống quản lý chất lượng của doanh nghiệp mình đáp ứng được các yêu cầu của tiêu chuẩn ISO 9001.','','2025-06-25 00:33:02'),(9,'KHCN','Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền\nNhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các tổ chức, cá nhân khác nhau. Nhãn hiệu bao gồm nhãn hiệu thông thường, nhãn hiệu tập thể, nhãn hiệu chứng nhận, nhãn hiệu liên kết và nhãn hiệu nổi tiếng','','2025-06-28 11:54:40');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'user1','user1@gmail.com','$2b$10$C.bUiZdItToRCubZMUVux.2eBo99RW6LxwnbpR9iOhkdZT.9umzE6','user'),(3,'admin','admin@ised.vn','$2b$10$ROYKjzGAKbDtTSMnk0GmWONDaE6Ey3.795hx19I6QKa1ZDYGnO1ku','admin'),(4,'user2','user2@gmail.com','$2b$10$EZqj3QPjJgTm4VC6NiHj/OWHj7OCxyDFf1ZDAUdPIHbUF9xARCdj6','user');
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

-- Dump completed on 2025-06-29  6:28:13
