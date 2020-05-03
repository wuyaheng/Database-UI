USE `j4b8wlcmhefl8ha3`;

CREATE TABLE `employee`(
	`id` VARCHAR(255) NOT NULL,
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

CREATE TABLE `client`(
    `Client_ID` VARCHAR(4) NOT NULL,
    `Client_Name` VARCHAR(30) NOT NULL,
    `Client_Type` VARCHAR(20),
    `Street` VARCHAR(25),
    `City` VARCHAR(25),
    `State` VARCHAR(15),
    `Contact` VARCHAR(10),
    PRIMARY KEY (`Client_ID`)
);

CREATE TABLE `engagement`(
    `Engagement_ID` VARCHAR(4) NOT NULL,
    `EmployeeID` VARCHAR(4),
    `ServiceID` VARCHAR(4),
    `Start_Date` DATETIME,
    `End_Date` DATETIME,
    `Number_Of_Hours` DECIMAL(4,2),
    `ClientID` VARCHAR(4),
    `Status` VARCHAR(10),
    PRIMARY KEY (`Engagement_ID`)
);


CREATE TABLE `service`(
    `Service_ID` VARCHAR(4) NOT NULL,
    `ServiceDesc` VARCHAR(50),
    `Price_Per_Hour` INT,
    PRIMARY KEY (`Service_ID`)
);