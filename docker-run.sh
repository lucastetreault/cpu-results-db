#!/bin/bash
docker build -t php-mysqli .
docker network create --driver bridge cpu_results_nw
docker run --network=cpu_results_nw --name cpu-results-db -e MYSQL_ROOT_PASSWORD=notagoodpassword -d -p 3306:3306 --rm -v "$PWD/db":/docker-entrypoint-initdb.d mysql
docker run --network=cpu_results_nw -d -p 80:80 --name cpu-results-api -v "$PWD/dist":/var/www/html --rm php-mysqli