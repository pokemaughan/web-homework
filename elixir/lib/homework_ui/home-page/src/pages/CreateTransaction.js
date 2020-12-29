import React from 'react';

function CreateTransaction() {
    return (
        <div className='form'>
            <div id='title'>
            Create A New Transaction
            </div>
            <form>
                <label>
                    USER ID
                    <input type="text" name="user_id"/>
                </label>
                <label>
                    MERCHANT ID
                    <input type="text" name="merchant_id"/>
                </label>
                <label>
                    AMOUNT IN CENTS
                    <input type="text" name="amount"/>
                </label>
                <label>
                    CREDIT
                    <input type="text" name="credit"/>
                </label>
                <label>
                    DEBIT
                    <input type="text" name="debit"/>
                </label>
                <label>
                    DESCRIPTION
                    <input type="text" name="description"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CreateTransaction;
