# Introduction
This project is the front-end of Ricetta, the app that allows to create, store, change and delete your recipes in MongoDB. The app is made using React.

## Setup

Make sure to follow all these steps below. Do not miss any steps or you won't be able to run this application.

### Clone this repository

    $ git clone https://github.com/anastasiadjk/ricetta-react.git

### Install the Dependencies

Make sure you already have nodejs & npm installed in your system.

From the project folder, install the dependencies:

    npm i  
    
### Start the app

To start the react-app, from the project folder run:

    npm start
    
At this point you will not see anything as you need to have the back-end of this app running in parallel and have MongoDB installed. 
Below you can find how to set up the back-end of the Ricetta app and MongoDB.
    
### Back-end setup 
Install latest version of node on your machine.
    https://nodejs.org/en/
    
Clone ricetta-backend project from ricetta-back-end repository.
   $ git clone https://github.com/anastasiadjk/ricetta-back-end.git
   
Next from the project folder install all the dependencies:

    npm i

### Start the Server
Run the following command from the project folder:

    node index.js

This will launch the Node server on port 3900

    
### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.

    
### Populate the Database

You can populate the DB using postman
!!!The Postman Chrome app can only run on the Chrome browser!!!


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


