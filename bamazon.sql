DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  item_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(145) NOT NULL,
  price INT(11),
  stock_quanity INT(11)
);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES("bananas", "grocery", 5, 100);

("banana butter", "grocery", 2,  10);

("banana yellow rug", "household", 50, 16);

("banana paste", "grocery", 3, 90);

("banana icecream", "grocery", 6, 100);

("banana tree", "outside", 30, 25);

("bananaOgrams", "household", 9, 15);

("towel with banana", "household", 12, 30);

("banana art", "household", 50, 5);

("banana lamps", "household", 40, 26);
