# CPU Results Database

### API
Based on [php-crud-api](https://github.com/mevdschee/php-crud-api) and [php-api-auth](https://github.com/mevdschee/php-api-auth), the API provides a full featured REST API with querying capabilities, pagination, sorting and more. 

Requires the PHP MySQLi extension enabled.

### UI
A simple Angular 2 application that provides the public interface as well as an admin console for managing results. 

### DB
To initialize the database run the following command: 
 
```mysql -u yourusername -p < db/initdb.sql ```

This will create the database, create the user for the API, and create the results table;

### Build UI + API
Requires [npm](https://www.npmjs.com/) and [angular-cli](https://github.com/angular/angular-cli).

```
cd ui
npm install
cd .. 
./build.sh
```

### Deploy UI + API
```cp ./dist /path/to/www/folder -R```

### Run locally
Requires [npm](https://www.npmjs.com/), [angular-cli](https://github.com/angular/angular-cli), and [Docker](https://www.docker.com/)

```
cd ui
npm install
cd .. 
./build.sh
./docker-run.sh
```

UI should now be available at http://localhost:80