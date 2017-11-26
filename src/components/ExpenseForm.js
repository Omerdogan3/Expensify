import React from 'react';

export default class ExpenseForm extends React.Component{
    state = {
        description: "",
        note:"",
        amount:""
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
    }

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