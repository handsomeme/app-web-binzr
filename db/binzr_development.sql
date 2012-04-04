-- MySQL dump 10.13  Distrib 5.6.4-m7, for osx10.6 (i386)
--
-- Host: localhost    Database: binzr_development
-- ------------------------------------------------------
-- Server version	5.6.4-m7

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `unique_schema_migrations` (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20120328093254');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trips`
--

DROP TABLE IF EXISTS `trips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `primary_photo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `location` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `width` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trips`
--

LOCK TABLES `trips` WRITE;
/*!40000 ALTER TABLE `trips` DISABLE KEYS */;
INSERT INTO `trips` VALUES (1,'San Francisco','/img/demo0.jpg','I have discovered a beautiful place where I want you to grow up. That’s why I decided to leave France. It’s a small city (compared to some others I visited), a city where I feel good, where people are friendly, where the weather is not warm and not cold. It’s a city with great parks where you can walk, climb, run, and a cosmopolitan city where people don’t judge you on your differences or appearances. Dear future daughter, I hope you will love it like I love it.','San francisco',998,665,'2012-03-28 23:29:24','2012-03-28 23:58:50'),(2,'Iola, Kansas ','/img/demo1.jpg','During my first trip to the USA, my home base was the small town of Iola, Kansas. Shown here is one of the highlights of the trip, the Farm City Days Carnival. This was a magical moment for me as I experienced my first taste of American tradition (and some funnel cake).','Iola, Kansas',998,748,'2012-03-28 23:30:47','2012-03-29 00:00:03'),(3,'Race Day','/img/demo2.jpg','Every year in October, yachts of all sizes gather below Auckland’s downtown skyline for the start of the largest coastal yacht race in the southern hemisphere — from Devonport wharf to the nation’s former capital, Russell.','Auckland, New Zealand',997,1506,'2012-03-28 23:31:21','2012-03-29 00:00:48'),(4,'Auckland Afterhours ','/img/demo3.jpg','The first time I tried to get a night shot of this stunning city, a police officer didn’t take too kindly to my positioning on the side of the motorway. The second time, I broke my tripod. Thankfully the third time I was able to capture a small amount of the beauty this city has to share.','Auckland, New Zealand',997,665,'2012-03-28 23:31:55','2012-03-29 00:01:03'),(5,'I-5, Seattle','/img/demo4.jpg','Shot from the observation deck at Columbia Center in Seattle, Washington, the organic curves of the interstate bisect the relentless grid of the city to amplify the surrounding landscape.','Seattle, Washington',998,819,'2012-03-28 23:32:24','2012-03-29 00:01:19'),(6,'Bay Bridge, San Francisco','/img/demo5.jpg','The old, seismically unsound Bay Bridge awaits its retirement as its successor is built alongside it.','Bay Bridge, San Francisco',998,998,'2012-03-28 23:32:53','2012-03-29 00:01:32'),(7,'Ferry Terminal, Piraeus, Greece','/img/demo6.jpg','Pireaus is the port city contiguous to Athens. Ferry boats come and go 24/7, primarily to islands in the Aegean Sea. The ferries are the lifeblood for hundreds of islands — some tiny, and others as large as Crete.','Piraeus, Greece',998,747,'2012-03-28 23:33:20','2012-03-29 00:02:30'),(8,'Bangui Windmills, Phillipines','/img/demo7.jpg','The first wind-farm in the Philippines, Bangui Windmills provides renewable energy that helps reduce greenhouse gasses. It was drizzling with overcast dark clouds when I visited, but the windmills were majestic.','Phillipines',998,998,'2012-03-28 23:33:45','2012-03-29 00:02:56'),(9,'Victoria Falls Bridge, Zambia','/img/demo8.jpg','Truly No Man’s Land, Victoria Falls Bridge spans the Zambezi River, connecting Zambia and Zimbabwe. The bridge is also one of the world’s most spectacular bungee jumping destinations.','Zambia',998,725,'2012-03-28 23:34:06','2012-03-29 00:03:21'),(10,'Damascus, Syria','/img/demo9.jpg','Dear family,\r\n\r\nI have discovered how to love a city. In Damascus, I have found a gentle and bright people. I have found warm kitchens and welcoming tea shops. I have found colorful art and comforting music. I have found a complicated history and an even more complicated future. I would do anything to return. (By the way, I told you I was traveling alone, but I was with Ross. I discovered him here, too.)','Damascus, Syria',998,662,'2012-03-29 00:04:56','2012-03-29 00:04:56'),(11,'Napolitan pizza, Europe','/img/demo10.jpg','Napolitan pizza.','Napoli, Italy',681,454,'2012-03-29 00:14:10','2012-03-29 00:14:10'),(12,'Eiffel Tower, Europe','/img/demo11.jpg','Parc du Champ de Mars with Eiffel Tower in background.\r\n\r\nRead more: http://www.lonelyplanet.com/europe/images/eiffel-tower-europe$26570-22#ixzz1qSb5LchV','Paris, France',681,454,'2012-03-29 00:15:49','2012-03-29 00:15:49'),(13,'Musee du Louvre pyramid, France','/img/demo12.jpg','Musee du Louvre pyramid at dusk.','Paris, France',681,434,'2012-03-29 00:20:13','2012-03-29 00:20:13'),(14,'Eiffel Tower','/img/demo13.jpg','Loved it yet scary to climb','Paris, France',553,738,'2012-03-29 00:23:35','2012-03-29 00:23:35'),(15,'Lake Louise in Alberta, Canada','/img/demo14.jpg','Lake Louise in Alberta, Canada','Alberta, Canada',391,540,'2012-03-29 00:26:41','2012-03-29 00:26:41'),(16,'Notting Hill film locations','/img/demo15.jpg','Notting Hill location: Hugh Grant’s ‘travel bookshop’: Notting Hill, 142 Portobello Road, Notting Hill, London W11','Notting Hill, London, UK',300,200,'2012-03-29 00:35:48','2012-03-29 00:36:14'),(17,'Baby Dior in Paris','/img/demo16.jpg','For the perfect little princess.\r\n\r\naddress & contact information\r\nAddress: 26, ave Montaigne, 75008, Paris\r\nWebsite: http://www.diorcouture.com/us/babydior.html\r\nArrondissement: 8\r\nTelephone: +33 (0)1 49 52 01 45\r\nNearest Metro Stop: Alma - Marceau ','Ave Montaigne, Paris, France',650,508,'2012-03-29 23:19:55','2012-03-29 23:29:17'),(18,'Comme des Garçons','/img/demo17.jpg','The well-known avant-garde Japanese designer.\r\nSee website for other locations in Paris. \r\n\r\nAddress: 54, rue du Faubourg St.-Honoré, 75008, Paris\r\nWebsite: http://www.comme-des-garcons.com/\r\nArrondissement: 8\r\nTelephone: +33 (0)1 53 30 27 27\r\nNearest Metro Stop: Concorde   ','54, rue du Faubourg St.-Honoré, Paris',325,325,'2012-03-29 23:31:55','2012-03-29 23:31:55'),(19,' Fauchon','/img/demo18.jpg','Teas, chocolates, nuts and sardines—a veritable wonderland of foodie gifts.','30, Place de la Madeleine, Paris',1000,750,'2012-03-29 23:41:01','2012-03-29 23:41:01'),(20,'Givenchy','/img/demo19.jpg','As Audrey Hepburn’s signature brand favorite, the line still boasts timeless, elegant pieces. Since Riccardo Tisci began as chief designer in 2005, the clothes have taken on a distinctively sleek and minimalist look.','3, ave George V, 75008, Paris',400,331,'2012-03-29 23:47:19','2012-03-29 23:47:19');
/*!40000 ALTER TABLE `trips` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-04-04 15:53:58
