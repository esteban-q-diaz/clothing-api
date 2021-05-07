CREATE DATABASE IF NOT EXISTS clothing;

USE clothing;

DROP TABLE IF EXISTS attire;

CREATE TABLE attire (
  itemNum int NOT NULL AUTO_INCREMENT,
  img varchar(800),
  weather varchar(150),
  type varchar(150),
  gender varchar(150),
  PRIMARY KEY (itemNum)
);