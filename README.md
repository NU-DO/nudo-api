# NUDO - API
This is the API of Nudo.
![Nudo](https://res.cloudinary.com/difhe4gl3/image/upload/v1604218253/NUDO/assets/Recurso_17_ky7ydo.svg)
## API developed with Express and MongoDB

- [Installation and use](#installation-and-use)
- [Technologies used](#tools)
- [Use it](#live-demo)
- [Team](#developed-by)

## Installation and use:
- Once you have cloned the repository and move to the folder install the dependencies:
```
npm install
```

- Also install nodemon as DevDependency:
```
npm install nodemon --save-dev
```

- Finally once your database is running, run the application:
```
npm run dev
```
This will execute "dev": "nodemon -e js,css app.js" so you won't need to stop and run the app everytime you change anything.

## Tools:
- Express - ^4.17.1
- MongoDB (Mongoose - ^5.10.0)
- Axios - ^0.20.0
- Cors - 2.8.5
- http-errors - ^1.8.0
- Other dependencies:
    - bcrypt - 5.0.0
    - cloudinary - ^1.23.0
    - connect-mongo - ^3.2.0
    - cookie-parser - ^1.4.5
    - dotenv - ^8.2.0
    - express-session - ^1.17.1
    - morgan: ^1.10.0"
    - multer: ^1.4.2
    - multer-storage-cloudinary: ^4.0.0
    - nodemailer - ^6.4.14
    - spotify-web-api-node - ^5.0.0

## Live demo:
[Use the API](https://nudo.herokuapp.com/) -> https://nudo.herokuapp.com/

## Developed by:
- [Fernando Marín](https://github.com/fermarinsanchez)
- [Miguel Valle](https://github.com/MiguelValle94)

