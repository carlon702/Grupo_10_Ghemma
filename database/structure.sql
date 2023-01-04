DROP DATABASE IF EXISTS `GhemmaDB`;

CREATE DATABASE IF NOT EXISTS `GhemmaDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `GhemmaDB`;

CREATE TABLE IF NOT EXISTS `discount`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `discount` INT NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `category`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(15) NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `products` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `price` INT NOT NULL,
    `color` VARCHAR(30) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `image` VARCHAR(1000) NOT NULL,
    `discount_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`discount_id`) REFERENCES discount (`id`),
    FOREIGN KEY(`category_id`) REFERENCES category (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `lastName` VARCHAR(30) NOT NULL,
    `email` VARCHAR(30) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    `admin` TINYINT NOT NULL,
    `profileImage` VARCHAR(250) NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `cart` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `user_id` INT NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`user_id`) REFERENCES users (`id`) 
);

CREATE TABLE IF NOT EXISTS `cart_product` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `quantity` INT NOT NULL,
    `price` INT NOT NULL,
    `cart_id` INT NOT NULL,
    `product_id` INT NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`cart_id`) REFERENCES cart (`id`),
    FOREIGN KEY(`product_id`) REFERENCES products (`id`)
);

