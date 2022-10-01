# QuackingQuokkas' ezyFind :paw_prints:

This service helps pet owners to locate their lost pets by allowing someone that finds their pet (a scanner) to scan a QR code and alert the owner by emailing or phone calling them. An owner may register their pet in order to generate a **QR Code**  which can be attatched to the pet (say a small token on a collar). When scanned, the user is prompted with information about the pet and options to contact the owner, through **email** and/or **phone**.

## Run the application
On one terminal: run the frontend
```
$ git clone git@github.com:ivanczar/QuackingQuokkasHack.git
$ cd QuackingQuokkasHack
$ cd frontend
$ npm install
$ npm start
```
On another terminal: run the backend
```
$ git clone git@github.com:ivanczar/QuackingQuokkasHack.git
$ cd QuackingQuokkasHack
$ cd backend
$ npm install
$ node app.js
```

## Tech Stack
This project was built using the ***MERN stack***. It uses a **React web-app** for registering the owner and their pet(s), and for displaying the information to whoever scanned the **QR code**, allowing the scanner to email or phone call the owner. In the backend, **Express, Node.js and MongoDB Atlas** are used to receive and store the owner and pet data, and pass this data back to the frontend for QR code generation and displaying of owner and pet data.
