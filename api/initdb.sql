CREATE DATABASE cpudb;
GRANT USAGE ON *.* TO www@localhost IDENTIFIED BY 'weak ass password';
GRANT ALL PRIVILEGES ON cpudb.* TO www@localhost;
FLUSH PRIVILEGES;

use cpudb;

CREATE TABLE results (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  competition VARCHAR(255),
  date DATE,
  location VARCHAR(255),
  competition_type VARCHAR(6),
  sex VARCHAR(1),
  name VARCHAR(255),
  province VARCHAR(3),
  weight DECIMAL,
  old_weight_class VARCHAR(4),
  nweight_class VARCHAR(4),
  age_category VARCHAR(10),
  squat DECIMAL,
  bench DECIMAL,
  deadlift DECIMAL,
  total DECIMAL,
  wilks DECIMAL,
  year INTEGER,
  equipped BOOLEAN,
  cpu_number INT
);

