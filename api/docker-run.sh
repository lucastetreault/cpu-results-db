#!/bin/bash
docker run --name cpu-results-db -e MYSQL_RANDOM_ROOT_PASSWORD=yes -e MYSQL_USER=www -e MYSQL_PASSWORD=password -e MYSQL_DATABASE=cpudb -d -p 3306:3306 --rm mysql
docker run -d -p 80:80 --name cpu-results-api -v "$PWD/src":/var/www/html --rm --link cpu-results-db:mysql php-mysqli
