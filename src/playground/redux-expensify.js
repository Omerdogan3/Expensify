import {createStore, combineReducers} from 'redux';

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