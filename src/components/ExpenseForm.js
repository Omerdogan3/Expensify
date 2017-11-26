import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do YYYY'));


export default class ExpenseForm extends React.Component{
    state = {
        description: "",
        note:"",
        amount:"",
        createdAt: moment(),
        calendarFocused:false
    };

    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>({description})); 
    };
    onNoteChange = (e) => {
        e.persist();
        this.setState(()=>({note: e.target.value}));
    };
    amountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };

    onDateChange = (createdAt) => {
        this.setState(()=> ({createdAt}));
    };

    onFocusChanged = (focused) =>{
        this.setState(() => ({calendarFocused:focused}));
    };

    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    ></input>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.amountChange}
                    >
                    </input>

                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange = {() => false}
                    />

                    <textarea
                        placeholder="Add a note for your expense"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    >  
                    </textarea>
                    <button>Add Expense</button>
                    
                </form>
            </div>
        )
    }
}