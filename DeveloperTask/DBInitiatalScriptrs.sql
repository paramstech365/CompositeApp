
create table mysql.employee (
       id integer not null auto_increment,
        name varchar(45),
        phone_Number varchar(45),
        supervisor varchar(45),
        primary key (id)
    ) engine=InnoDB;
    
    create table mysql.users (
        username varchar(45),
        password varchar(45),
        primary key (username)
    ) engine=InnoDB;


INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('John','2011010201', 'Mark');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Kevin','201221212', 'Lucy');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Jeff','201221213', 'Lucy');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Richard','201221214', 'Mark');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Madhu','201221215', 'Mark');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Steven','2011010206', 'Mark');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Luis','201221217', 'Lucy');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Jimmy','201221218', 'Lucy');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Marshall','201221219', 'Mark');

INSERT INTO mysql.employee (name, phone_number, supervisor ) VALUES
('Madhu','201221222', 'Mark');

INSERT INTO mysql.users (username, password ) VALUES
('mspitta@gmail.com','Welcome123');