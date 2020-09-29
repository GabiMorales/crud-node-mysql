CREATE DATABASE crudnodejsmysql;
USE crudnodejsmysql;
CREATE TABLE customer(
    id INT(6) NOT NULL,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL
);
ALTER TABLE customer
    ADD PRIMARY KEY(id);
    
ALTER TABLE customer
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

DESCRIBE customer;

select * from customer;
