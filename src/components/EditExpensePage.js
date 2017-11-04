import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
            <p>This is my add Editing Expense Page with if of {props.match.params.id}</p>
        </div>
    );
};

export default EditExpensePage;