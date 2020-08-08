import { expenseRoutes } from './expenseRouter';
import { bankRoutes } from './bankRoutes';
import "reflect-metadata";
import express from 'express';
import { userRoutes } from './userRoutes';
import {creditCardRoutes} from './creditCardRoutes';
import { createConnection } from "typeorm";
import { limitationRoutes } from './limitationsRoutes';
import { categoryRoutes } from './categoryRoutes';
import { savingRoutes } from './savingRoutes';
const app = express();

// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})
// Handle POST requests that come in formatted as JSON
app.use(express.json())

// User 
app.use('/users', userRoutes);

// Credit Cards
app.use('/credits', creditCardRoutes);

// Bank
app.use('/bank', bankRoutes);

//Limitations
app.use('/limitations', limitationRoutes);

//Category
app.use('/category', categoryRoutes);

// Expense
app.use('/expenses', expenseRoutes);

// Savings
app.use('/savings', savingRoutes);

// Create connection with the DB
createConnection().then(async connection => {    
    // start our server on port 4201
    app.listen(4201, '127.0.0.1', function() {
        console.log("Server now listening on 4201");
    });
}).catch(error => console.log(error));