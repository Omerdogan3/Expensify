import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
store.dispatch(addExpense({description:'water Bill'}));
store.dispatch(addExpense({description:'asd Bill'}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

console.log(store.getState());

ReactDOM.render(<AppRouter/>,document.getElementById('app'));