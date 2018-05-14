# Vibrato Task
By: Elliott Gorrell

## How To Use
There are two docker containers, the first contains a mongo database and the second an Express Web Server.  
If you run `docker-compose up` it will bring up the database container first and then the app container. The app will bootstrap the database creating a single root html record. The webserver is registered on port 80 so if you go to **http://localhost** it will display a simple html page with some text which is retrieved from the database.

## Notes
The official docker image provided by mongo states that you should be able to place .js or .sh files in `/docker-entrypoint-initdb.d/` and these will seed the database however I couldn't get this to work so have used Node to seed the database as a workaround.