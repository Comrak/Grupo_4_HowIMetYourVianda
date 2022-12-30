/* creando el schema */

create database HowIMetYourVianda;

USE HowIMetYourVianda;
/*Tablas de usuarios*/

CREATE TABLE Users (
    id int NOT NULL,
    userName varchar(55) NOT NULL,
    firtsName varchar(55) NOT NULL,
    lastName varchar(55) NOT NULL,
    email varchar(55) NOT NULL,
    password varchar(55) NOT NULL,
    role_id int NOT NULL,
    adress varchar(255) NOT NULL,
    adress_id INT NOT NULL,
    landPhone int NOT NULL,
    mobilePhone int NOT NULL,
    avatar varchar(255) NOT NULL,
    PRIMARY KEY (id)
); 

CREATE TABLE UserRol (
    id int NOT NULL,
    role int NOT NULL,
    descripcion varchar(55) NOT NULL,
    PRIMARY KEY (id)
);

/*tablas de localizaciones */

CREATE TABLE Country(
    id int NOT NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE City(
    id int NOT NULL,
    country_id int NOT NULL,
    name varchar(55) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Adress(
    id INT NOT NULL,
    name varchar(50) NOT NULL,
    street varchar(50) NOT NULL,
    streetNum INT NOT NULL,
    floor INT NOT NULL,
    dept varchar(10) NOT NULL,
    city_id INT NOT NULL,
    zipCode INT NOT NULL,
    country_id INT NOT NULL,
    PRIMARY KEY (id)
);

/*tablas para productos y costos */

CREATE TABLE Products (
    id int NOT NULL,
    image varchar(255) NOT NULL,
    price decimal(20,2) NOT NULL,
    name varchar(255) NOT NULL,
    descripcion text NOT NULL,
    tags varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE Taxes(
    id INT NOT NULL,
    tax varchar(10) NOT NULL,
    description varchar(50) NOT NULL,
    rate decimal(2,2) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Currency (
    id INT NOT NULL,
    ISO_Code varchar(5) NOT NULL,
    name varchar(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE PaymentMethod(
    id INT NOT NULL,
    method varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE PaymentStatus(
    id INT NOT NULL,
    status varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

/*tablas para transacciones */

CREATE TABLE Transactions(
    id INT NOT NULL,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    transactionDate DATE NOT NULL,
    status_id INT NOT NULL,
    type_id INT NOT NULL,
    currency_id INT NOT NULL,
    productQuantity INT NOT NULL,
    productPrice INT NOT NULL,
    productTax decimal(2,2) NOT NULL,
    transactionAmount decimal(20,2) NOT NULL,
    transactionDescription varchar(100) NOT NULL,
    paymentMethod_id INT NOT NULL,
    paymentStatus_id INT NOT NULL,
    transactionPaymenid INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE TransactionStatus(
    id int NOT NULL,
    status varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE TransactionType(
    id int NOT NULL,
    type varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

/*Añadiendo claves foraneas */
ALTER TABLE Users
ADD FOREIGN KEY (adress_id) REFERENCES Adress(id),
ADD FOREIGN KEY (role_id) REFERENCES UserRol(id); 

ALTER TABLE City
ADD FOREIGN KEY (country_id) REFERENCES Country(id);

ALTER TABLE Transactions
ADD FOREIGN KEY (product_id) REFERENCES Products(id),
ADD FOREIGN KEY (user_id) REFERENCES Users(id),
ADD FOREIGN KEY (status_id) REFERENCES TransactionStatus(id), 
ADD FOREIGN KEY (type_id) REFERENCES TransactionType(id),
ADD FOREIGN KEY (currency_id) REFERENCES Currency(id),
ADD FOREIGN KEY (paymentMethod_id) REFERENCES PaymentMethod(id),
ADD FOREIGN KEY (paymentStatus_id) REFERENCES PaymentStatus(id); 