import {getBusinessByCategory} from './DAL/business-dal'
import { Expense } from './src/entity/Expense'
import * as expenseDAL from './DAL/expense-dal';

const CLOTHING = 1
const TRANSPORT = 2
const FOOD = 3
const LEISURE = 4
const MEDICAL = 5
const ELECTRONICS = 6
const COSMETICS = 7
const CITY_AND_STATE = 8
const OTHER = 9
const HOUSING = 10

const generate = (Age: number, userId: number) => {

    let expenses = []
    
    
    if(Age <= 20) {
        addExpense(FOOD, 50, 150);
        addExpense(FOOD, 50, 150);
        addExpense(TRANSPORT, 50, 80);
        addExpense(CLOTHING, 200, 400);    
    } else if (Age > 20 && Age < 30) {
        addExpense(FOOD, 200, 350);
        addExpense(FOOD, 200, 350);
        addExpense(TRANSPORT, 50, 150);
        addExpense(TRANSPORT, 50, 150);
        addExpense(CLOTHING, 250, 500);
        addExpense(CLOTHING, 250, 500);
        addExpense(LEISURE, 100, 200);
        addExpense(LEISURE, 100, 200);
        addExpense(CITY_AND_STATE, 100, 500);
        addExpense(MEDICAL, 100, 300);
        addExpense(COSMETICS, 100, 400);
    } else if(Age >= 30 && Age < 45) {
        addExpense(FOOD, 250, 400);
        addExpense(FOOD, 250, 400);
        addExpense(TRANSPORT, 150, 300);
        addExpense(TRANSPORT, 150, 300);
        addExpense(CLOTHING, 250, 500);
        addExpense(CLOTHING, 250, 500);
        addExpense(LEISURE, 100, 200);
        addExpense(CITY_AND_STATE, 100, 500);
        addExpense(MEDICAL, 100, 200);
        addExpense(MEDICAL, 100, 200);
        addExpense(HOUSING, 100, 300)
        addExpense(HOUSING, 100, 300);
        addExpense(ELECTRONICS, 200, 600);        
    } else if(Age >= 45 && Age < 55) {
        getBusinessByCategory(FOOD);
        getBusinessByCategory(TRANSPORT)
        getBusinessByCategory(CLOTHING)
        getBusinessByCategory(CITY_AND_STATE)
        getBusinessByCategory(LEISURE) // פחות
        getBusinessByCategory(MEDICAL)
        getBusinessByCategory(HOUSING) // יותר
        getBusinessByCategory(ELECTRONICS)  // יותר    
    } else if(Age >= 55 && Age < 67) {
        getBusinessByCategory(FOOD); // פחות
        getBusinessByCategory(TRANSPORT)
        getBusinessByCategory(CLOTHING)
        getBusinessByCategory(CITY_AND_STATE)
        getBusinessByCategory(LEISURE)
        getBusinessByCategory(ELECTRONICS) // פחות
        getBusinessByCategory(HOUSING) // פחות
        getBusinessByCategory(MEDICAL) // יותר
    } else if(Age >= 67 && Age < 80) {
        getBusinessByCategory(FOOD); // פחות
        getBusinessByCategory(CLOTHING) // פחות
        getBusinessByCategory(CITY_AND_STATE) // פחות
        getBusinessByCategory(TRANSPORT) // פחות
        getBusinessByCategory(MEDICAL) // יותר
    } else {
        getBusinessByCategory(FOOD);
        getBusinessByCategory(CITY_AND_STATE)
        getBusinessByCategory(MEDICAL)
    }

    return expenses;
}

const addExpense = (category: number, min: number, max: number) => {
    let business:any = [];
    business = getBusinessByCategory(category);
    let randomValue = Math.floor(Math.random() * business.length);
    let expense: Expense = new Expense();        
    expense.business_id = business[randomValue].id
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    expense.expense = randomValue

    // Save expense 
}
