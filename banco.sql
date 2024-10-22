DROP DATABASE IF EXISTS banco1022b;
CREATE DATABASE banco1022b;
USE banco1022b;
CREATE TABLE IF NOT EXISTS produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2),
    imagem VARCHAR(300)
);
INSERT INTO produtos VALUES (1,'Iphone','Celular RUIM',5000.50,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FApple-iPhone-Pro-Max-256%2Fdp%2FB0CHX7PHJT&psig=AOvVaw00-OzTLQ55LCba5dVl40Sa&ust=1729685047401000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCO0Ij5oYkDFQAAAAAdAAAAABAJ');


//criando a tabela
CREATE TABLE IF NOT EXISTS usuarios(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    created_at timestamp,
    updated_at timestamp
);
INSERT INTO usuarios VALUES (1,'Jonas','jonas.alexandre@estudante.ifms.edu.br','2024-10-01 12:22:02','2024-10-10 13:33:03');