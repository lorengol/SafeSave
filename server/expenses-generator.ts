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

export const generate = (Age: number, currUserId: number, currBankAccountId, currCreditCardId, start, end) => {

    userId = currUserId;
    bankAccountId = currBankAccountId;
    creditCardId = currCreditCardId;


    // var end = new Date();
    // var start = new Date(end.getFullYear(), end.getMonth(), 1);
    // var lastMonthFirst = new Date(today.getFullYear(), today.getMonth() - 1, 30);
    // var lastMonthLast = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    
    if(Age <= 20) {
        addExpense(FOOD, 50, 150, start,end);
        addExpense(FOOD, 50, 150, start,end);
        addExpense(TRANSPORT, 50, 80, start,end);
        addExpense(CLOTHING, 200, 400, start,end);    
    } else if (Age > 20 && Age < 30) {
        addExpense(FOOD, 200, 350, start,end);
        addExpense(FOOD, 200, 350, start,end);
        addExpense(TRANSPORT, 50, 150, start,end);
        addExpense(TRANSPORT, 50, 150, start,end);
        addExpense(CLOTHING, 250, 500, start,end);
        addExpense(CLOTHING, 250, 500, start,end);
        addExpense(LEISURE, 100, 200, start,end);
        addExpense(LEISURE, 100, 200, start,end);
        addExpense(LEISURE, 100, 200, start,end);
        addExpense(CITY_AND_STATE, 100, 500, start,end);
        addExpense(MEDICAL, 100, 300, start,end);
        addExpense(COSMETICS, 100, 400, start,end);
    } else if(Age >= 30 && Age < 45) {
        addExpense(FOOD, 250, 400, start,end);
        addExpense(FOOD, 250, 400, start,end);
        addExpense(TRANSPORT, 150, 300, start,end);
        addExpense(TRANSPORT, 150, 300, start,end);
        addExpense(CLOTHING, 250, 500, start,end);
        addExpense(CLOTHING, 250, 500, start,end);
        addExpense(LEISURE, 100, 200, start,end);
        addExpense(CITY_AND_STATE, 100, 500, start,end);
        addExpense(MEDICAL, 100, 200, start,end);
        addExpense(MEDICAL, 100, 200, start,end);
        addExpense(HOUSING, 100, 300, start,end)
        addExpense(HOUSING, 100, 300, start,end);
        addExpense(ELECTRONICS, 200, 600, start,end);        
    } else if(Age >= 45 && Age < 55) {
        addExpense(FOOD, 250, 400, start,end);
        addExpense(FOOD, 250, 400, start,end);
        addExpense(TRANSPORT, 150, 300, start,end);
        addExpense(TRANSPORT, 150, 300, start,end);
        addExpense(CLOTHING, 250, 500, start,end);
        addExpense(CITY_AND_STATE, 200, 500, start,end);
        addExpense(LEISURE, 50, 150, start,end);
        addExpense(MEDICAL, 80, 150, start,end);
        addExpense(MEDICAL, 80, 150, start,end);
        addExpense(MEDICAL, 80, 150, start,end);
        addExpense(HOUSING, 100, 300, start,end);
        addExpense(HOUSING, 100, 300, start,end);
        addExpense(ELECTRONICS, 200, 600, start,end);       
        addExpense(ELECTRONICS, 200, 600, start,end);     
        addExpense(COSMETICS, 100, 400, start,end);
    } else if(Age >= 55 && Age < 67) {
        addExpense(FOOD, 250, 400, start,end);
        addExpense(FOOD, 250, 400, start,end);
        addExpense(TRANSPORT, 150, 300, start,end);
        addExpense(TRANSPORT, 150, 300, start,end);
        addExpense(CLOTHING, 250, 500, start,end);
        addExpense(CITY_AND_STATE, 200, 500, start,end);
        addExpense(LEISURE, 50, 150, start,end);
        addExpense(HOUSING, 100, 300, start,end);
        addExpense(ELECTRONICS, 200, 600, start,end);      
        addExpense(MEDICAL, 100, 200, start,end);
        addExpense(MEDICAL, 100, 200, start,end);
        addExpense(MEDICAL, 80, 150, start,end);
        } else if(Age >= 67 && Age < 80) {
        addExpense(FOOD, 250, 400, start,end);
        addExpense(CLOTHING, 100, 200, start,end);
        addExpense(CITY_AND_STATE, 100, 300, start,end);
        addExpense(TRANSPORT, 100, 200, start,end);
        addExpense(MEDICAL, 100, 200, start,end);
        addExpense(MEDICAL, 100, 200, start,end);
        addExpense(MEDICAL, 100, 300, start,end);
    } else {
        addExpense(FOOD, 50, 400, start,end);
        addExpense(CLOTHING, 150, 500, start,end);
    }
}

const addExpense = async (category: number, min: number, max: number, startDate, endDate) => {
    let business:any = [];
    business = await getBusinessByCategory(category);
    let randomValue = Math.floor(Math.random() * business.length);
    let expense: Expense = new Expense();        
    expense.business_id = business[randomValue].id
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    expense.expense = randomValue
    expense.user_id = userId;

    var date = randomDate(startDate, endDate)
    expense.date = date;

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