# WeConnect
[![Build Status](https://travis-ci.org/danoseun/WeConnect.svg?branch=develop)](https://travis-ci.org/danoseun/WeConnect)
[![Coverage Status](https://coveralls.io/repos/github/danoseun/WeConnect/badge.svg?branch=develop)](https://coveralls.io/github/danoseun/WeConnect?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/e0c67be99aee34e7e9e6/maintainability)](https://codeclimate.com/github/danoseun/WeConnect/maintainability)

## WEconnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with.

## Table of Contents
- [Application Features](#application-features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Running the tests](#running-the-tests)
- [Built With](#built-with)
- [Contributing to the Project](#contributing-to-the-project)
- [FAQ](#faq)
- [Application Limitations](#application-limitations)
- [License](#license)
- [Credits](#credits)


## Application features
* Users can register on WEconnect
* Users can log into WEconnect
* Users can view all businesses
* Users can search for any business
* Users can search businesses by category
* Users can search businesses by location
* Users can search businesses by location and category
* Users can write a review for any business in the catalog
* Users can register businesses in WEconnect
* Users can update their businesses
* Users can delete their businesses

## API Routes

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>
<tr><td>POST</td> <td>api/v1/businesses</td>  <td>Add Business to catalog</td></tr>

<tr><td>PUT</td> <td>api/v1/businesses/:businessId</td>  <td>Update business</td></tr>

<tr><td>DELETE</td> <td>api/v1/businesses/:businessId</td>  <td>Delete business</td></tr>

<tr><td>POST</td> <td>api/v1/businesses/:businessId/review</td> <td>Add review for a business</td></tr>

<tr><td>GET</td> <td>api/v1/businesses/:businessId/review</td> <td>Get all reviews for a business</td></tr>

<tr><td>GET</td> <td>api/v1/businesses</td> <td>Get all businesses</td></tr>

<tr><td>GET</td> <td>api/v1/businesses/:businessId</td> <td>Get details of a business<td></tr>

<tr><td>GET</td> <td>api/v1/businesses?location=location</td> <td>Get businesses in a particular location<td></tr>

<tr><td>GET</td> <td>api/v1/businesses?category=category</td> <td>Get businesses in a particular category</td></tr>

<tr><td>GET</td> <td>api/v1/businesses?location=location&category=category</td> <td>Get businesses by location and category</td></tr>

<tr><td>POST</td> <td>api/v1/auth/signup</td> <td>Create a user</td></tr>

<tr><td>POST</td> <td>api/v1/auth/login</td> <td>Sign in a user</td></tr>
</table>


### Prerequisites
* Install NodeJs and Postgresql locally
* The app returns data in JSON format and require a client device that can parse JSON.

## Getting Started
Follow the steps below to get the app running locally:
```
# Clone the repository
>$ git clone https://github.com/danoseun/WeConnect.git

# Change directory into it
>$ cd Weconnect/newConnect

# Install all dependencies
> npm install

# Create a .env file and fill it with the sample provided in .env.sample file
> $ touch .env

# Start the application in development mode
> $ npm run migrate
> $ npm run start:dev

# Open running application on browser
> http:localhost:3000/


```

## API Documentation
Access API documentation through this link [Here](https://we-connect-api.herokuapp.com/api-docs/)
<br/><b>UI Template:</b> https://danoseun.github.io/WEconnect/template/index.html

* Run the test with the command  
`> $ npm run test`
## Built with

Bootstrap  
Node.js  
Express  
postgreSQL  
Sequelize ORM

## Contributing to the Project
Contributions are welcome and appreciated. To contribute

- Fork this repository or clone the repository with the command  
`$ git clone https://github.com/danoseun/WeConnect.git`
- Change directory into the folder with the command  
`cd WeConnect/newConnect`
- Create your feature branch and make your contributions to your local copy of the project
- Raise a pull Request against the development branch describing what your feature does and how it can be tested

## FAQ
#### Is this an Open-Source Application?
    Yes it is, and contributing to the development of this
    application is acceptable and by raising a pull request
    

#### Who can contribute?
    Anyone!. This application is open to all those who want to contribute to open-source development and are willing to follow the set standards for contributing.
    
//#### What language was used to develop this application?
   // This project is a full stack Javascript application
    
#### Can I clone this application for personal use?
    Yes!. This application is licensed under MIT. Further information can be found in the LICENSE file.

#### What format is the API response in?
    The API response is in JSON format

## Application limitations
* The application runs on a single database and might impact the speed of response
* Users cannot register or login with their social accounts at the moment
## Credits
Oluwaseun Somefun
