import {getBusinessByCategory} from './DAL/business-dal'
import { Expense } from './src/entity/Expense'
import * as expenseBL from './BL/expense-bl';

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

var userId;
var bankAccountId;
var creditCardId;

export const generate = (Age: number, currUserId: number, currBankAccountId, currCreditCardId) => {

    userId = currUserId;
    bankAccountId = currBankAccountId;
    creditCardId = currCreditCardId;
    
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
        addExpense(FOOD, 250, 400);
        addExpense(FOOD, 250, 400);
        addExpense(TRANSPORT, 150, 300);
        addExpense(TRANSPORT, 150, 300);
        addExpense(CLOTHING, 250, 500);
        addExpense(CITY_AND_STATE, 200, 500);
        addExpense(LEISURE, 50, 150);
        addExpense(MEDICAL, 80, 150);
        addExpense(MEDICAL, 80, 150);
        addExpense(MEDICAL, 80, 150);
        addExpense(HOUSING, 100, 300);
        addExpense(HOUSING, 100, 300);
        addExpense(ELECTRONICS, 200, 600);       
        addExpense(ELECTRONICS, 200, 600);     
        addExpense(COSMETICS, 100, 400);
    } else if(Age >= 55 && Age < 67) {
        addExpense(FOOD, 250, 400);
        addExpense(FOOD, 250, 400);
        addExpense(TRANSPORT, 150, 300);
        addExpense(TRANSPORT, 150, 300);
        addExpense(CLOTHING, 250, 500);
        addExpense(CITY_AND_STATE, 200, 500);
        addExpense(LEISURE, 50, 150);
        addExpense(HOUSING, 100, 300);
        addExpense(ELECTRONICS, 200, 600);      
        addExpense(MEDICAL, 100, 200);
        addExpense(MEDICAL, 100, 200);
        addExpense(MEDICAL, 80, 150);
        } else if(Age >= 67 && Age < 80) {
        addExpense(FOOD, 250, 400);
        addExpense(CLOTHING, 100, 200);
        addExpense(CITY_AND_STATE, 100, 300);
        addExpense(TRANSPORT, 100, 200);
        addExpense(MEDICAL, 100, 200);
        addExpense(MEDICAL, 100, 200);
        addExpense(MEDICAL, 100, 300);
    } else {
        addExpense(FOOD, 50, 400);
        addExpense(CLOTHING, 150, 500);
    }
}

const addExpense = async (category: number, min: number, max: number) => {
    let business:any = [];
    business = await getBusinessByCategory(category);
    let randomValue = Math.floor(Math.random() * business.length);
    let expense: Expense = new Expense();        
    expense.business_id = business[randomValue].id
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    expense.expense = randomValue
    expense.user_id = userId;

    // Nadav
    var today = new Date();
    var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    var date = randomDate(firstDay, today)
    expense.date = date;
    //

    if(creditCardId != null) {
        expense.credit_card_id = creditCardId;
    }

    if(bankAccountId != null) {
        expense.bank_account_id = bankAccountId;
    }

    expenseBL.insertExpense(expense);
}


const randomDate = (from, to) => {
    from = from.getTime();
    to = to.getTime();
    return new Date(from + Math.random() * (to - from));
}