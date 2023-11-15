CREATE DATABASE IF NOT EXISTS ssafit;
USE ssafit;

CREATE TABLE IF NOT EXISTS `user` (
  `userKey` INT NOT NULL AUTO_INCREMENT ,
  `id` VARCHAR(30) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `userImgPath` VARCHAR(255),
  `exp` INT,
  PRIMARY KEY (`userrKey`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `review` (
  `reviewKey` INT NOT NULL AUTO_INCREMENT ,
  `reviewContent` TEXT,
  `reviewDate` TIMESTAMP NOT NULL,
  `reviewImgPath` VARCHAR(255),
  `viewCnt` INT,
  PRIMARY KEY (`reviewKey`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `study` (
  `studyKey` INT NOT NULL AUTO_INCREMENT ,
  `leaderKey` INT NOT NULL,
  `studyName` VARCHAR(100) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `studyStart` TIMESTAMP NOT NULL,
  `studyEnd` TIMESTAMP NOT NULL,
  `alarm` INT,
  PRIMARY KEY (`studyKey`),
  FOREIGN KEY (`leaderKey`) REFERENCES member(`userKey`) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `schedule` (
  `scheduleKey` INT NOT NULL AUTO_INCREMENT ,
  `studyKey` INT NOT NULL,
  `scheduleDate` TIMESTAMP NOT NULL,
  `scheduleContent` TEXT NOT NULL,
  `schedulePlace` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`scheduleKey`),
  FOREIGN KEY (`studyKey`) REFERENCES study(`studyKey`) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `todo` (
  `todoKey` INT NOT NULL AUTO_INCREMENT ,
  `studyKey` INT NOT NULL,
  `todoStart` TIMESTAMP NOT NULL,
  `todoEnd` TIMESTAMP NOT NULL,
  `todoContent` TEXT NOT NULL,
  PRIMARY KEY (`todoKey`),
  FOREIGN KEY (`studyKey`) REFERENCES study(`studyKey`) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `user_todo` (
  `userKey` INT NOT NULL,
  `todoKey` INT NOT NULL,
  `success` BOOLEAN NOT NULL,
  PRIMARY KEY (`userKey`, `todoKey`),
  FOREIGN KEY (`userKey`) REFERENCES member(`userKey`) ON DELETE CASCADE,
  FOREIGN KEY (`todoKey`) REFERENCES todo(`todoKey`) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `study_user_review` (
  `studyKey` INT NOT NULL,
  `userKey` INT NOT NULL,
  `reviewKey` INT,
  PRIMARY KEY (`studyKey`, `userKey`),
  FOREIGN KEY (`studyKey`) REFERENCES study(`studyKey`) ON DELETE CASCADE,
  FOREIGN KEY (`userKey`) REFERENCES member(`userKey`) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `study_schedule` (
  `studyKey` INT NOT NULL,
  `scheduleKey` INT NOT NULL,
  PRIMARY KEY (`studyKey`, `scheduleKey`),
  FOREIGN KEY (`studyKey`) REFERENCES study(`studyKey`) ON DELETE CASCADE,
  FOREIGN KEY (`scheduleKey`) REFERENCES schedule(`scheduleKey`) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `study_todo` (
  `studyKey` INT NOT NULL,
  `todoKey` INT NOT NULL,
  PRIMARY KEY (`studyKey`, `todoKey`),
  FOREIGN KEY (`studyKey`) REFERENCES study(`studyKey`) ON DELETE CASCADE,
  FOREIGN KEY (`todoKey`) REFERENCES todo(`todoKey`) ON DELETE CASCADE
) ENGINE = InnoDB;

INSERT INTO user 
	(id, password, exp)
VALUES 
    ('ssafy','1234', 0),
    ('ssafy2', '1234', 0);

INSERT INTO study 
    (leaderKey, studyName, category, studyStart, studyEnd, alarm)
VALUES
    (1,'스터디', '코딩', '2023-01-01', '2023-12-31', 3),
    (2,'스터디2', '운동', '2023-01-01', '2023-09-01', 1);

INSERT INTO schedule 
    (`studyKey` , `scheduleDate` , `scheduleContent` , `schedulePlace`)
VALUES
    (1,'2023-01-01', '1회차 만남', '멀티캠퍼스');

INSERT INTO todo 
    (`studyKey` , `todoStart` ,`todoEnd` , `todoContent` )
VALUES
    (1,'2023-01-01', '2023-01-08', '알고리즘 5문제 풀기');

INSERT INTO review 
    (`reviewContent` , `viewCnt` )
VALUES
    ('최고의 스터디였습니다^^', 0);
