import React from 'react';
// import {TransactionResolver} from '../../../../homework_web/resolvers/transactions_resolver.ex'

function Delete(transactionId) {

    //  is there a way to access these functions? I assume these are the
    // react equivalent of Services - or do i need to write a Service
    // that interacts with the Resolver?
    //  secondly,(architecture) i know i create-react-app in the middle of
    //  the project - probably shouldnt have done that. things need to be under the
    //  src folder to be able to be accessed - do I need to move the
    //  homework_web and homework folders into the src folder?
    //  I was thinking that might have messed up already imported
    // dependencies like the database.
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
