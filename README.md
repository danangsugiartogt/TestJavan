# Node Js JavanTest

### Prerequisites
1. Node v14.17 or higher
2. NPM v6.14 or higher
3. Git and Git Bash installed

### Cloning an existing repository : git clone

Run this step in order to clone of remote repositories:

1. Change directory to `/path/to/project`
2. Make sure Generate GIT Credentials and copy password
3. Clone a repository with ```git clone <url>``` and insert password if required
4. Remote repository is cloned

### Create A New Branch and Manage Branch

Before creating a new branch, pull the changes from upstream. ***Branch Master*** should be up to date.

Change branch to UAT ```git checkout master```and always update the latest changes ```git pull origin master```

## Project structures

The nodejs project contains following structures:

 - `app`
    - `controllers:`
      All the controllers logic such as accessing database, azure or 3rd party api should be placed inside this folder.
    - `database:`
      Manage database connection
    - `routes:`
      All express Router routes or your api routes should be placed inside this folder.
    - `index.js:`
      Main server file is inside this file.
    - `services:`
      All necessary service files should be placed inside this folder.
    - `helpers`
      All helpers function should be placed inside this folder.

### How to run locally from terminal

Install all the modules > ```npm i```

### How to test API in Postman

Run these steps in order.

1. Postman installed
2. Open Postman 
3. Import Environment Variables by click button import > drop files of [JavanTest.postman_environment.json](/test/JavanTest.postman_environment.json) 
4. Import API Collections by click button import > drop files of [JavanTest.postman_collection.json](test/JavanTest.postman_collection.json) 

## Env files
Put all the global static values such as database name, host, port etc. Copy .env.example file and paste as .env file. Then edit your configuration.

## Create Database
You can import danang_javantest_db.sql file inside 'database-dump' folder. But if any error happen, you must open danang_javantest_db.sql file and copy paste every command into mysql cli.