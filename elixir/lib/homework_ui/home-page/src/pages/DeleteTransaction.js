import React from 'react';
// import {TransactionResolver} from '../../../../homework_web/resolvers/transactions_resolver.ex'

function Delete(transactionId) {
    // TransactionResolver.delete_transaction(transactionId);
}

function DeleteTransaction() {
    return (
        <div className='form'>
            <div id='title'>
                Delete A Transaction
            </div>
            <form>
                <label>
                    TRANSACTION ID
                    <input type="text" name="transaction_id"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default DeleteTransaction;
