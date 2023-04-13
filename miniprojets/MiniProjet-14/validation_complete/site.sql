DROP DATABASE IF EXISTS siteweb;
CREATE DATABASE siteweb;
USE siteweb;

CREATE TABLE users(
    userid INT NOT NULL,
    username INT NOT NULL,
    usermail VARCHAR(64) NOT NULL,
    the_name VARCHAR(32) NOT NULL,
    forename VARCHAR(32) NOT NULL,
    birthdate DOUBLE,
    gender INT,
    password VARCHAR(24) NOT NULL,
    qte INT NOT NULL DEFAULT 0
);

ALTER TABLE users ADD COLUMN creadate DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE users ADD COLUMN logindate DATETIME;
ALTER TABLE users ADD COLUMN active BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE users ADD COLUMN pseudo VARCHAR(16) AFTER forename;

ALTER TABLE users MODIFY username VARCHAR(64) NOT NULL;
ALTER TABLE users MODIFY birthdate DATE;
ALTER TABLE users MODIFY gender CHAR(1) DEFAULT 'M';

ALTER TABLE users CHANGE the_name name VARCHAR(32) NOT NULL;

ALTER TABLE users ADD CONSTRAINT chk_gender CHECK(gender IN ('M', 'F'));
ALTER TABLE users ADD CONSTRAINT chk_logindate CHECK(logindate >= creadate);
ALTER TABLE users ADD CONSTRAINT chk_bithdate CHECK(birthdate < creadate);
ALTER TABLE users ADD CONSTRAINT chk_pwd CHECK(LENGTH(password) >= 5);

ALTER TABLE users DROP COLUMN qte;

ALTER TABLE users ADD PRIMARY KEY (userid);
ALTER TABLE users ADD UNIQUE (username);
ALTER TABLE users ADD UNIQUE (usermail);

ALTER TABLE users MODIFY userid INT NOT NULL AUTO_INCREMENT;

INSERT INTO users (userid, username, usermail, name, forename, pseudo, birthdate, gender, password, creadate, logindate, active)
VALUES ('1', 'a_kassem', 'a_kassem@gmail.com', 'Kassem', 'Adem', 'addoum', '2004-03-03', 'M', 'hkZ6Oet', '2022-09-20 15:06:10', '2023-04-11 19:21:22', '0'),
        ('2', 'e_bahri', 'e_bahri@gmail.com', 'Bahri', 'Eya', 'ayouta', '2002-11-27', 'F', 'v18xbe2', '2022-10-01 16:00:11', '2023-04-12 01:20:06', '1'),
        ('3', 'a_soussi', 'a_soussi@yahoo.com', 'Soussi', 'Ahmed', 'hmid', '2004-10-27', 'M', '5mQu876', '2023-03-04 10:21:45', '2023-04-12 09:13:39', '0'),
        ('4', 'i_moussa', 'i_moussa@gmail.com', 'Moussa', 'Islem', 'slouma', '2007-04-14', 'M', 'GdOUWrJ', '2022-04-24 19:53:21', '2023-04-10 22:42:51', '1'),
        ('5', 'i_fekih', 'i_fekih@gmail.com', 'Fekih', 'Isra', 'sarrou', '2002-05-02', 'F', 'w6EaS17', '2023-02-10 17:06:58', '2023-04-11 21:17:17', '0'),
        ('6', 'b_jebali', 'b_jebali@gmail.com', 'Jebali', 'Bilel', 'bolbol', '2002-07-11', 'M', 'DU4Wh5N', '2023-04-02 01:08:00', '2023-04-12 13:22:25', '1'),
        ('7', 't_cherni', 't_cherni@yahoo.com', 'Cherni', 'Tayssir', 'tisso', '2005-04-12', 'F', '1OBUq6g', '2022-08-26 01:04:24', '2023-04-11 01:16:06', '1'),
        ('8', 'r_rkik', 'r_rkik@gmail.com', 'Rkik', 'Rayene', 'rayo', '2007-03-02', 'M', 'T1HzloM', '2023-01-31 18:54:27', '2023-04-11 04:52:55', '1');

SHOW CREATE TABLE users;

INSERT INTO users (username, usermail, name, forename, gender, password)
VALUES ('d_sellami', 'd_sellami', 'Sellami', 'Donia', 'F', '123456');

SELECT * FROM users;
