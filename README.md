# QuackingQuokkas' QR Code for lost pets :paw_prints:

This service is for pet owners to have a more advanced way to attatch their contact information to their pets. An owner may register their pet in order to generate a **QR Code**  which can be attatched to the pet (say a small token on a collar). When scanned, the user is prompted with information about the pet and options to contact the owner, through **email** and/or **phone**.

## Try it out
```
$ git clone git@github.com:ivanczar/QuackingQuokkasHack.git
$ cd QuackingQuokkasHack
$ npm install
$ cd frontend
$ npm ci
$ npm start
```

## Technology

This project was built using the ***MERN stack***. It uses a **React web-app** for entering the data about owner and pets and for displaying the information to whoever scanned the **QR code**. In the backend, it uses **Express** to register the information passed from the front end and it uses **MongoDB Atlas** to store the data. 
