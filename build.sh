#!/bin/bash
cd ./ui
ng build --prod --aot --environment=prod
cd ..
cp ./api/src/* ./dist/