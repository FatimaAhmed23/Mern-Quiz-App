# Getting Started with Quiz App

This project is created using nodejs and mongodb on backend and react js on frontend

## Create Database

Create a mongodb database and add two collections "quiz_questions" and "users". 

## Set Environment Variables

Create a .env file on root location and set these two variables:

### TESTSYSTEM_DB_URI = '<YourDatabaseUri>'
### TESTSYSTEM_NS = '<YourDatabaseName>'

## Available Scripts

In the project root directory, you can run:

### `nodemon server` (by default it will look for PORT:5000)

Runs the app in the development mode.\
Open [http://localhost:5000] to view it in the browser.

The page will reload if you make edits.\

In the project frontend directory , you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Shift this build folder to the root directory to serve react files using nodejs

## Seeding the database

Add this code snippet to index.js (The exact location is commented inside the file)

    const collection = client.db(process.env.TESTSYSTEM_NS).collection(
      "quiz_questions"
    );
    collection.drop();
    collection.insertMany(seeddata);

Note: Dont forget to comment it out after inserting the data.
    

