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
    `email` VARCHAR(30) NOT NULL,
    `password` VARCHAR(150) NOT NULL,
    `admin` INT NOT NULL,
    `profileImage` VARCHAR(100),
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

INSERT INTO discount (id, discount) values (1, 5);
INSERT INTO discount (id, discount) values (2, 10);
INSERT INTO discount (id, discount) values (3, 15);
INSERT INTO discount (id, discount) values (4, 20);
INSERT INTO discount (id, discount) values (5, 25);
INSERT INTO discount (id, discount) values (6, 30);
INSERT INTO discount (id, discount) values (7, 35);
INSERT INTO discount (id, discount) values (8, 40);
INSERT INTO discount (id, discount) values (9, 45);
INSERT INTO discount (id, discount) values (10, 50);
INSERT INTO discount (id, discount) values (11, 0);

INSERT INTO category (id, name) values 
('1','smartphones'),
('2','notebooks'),
('3','smartwatchs'),
('4','headphones'),
('5','Tv'),
('6','tablets');

INSERT INTO products (id, name,price,color,description,image, discount_id,category_id) values
(1,'Apple IPhone 14 Plus 256GB',254000,'Black','El Apple iPhone 14 Plus se suma a la serie iPhone 14 con una pantalla OLED de 6.7 pulgadas y procesador A15 Bionic. Cuenta con una cámara dual de 12MP + 12MP, con estabilización por sensor, y modo Cinemático, mientras que la cámara frontal suma autofoco PDAF. También cuenta con carga inalámbrica, parlantes estéreo, resistencia al polvo y agua, y corre iOS 16.','https://www.mgmstore.com.ar/1477-large_default/Apple-iPhone-14-Plus-256GB.jpg',11,1),
(2,'Apple IPhone 14 Pro 1TB',639999,'White','El Apple iPhone 14 Pro debuta este año con una pantalla OLED de 6.1 pulgadas con funcionalidad always-on y un nuevo notch que se integra a las notificaciones llamado Isla Dinámica. El iPhone 14 Pro utiliza el nuevo procesador Apple A16 Bionic y cuenta con una cámara triple posterior con sensor principal de 48MP estabilizado, junto con una cámara ultrawide de 12MP y un sensor telefoto de 12MP con zoom óptico 3x. Las características se completan con unos parlantes estéreo, carga inalámbrica, resistencia al polvo y agua, sistema de mensajería de emergencia por satélite y corre el nuevo iOS 16.','https://www.mgmstore.com.ar/1452-large_default/Apple-iPhone-14-Pro-1TB.jpg',11,1),
(3,'Apple MacBook Air 13" Chip M1 8GB SSD 256GB',299999,'Rose','El poder no ocupa lugar. El chip M1 de Apple redefine nuestro portátil más fino y ligero. La CPU es hasta 3,5 veces más potente. Los gráficos, hasta cinco veces más rápidos. Un Neural Engine más avanzado llega a multiplicar por nueve la velocidad del aprendizaje automático. Además tiene la mayor autonomía en un MacBook Air y un diseño sin ventilador que lo vuelve ultrasilencioso.','https://www.mgmstore.com.ar/966-large_default/Apple-MacBook-Air-13-M1-8GB-256GB.jpg',11,2),
(4,'iPad Pro 12.9" M1 WiFi + 4G 2TB',992299,'Space Gray','La experiencia iPad definitiva. Ahora con el rendimiento increíble del chip M1, una pantalla XDR espectacular y conexión 5G ultrarrápida. Abróchate el cinturón.','https://www.macstation.com.ar/img/productos/2699-1.jpg',11,6),
(5,'Apple Watch Ultra 49mm Titanium',329999,'Orange','Descubre el Apple Watch más duro y potente que existe. Con una caja de titanio capaz de aguantarlo todo, GPS de doble frecuencia y alta precisión, hasta 36 horas de autonomía, conexión móvil para mayor libertad2 y tres correas especialmente creadas para deportistas y amantes de la aventura. Prepárate, vienen tiempos salvajes.','https://www.mgmstore.com.ar/1479-large_default/Apple-Watch-Ultra-49mm-Titanium.jpg',11,3),
(6,'75" Neo QLED 8K Smart TV QN800A',748599,'Black','La poderosa evolución de Neo QLED 8K cuenta con una tecnología de atenuación de retroiluminación que controla con precisión nuestros Quantum Mini LED, que son 40 veces más pequeños que los LEDs convencionales. Serás testigo de detalles inimaginables expresados tanto en el negro más oscuro como en el blanco más puro con 1,5 veces más zonas de iluminación que la tecnología Quantum Matrix normal.','https://images.samsung.com/is/image/samsung/p6pim/ar/qn75qn85bagczb/gallery/ar-qled-tv-qn75qn85bagczb-front-silver-533402949?$1300_1038_PNG$',11,5)




