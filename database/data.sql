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
(1,'smartphones'),
(2,'notebooks'),
(3,'smartwatchs'),
(4,'headphones'),
(5,'Tv'),
(6,'tablets');

INSERT INTO products (id, name,price,color,description,image, discount_id,category_id) values

(1,'Apple IPhone 14 Plus 256GB',254000,'Black','El Apple iPhone 14 Plus se suma a la serie iPhone 14 con una pantalla OLED de 6.7 pulgadas y procesador A15 Bionic. Cuenta con una cámara dual de 12MP + 12MP, con estabilización por sensor, y modo Cinemático, mientras que la cámara frontal suma autofoco PDAF. También cuenta con carga inalámbrica, parlantes estéreo, resistencia al polvo y agua, y corre iOS 16.','https://www.mgmstore.com.ar/1477-large_default/Apple-iPhone-14-Plus-256GB.jpg',11,1),
(2,'Apple IPhone 14 Pro 1TB',639999,'White','El Apple iPhone 14 Pro debuta este año con una pantalla OLED de 6.1 pulgadas con funcionalidad always-on y un nuevo notch que se integra a las notificaciones llamado Isla Dinámica. El iPhone 14 Pro utiliza el nuevo procesador Apple A16 Bionic y cuenta con una cámara triple posterior con sensor principal de 48MP estabilizado, junto con una cámara ultrawide de 12MP y un sensor telefoto de 12MP con zoom óptico 3x. Las características se completan con unos parlantes estéreo, carga inalámbrica, resistencia al polvo y agua, sistema de mensajería de emergencia por satélite y corre el nuevo iOS 16.','https://www.mgmstore.com.ar/1452-large_default/Apple-iPhone-14-Pro-1TB.jpg',11,1),
(3,'Apple MacBook Air 13" Chip M1 8GB SSD 256GB',299999,'Rose','El poder no ocupa lugar. El chip M1 de Apple redefine nuestro portátil más fino y ligero. La CPU es hasta 3,5 veces más potente. Los gráficos, hasta cinco veces más rápidos. Un Neural Engine más avanzado llega a multiplicar por nueve la velocidad del aprendizaje automático. Además tiene la mayor autonomía en un MacBook Air y un diseño sin ventilador que lo vuelve ultrasilencioso.','https://www.mgmstore.com.ar/966-large_default/Apple-MacBook-Air-13-M1-8GB-256GB.jpg',11,2),
(4,'iPad Pro 12.9" M1 WiFi + 4G 2TB',992299,'Space Gray','La experiencia iPad definitiva. Ahora con el rendimiento increíble del chip M1, una pantalla XDR espectacular y conexión 5G ultrarrápida. Abróchate el cinturón.','https://www.macstation.com.ar/img/productos/2699-1.jpg',11,6),
(5,'Apple Watch Ultra 49mm Titanium',329999,'Orange','Descubre el Apple Watch más duro y potente que existe. Con una caja de titanio capaz de aguantarlo todo, GPS de doble frecuencia y alta precisión, hasta 36 horas de autonomía, conexión móvil para mayor libertad2 y tres correas especialmente creadas para deportistas y amantes de la aventura. Prepárate, vienen tiempos salvajes.','https://www.mgmstore.com.ar/1479-large_default/Apple-Watch-Ultra-49mm-Titanium.jpg',11,3),
(6,'75" Neo QLED 8K Smart TV QN800A',748599,'Black','La poderosa evolución de Neo QLED 8K cuenta con una tecnología de atenuación de retroiluminación que controla con precisión nuestros Quantum Mini LED, que son 40 veces más pequeños que los LEDs convencionales. Serás testigo de detalles inimaginables expresados tanto en el negro más oscuro como en el blanco más puro con 1,5 veces más zonas de iluminación que la tecnología Quantum Matrix normal.','https://images.samsung.com/is/image/samsung/p6pim/ar/qn75qn85bagczb/gallery/ar-qled-tv-qn75qn85bagczb-front-silver-533402949?$1300_1038_PNG$',11,5);

(7,"IPhone 14 Pro",899.990,'Morado oscuro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/phones/apple-phones/iPhone14-pro-max.png',1,1);

(8,"IPhone 13 Pro Max",679.990,'Verde alpino','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/phones/apple-phones/iphone-13-pro-max.webp',11,1);

(9,"IPhone 12",290.000,'Purple','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/phones/apple-phones/iphone-12.png',3,1);

(10,"Galaxi Z Fold 3",374.999,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/phones/samsung-phones/samsung-galaxy-z-fold-4.jpg',2,1);

(11,"Galaxi Z Flip 4",261.999,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/phones/samsung-phones/Samsung-ZFLIP4.png',11,1);

(12,"Galaxy S22 Ultra",399.999,'Bordo','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/phones/samsung-phones/samsung-S22_Ultra.png',1,1);

(13,"iPad Pro",
490.000,'Plateado','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/tablets/ipads/ipad-pro.png',11,6);

(14,"Galaxy Tab S8",
409.999,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/tablets/samsung-tabs/samsung-s8.png',11,6);

(15,"Galaxy Buds Live ",
29.701,'Cobre','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/headphones/samsung/buds-live.png',6,4);

(16,"Galaxy Buds2",
32.999,'Purple','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/headphones/samsung/buds2-pro-2.png',3,4);

(17,"AirPods Max",
224.900,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/headphones/apple/airpods-max-2.jpg',11,4);

(18,"AirPods Pro",
47.775,'Blanco','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/headphones/apple/airpods-pro-2.jpg',11,4);

(19,"Macbook Air",
349.999,'Plata','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/computers/mac-air.png',11,2);

(20,"Macbook Pro",
1.199.999,'Plata','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/computers/macbook-pro.png',11,2);

(21,"iMac 24",
575.999,'Plata','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/computers/iMac-2.png',11,2);

(22,"Apple Watch Serie 7",
395.000,'Rose','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/watches/apple/apple-watch-serie-7-2.jpg',11,2);

(23,"Galaxy Watch 3",
98.328,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/watches/samsung/watch-3-black-2.jpg',11,2);

(24,"QLED",
 279.999,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/watches/samsung/qled-2.webp',11,2);

(25,"UHD",
 233.999,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/tvs/samsung/uhd-2.webp',11,2);

(26,"Neo QLED",
564.999,'Negro','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur accusantium sint et, perspiciatis aperiam dssitatibus? Molestias officia architecto ipsa eaque voluptas.','images/tvs/samsung/neo-qled-2.jpg',11,2);


INSERT INTO users (id, name, lastName, email, password, admin, profileImage) values (1, "carlos", "marchal", "carlos@gmail.com", "12345", 1, "https://www.comedera.com/wp-content/uploads/2021/06/sandwich-de-milanesa.jpg");
INSERT INTO users (id, name, lastName, email, password, admin, profileImage) values (2, "alberto", "pondreo", "alberto@gmail.com", "12345", 0, "https://www.comedera.com/wp-content/uploads/2021/06/sandwich-de-milanesa.jpg");
INSERT INTO users (id, name, lastName, email, password, admin, profileImage) values (3, "ricardo", "sander", "ricardo@gmail.com", "12345", 0, "https://www.comedera.com/wp-content/uploads/2021/06/sandwich-de-milanesa.jpg");
INSERT INTO users (id, name, lastName, email, password, admin, profileImage) values (4, "pedro", "lofter", "pedro@gmail.com", "12345", 0, "https://www.comedera.com/wp-content/uploads/2021/06/sandwich-de-milanesa.jpg");
INSERT INTO users (id, name, lastName, email, password, admin, profileImage) values (5, "ignacio", "sertul", "ignacio@gmail.com", "12345", 1, "https://www.comedera.com/wp-content/uploads/2021/06/sandwich-de-milanesa.jpg");
