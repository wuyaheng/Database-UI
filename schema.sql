/*
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already.
*/

/* Create and use the starwars db */
DROP DATABASE IF EXISTS `starwars`;
CREATE DATABASE `starwars`;
USE `company_db`;
CREATE TABLE `employee`(
    `Employee_ID` VARCHAR(4) NOT NULL,
    `First_Name` VARCHAR(15) NOT NULL,
    `Last_Name` VARCHAR(20),
    `DOB` DATETIME,
    `Street` VARCHAR(25),
    `City` VARCHAR(15),
    `State` VARCHAR(10),
    `Contact` VARCHAR(12),
    `Job_Title` VARCHAR(15),
    PRIMARY KEY (`Employee_ID`)
);