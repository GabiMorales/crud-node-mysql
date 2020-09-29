-- creando base de datos--
CREATE DATABASE crudnodejsmysql;

--Using the database

USE crudnodejsmysql;

CREATE TABLE customer(
    id INT(6) NOT NULL IDENTITY(1,1),
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    PRIMARY KEY (ID)
);

EXEC customer;

