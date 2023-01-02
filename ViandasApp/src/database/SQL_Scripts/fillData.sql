use howimetyourvianda;

INSERT INTO Products
VALUES (2, 
        '/img/productos/lasagna.jpg', 
        '1522',
        'La que no falla',
        'En algunos lugares le dicen lasagna en otros pasticho nosotros simplemente le decimos deliciosa',
        '["lasagna","Pasta","Italiano","Tomate","Queso","vivila"]');
INSERT INTO userrol
VALUES (1,
        'admin',
        'administrador');
INSERT INTO country 
VALUES(1,
	   'Argentina');
INSERT INTO city 
VALUES(1,
	   1,
       'Buenos Aires');
INSERT INTO adress 
VALUES(1,
	   'ayacucho',
       'ayacucho',
       1123,
       3,
       'A',
       1,
       1126,
       1);
INSERT INTO users
VALUES(1,
	   'RickyFort',
       'Ricardo',
       'Fort',
       'rfont@gmail.com',
       '$2b$10$8fKEQb01zwAsfcMpKFFgGOUfucETiO0n8OuO1zn/6hInGxcqJSaqC',
       1,
       'Ayacucho 1123',
       1,
       '1165238965',
       '1165238965',
       'RicardoFont.jpg')