-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: rolexlandia
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orologi`
--

DROP TABLE IF EXISTS `orologi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orologi` (
  `ido` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `Descrizione` varchar(200) DEFAULT NULL,
  `prezzo` float DEFAULT NULL,
  `Tipologia` varchar(20) DEFAULT NULL,
  `Materiale` varchar(20) DEFAULT NULL,
  `Stile` varchar(20) DEFAULT NULL,
  `Marca` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ido`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Dumping data for table `orologi`
--

LOCK TABLES `orologi` WRITE;
/*!40000 ALTER TABLE `orologi` DISABLE KEYS */;
INSERT INTO `orologi` VALUES (1,'Omega Seamaster','./Assets/Shop_Assets/omega_seamaster.jpg','Orologio subacqueo professionale con movimento automatico.',250,'Subacqueo','Acciaio Inossidabile','Sportivo','Omega'),(2,'Rolex Submariner','./Assets/Shop_Assets/rolex_submariner.jpg','Orologio subacqueo di lusso con movimento automatico.',500,'Subacqueo','Oro','Elegante','Rolex'),(3,'Tag Heuer Carrera','./Assets/Shop_Assets/tag_heuer_carrera.jpg','Orologio da corsa di alta gamma con movimento cronografico.',450,'Cronografo','Acciaio','Sportivo','Tag Heuer'),(4,'Cartier Tank','./Assets/Shop_Assets/cartier_tank.jpg','Orologio classico con quadrante rettangolare e cinturino in pelle.',750,'Classico','Oro','Elegante','Cartier'),(5,'Seiko 5','./Assets/Shop_Assets/seiko_5.jpg','Orologio automatico economico e affidabile.',100,'Automatico','Acciaio Inossidabile','Casual','Seiko'),(6,'Citizen Eco-Drive','./Assets/Shop_Assets/citizen_eco_drive.jpg','Orologio al quarzo alimentato dalla luce solare.',150,'Quarzo','Titanio','Casual','Citizen'),(7,'Audemars Piguet Royal Oak','./Assets/Shop_Assets/audemars_piguet_royal_oak.jpg','Orologio di lusso con iconico design esagonale.',1500,'Lusso','Oro Rosa','Elegante','Audemars Piguet'),(8,'Hublot Big Bang','./Assets/Shop_Assets/hublot_big_bang.jpg','Orologio sportivo di alta gamma con cassa in ceramica.',2000,'Sportivo','Ceramica','Sportivo','Hublot'),(9,'Panerai Luminor','./Assets/Shop_Assets/panerai_luminor.jpg','Orologio militare con custodia in acciaio e cinturino in pelle.',800,'Militare','Acciaio','Tattico','Panerai'),(10,'Bulova Precisionist','./Assets/Shop_Assets/bulova_precisionist.jpg','Orologio al quarzo ad alta precisione con movimento al secondo.',300,'Quarzo','Acciaio Inossidabile','Casual','Bulova'),(11,'Tissot Le Locle','./Assets/Shop_Assets/tissot_le_locle.jpg','Orologio automatico con design classico e movimento svizzero.',400,'Automatico','Acciaio','Elegante','Tissot'),(12,'Longines Master Collection','./Assets/Shop_Assets/longines_master_collection.jpg','Orologio elegante con fasi lunari e movimento automatico.',600,'Fasi Lunari','Acciaio','Elegante','Longines'),(13,'IWC Portugieser','./Assets/Shop_Assets/iwc_portugieser.jpg','Orologio di lusso con cronografo e movimento automatico.',1200,'Cronografo','Oro','Elegante','IWC'),(14,'Breitling Navitimer','./Assets/Shop_Assets/breitling_navitimer.jpg','Orologio pilota con cronometro e scala aeronautica.',900,'Pilota','Acciaio','Aviazione','Breitling'),(15,'Rado Hyperchrome','./Assets/Shop_Assets/rado_hyperchrome.jpg','Orologio sportivo con cassa in ceramica e movimento al quarzo.',350,'Sportivo','Ceramica','Sportivo','Rado'),(16,'Hamilton Khaki Field','./Assets/Shop_Assets/hamilton_khaki_field.jpg','Orologio da campo militare con movimento al quarzo.',200,'Militare','Acciaio','Tattico','Hamilton'),(17,'Swatch Sistem51','./Assets/Shop_Assets/swatch_sistem51.jpg','Orologio automatico con movimento rivoluzionario a 51 componenti.',80,'Automatico','Plastica','Casual','Swatch'),(18,'Fossil Grant','./Assets/Shop_Assets/fossil_grant.jpg','Orologio classico con cinturino in pelle e movimento al quarzo.',120,'Quarzo','Acciaio','Elegante','Fossil'),(19,'Casio G-Shock','./Assets/Shop_Assets/casio_g_shock.jpg','Orologio sportivo resistente agli urti con funzioni digitali.',100,'Sportivo','Plastica','Sportivo','Casio'),(20,'Timex Weekender','./Assets/Shop_Assets/timex_weekender.jpg','Orologio casual con cinturino in tessuto intercambiabile.',50,'Casual','Acciaio','Casual','Timex'),(21,'Citizen Promaster Diver','./Assets/Shop_Assets/citizen_promaster_diver.jpg','Orologio subacqueo professionale con resistenza all\'acqua fino a 200 metri.',300,'Subacqueo','Acciaio Inossidabile','Sportivo','Citizen'),(22,'Seiko Presage','./Assets/Shop_Assets/seiko_presage.jpg','Orologio classico con movimento automatico e quadrante a lancette.',350,'Automatico','Acciaio Inossidabile','Elegante','Seiko'),(23,'Tudor Black Bay','./Assets/Shop_Assets/tudor_black_bay.jpg','Orologio da immersione vintage con movimento automatico e lunetta girevole unidirezionale.',700,'Subacqueo','Acciaio','Sportivo','Tudor'),(24,'Hamilton Jazzmaster','./Assets/Shop_Assets/hamilton_jazzmaster.jpg','Orologio elegante con movimento automatico e design raffinato.',400,'Automatico','Acciaio Inossidabile','Elegante','Hamilton'),(25,'Casio Edifice','./Assets/Shop_Assets/casio_edifice.jpg','Orologio sportivo con funzioni di cronometraggio avanzate e movimento al quarzo.',120,'Sportivo','Acciaio','Sportivo','Casio');
/*!40000 ALTER TABLE `orologi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti`
--

DROP TABLE IF EXISTS `utenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utenti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(20) DEFAULT NULL,
  `Password` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti`
--

LOCK TABLES `utenti` WRITE;
/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
INSERT INTO `utenti` VALUES (1,'admin','admin');
/*!40000 ALTER TABLE `utenti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 20:44:50
