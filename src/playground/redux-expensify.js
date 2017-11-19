import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({description='', note='', amount=0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


const demoState = {
    expenses: [{
        id: 'asdasd',
        description: 'Heyoyoyoyo',
        note: 'This was great',
        amount: 54500,
        createdAt: 0 
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

