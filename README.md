# Personal Archive

Server Code for [Personal Archive](https://personalarchive.herokuapp.com)

## Project

PersonalArchive

An application used to create personal posts like a website you really liked or a coffee shop you'd like to visit again.
Built with React, Redux, MaterialUI, Express, and MongoDB

## Project Screen Shot(s)

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

### To install and run locally

You will need `node` and `npm` installed globally on your machine.

## Client Setup

Installation:

`npm install`  

To Start Client:

`npm start`

## Server Setup

Now to setup server, clone the [server repository](https://github.com/darkfusion90/personal-archive-server)

Installation:

`npm install`  

To Start Server:

`npm run dev`

## Reflection

- This was a side project I made to learn more about React, Express and MongoDB
- I added additonal things like email verification, password reset and multifactor authentication. These were implemented from scratch making it a very good learning experience working with expirable tokens and authentication that involved more than just usernames and passwords.
- Tools used:
  - Frontend:
    - React and MaterialUI - UI
    - Redux (using redux-toolkit) - State Management
    - Notistack - notification utility used along with MaterialUI
  - Backend:
    - Node and Express - Server setup
    - MongoDB with Mongoose ORM - Database
    - PassportJs - Basic Authentication (not multifactor)
    - Nodemailer - Sending emails
    - ejs - Email templating
    - bcrypt - Password Hashing
    - Morgan - logging
