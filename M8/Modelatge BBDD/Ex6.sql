CREATE DATABASE `Ex6` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `Brand` (
  `id_brand` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `Supplier_id_supplier` int(11) NOT NULL,
  PRIMARY KEY (`id_brand`),
  UNIQUE KEY `id_brand_UNIQUE` (`id_brand`),
  KEY `fk_Brand_Supplier_idx` (`Supplier_id_supplier`),
  CONSTRAINT `fk_Brand_Supplier` FOREIGN KEY (`Supplier_id_supplier`) REFERENCES `Supplier` (`id_supplier`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Client` (
  `id_client` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `adress` varchar(45) NOT NULL,
  `telephone` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `register_date` datetime NOT NULL,
  `Client_id_client` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_client`),
  UNIQUE KEY `Client_id_UNIQUE` (`id_client`),
  KEY `fk_Client_Client1_idx` (`Client_id_client`),
  CONSTRAINT `fk_Client_Client1` FOREIGN KEY (`Client_id_client`) REFERENCES `Client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Employee` (
  `id_employee` int(11) NOT NULL,
  PRIMARY KEY (`id_employee`),
  UNIQUE KEY `Employee_id_UNIQUE` (`id_employee`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Glasses` (
  `id_glasses` int(11) NOT NULL,
  `right_graduation` float NOT NULL,
  `left_graduation` float NOT NULL,
  `frame` enum('flotant','pasta','metàl·lica') NOT NULL,
  `frame_color` varchar(45) NOT NULL,
  `right_color` varchar(45) NOT NULL,
  `left_color` varchar(45) NOT NULL,
  `price` float NOT NULL,
  `Brand_id_brand` int(11) NOT NULL,
  `Employee_id_employee` int(11) NOT NULL,
  `Client_id_client` int(11) NOT NULL,
  PRIMARY KEY (`id_glasses`),
  UNIQUE KEY `Glasses_id_UNIQUE` (`id_glasses`),
  KEY `fk_Glasses_Brand1_idx` (`Brand_id_brand`),
  KEY `fk_Glasses_Employee1_idx` (`Employee_id_employee`),
  KEY `fk_Glasses_Client1_idx` (`Client_id_client`),
  CONSTRAINT `fk_Glasses_Brand1` FOREIGN KEY (`Brand_id_brand`) REFERENCES `Brand` (`id_brand`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Glasses_Client1` FOREIGN KEY (`Client_id_client`) REFERENCES `Client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Glasses_Employee1` FOREIGN KEY (`Employee_id_employee`) REFERENCES `Employee` (`id_employee`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Supplier` (
  `id_supplier` int(11) NOT NULL,
  `street` varchar(45) NOT NULL,
  `portal_number` varchar(3) NOT NULL,
  `floor` varchar(3) NOT NULL,
  `door` varchar(3) NOT NULL,
  `city` varchar(45) NOT NULL,
  `zip_code` varchar(5) NOT NULL,
  `country` varchar(45) NOT NULL,
  PRIMARY KEY (`id_supplier`),
  UNIQUE KEY `id_supplier_UNIQUE` (`id_supplier`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO Supplier (id_supplier,street, portal_number, floor,door,city,zip_code,country) VALUES
 ('1', 'Carrer principal', '11', '1r', '2', 'Barcelona', '08012', 'Catalunya'),
 ('2', 'Carrer secundari', '12', '2n', '3', 'Lisboa', 'PO012', 'Portugal');
 
INSERT INTO Brand (id_brand,name,Supplier_id_supplier) VALUES
 ('1', 'Ray-ban', '1'),
 ('2', 'Polaroid', '2');
 
INSERT INTO Employee (id_employee) VALUES
 (1),
 (2);
 
INSERT INTO Client (id_client,name, adress,telephone,email,register_date,Client_id_client) VALUES
 (1,'Marc','Carrer Principal, 1','123456789','marc@email.com','2020-02-01',null),
 (2,'Núria','Carrer Secundari, 2','789456123','nuria@email.com','2020-02-02',1);

INSERT INTO Glasses (id_glasses,right_graduation,left_graduation,frame,frame_color,right_color,left_color, price,Brand_id_brand,Employee_id_employee,Client_id_client) VALUES
 (1,1.5,1.75,'flotant','black','red','blue',150.99,1,1,2),
 (2,2.5,2.5,'pasta','blue','blue','blue',209.99,2,2,1);

