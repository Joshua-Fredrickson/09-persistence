# LAB09 PERSISTENCE

**Author**: Joshua Fredrickson

**Version**: 2.0.0 

## Overview
Lab 9 is an application the stores catz objects and stores them to your local machine

## Getting Started
To use the Lab09 application, [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) 
(Node Package manager) will need to be locally installed.  Once Node.js and npm have been 
installed, install the Lab09 files. Prior to starting the Lab09 application, from the command 
line while you are in the Lab09 file folder, enter the command ````npm i````.  This will download all 
needed dependencies for the application to run.  After all files have been installed, the user will 
have to start the server from the command line with ````nodemon index.js````.
Then from another command line window, the user can run the test suite with ````npm run test````


## Architecture
This application was deployed with the following technologies.
Node.js, npm, body-parser, dotenv, express, faker, mongoose, winston, babel, superagent, 
http-errors, uuid, bluebird, nodemon, http, jest, eslint, JavaScript
    
SERVER ENDPOINTS 
POST /api/catz
GET /api/catz/:id
PUT /api/catz/:id
DELETE /api/catz/:id


## Change Log 
05-05-2018  4:30pm  first commit, scaffolding tests not passing

## Credits and Collaborations
Special thanks to all of the Code Fellows staff and fellow 401-d23 students.
