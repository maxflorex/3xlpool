CREATE DATABASE IF NOT EXISTS 3xlpool;

USE 3xlpool;

CREATE TABLE IF NOT EXISTS questions(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    reaction ENUM('Fire', 'Doubt', 'Nelson', 'Nope') NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO questions (title, reaction) VALUES
    ('Funcionara?', 1),
    ('Porfis?', 3);
