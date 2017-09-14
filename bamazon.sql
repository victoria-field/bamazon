DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(145) NOT NULL,
  price INT(11),
  stock_quanity INT(11),
  PRIMARY KEY (id)
);
INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(01, "bananas", "grocery", 5, 100);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(02, "banana butter", "grocery", 2,  10);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(03, "banana yellow rug", "household", 50, 16);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(04, "banana paste", "grocery", 3, 90);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(05, "banana icecream", "grocery", 6, 100);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(06, "banana tree", "outside", 30, 25);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(07, "bananaOgrams", "household", 9, 15);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(08, "towel with banana", "household", 12, 30);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(09, "banana art", "household", 50, 5);

INSERT INTO product(id, name_product, department_name, price, stock_qty)
VALUES(01, "banana lamps", "household", 40, 26);
