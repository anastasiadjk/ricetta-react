# Introduction
This project is the front-end of Ricetta, the app that allows to create, store, change and delete your recipes in MongoDB. The app is made using React.

## Setup

Make sure to follow all these steps below. Do not miss any steps or you won't be able to run this application.

### Clone this repository
Use the following command:
    $ git clone https://github.com/anastasiadjk/ricetta-react.git

### Install the Dependencies

Make sure you already have nodejs & npm installed in your system.

From the project folder, install the dependencies:

    npm i  
    
### Start the app

To start the react-app, from the project folder run:

    npm start
    
At this point the app is not working as you need to have the back-end of this app running in parallel and have MongoDB installed. 
Below you can find how to set up the back-end of the Ricetta app and MongoDB.

### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.
    
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


    
### Populate the Database
At this point you have the MongoDB installed and connected to the server that is running. 
Go to your react-app. If you closed it from the react project folder run again:
    npm start
The button ALL RECIPES should appear on the left in your react-app. To be able to add a new recipe we should first populate DB with categories, like (breakfast, lunch, dinner). 
#### You can do that directly in MongoDB
For that go to MongoDB Compass (a tool installed together with MongoDB).
Under the ricetta database (that was created automatically when connecting to MongoDB in back-end) check if collection with the name 'categories' exists.
If not create a new collection with the name 'categories'. To add data in the collection go to the categories collection and click the button "add data" -> insert document.
Next add a key value pair to an existing object like shown below. (The ID is given automatically).

         {
          "_id": {
            "$oid": "6278e7fdc8f404e4800bfc3f"
          },
          "name": "breakfast"  
        }

#### Populating categories using POSTMAN

In Postman choose POST request to ---> http://localhost:3900/api/categories
Choose Body, raw, JSON. Insert key value pair in the following way:

{
 "name":"dinner"
}

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


