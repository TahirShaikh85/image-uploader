# Image Uploader Project

This is a Node.js/Express.js application that allows users to upload images to a MongoDB database. 
The images are stored as base64-encoded strings in the database and can be accessed and displayed on the application's web interface. 
The application uses Handlebars as the view engine to generate dynamic HTML pages.

## Prerequisites
Before running this application, you must have the following software installed on your system:

Node.js (version 12 or higher)

MongoDB (version 4 or higher)

## Getting Started
To get started, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the dependencies by running npm install.
4. Create Environment variable file (config.js)
5. Add your MongoDB connection URI to config.js and export it
6. Start the server by running npm start.
7. Open a web browser and go to http://localhost:3000 to access the application.

## Usage
To upload images, follow these steps:

1. Click on the "Choose Files" button on the home page.
2. Select one or more image files to upload (up to 12 at a time).
3. Click on the "Upload" button to start the upload process.
4. Wait for the upload to complete. You will see a message indicating the status of the upload.
5. It will redirect back to the home page and the images uploaded will displayed in cards

## Features
This application has the following features:

1. Image upload: Users can upload one or more image files at a time, up to a maximum of 12 images.
2. Base64 encoding: The images are stored as base64-encoded strings in the MongoDB database.
3. Web interface: The application has a web interface that allows users to view and manage the uploaded images.
4. Dynamic HTML: The application uses Handlebars as the view engine to generate dynamic HTML pages.
5. MongoDB database: The images are stored in a MongoDB database, which provides scalable and reliable storage for the uploaded images.

## Future Work
Some potential areas for improvement or expansion of this application include:

1. Image editing: Allow users to edit images before uploading, such as resizing or cropping.
2. User authentication: Add user authentication to restrict access to image uploads and management.
3. Cloud storage: Integrate the application with a cloud storage service such as AWS S3 to provide more scalable and reliable storage for images.
4. Image search: Add a search functionality to allow users to search for specific images in the database.

## Conclusion
This Image Uploader project is a simple but functional web application that demonstrates the use of Node.js, Express.js, MongoDB, and Handlebars to build a dynamic and scalable web application. With a few modifications and additions, it could be expanded into a more full-featured image management system.
