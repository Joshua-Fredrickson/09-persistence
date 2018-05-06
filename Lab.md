![cf](https://i.imgur.com/7v5ASc8.png) Lab 09: Vanilla REST API w/ Persistence
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
* students will learn how to save resource data to the file system for a layer of data persistence
* students will learn how to refactor commonly used coding constructs into custom helper modules

## Requirements

#### Configuration
[x] Reference the file structure of [this template](https://github
.com/codefellows/seattle-javascript-401d23/tree/master/back-end/00-empty-template) for the configuration files you need and folder structure
* `README.md`
  [x] your `README.md` should include detailed instructions on how to use your API
  [x]  this should include documentation on how to access your API endpoints

#### Feature Tasks
* continue working on your vanilla REST API
[x] refactor your routes to be contained in a separate module (ex: `route/resource-route.js`)
[x] refactor your `res` messages & status codes to be contained in a separate module (ex: `response
.js`)
[x] refactor the `storage.js` module to use file system persistence
[x] use the `fs` module to create and read the associated data files
[x] the name of the file should contain the related resource id