import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();
// console.log(now.format('MMM Do YYYY'));


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description:'',
            note: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount/100).toString(): '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

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
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=> ({createdAt}));
        }
    };

    onFocusChanged = ({focused}) =>{
        this.setState(() => ({calendarFocused:focused}));
    };

    onSubmit = (e) =>{
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: 'Please provide a description and amount.'}));
            //'Please provide description && amount'
        }else{
            this.setState(()=> ({error:''}));
            // console.log('submitted');
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    };

    

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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