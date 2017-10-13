#!/bin/bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
docker run -d --name cpu-results-db --rm cpu-results-db
