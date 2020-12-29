import React from 'react';

function Edit() {
    return (
        <div className='form'>
            <div id='title'>
                Edit A Transaction
            </div>
            <form>
                <label>
                    TRANSACTION ID
                    <input type="text" name="transaction_id"/>
                </label>
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

export default Edit;
