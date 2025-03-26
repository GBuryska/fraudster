import React, {useRef} from "react";
import {createTransaction} from "../utils/TransactionActions.js";

function CreateTransaction() {
    const transactionForm = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const customer_id = transactionForm.current.customerId.value
        const card_number = transactionForm.current.cardNumber.value
        const transaction_timestamp = transactionForm.current.transactionTimestamp.value
        const transaction_amount = parseFloat(transactionForm.current.transactionAmount.value)
        const transaction_currency = transactionForm.current.transactionCurrency.value
        const transaction_type = transactionForm.current.transactionType.value
        const transaction_status = transactionForm.current.transactionStatus.value
        const merchant_id = transactionForm.current.merchantId.value
        const merchant_name = transactionForm.current.merchantName.value
        const transaction_location = transactionForm.current.transactionLocation.value
        const fraud_score = parseFloat(transactionForm.current.fraudScore.value)

        const transaction = {customer_id, card_number, transaction_timestamp, transaction_amount, transaction_currency, transaction_type, transaction_status, merchant_id, merchant_name, transaction_location, fraud_score}

        createTransaction(transaction)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} ref={transactionForm}>
                <div>
                    <label>Customer ID:</label>
                    <input
                        required
                        type="text"
                        name="customerId"
                    />
                </div>
                <div>
                    <label>Card Number (Last 4 Digits):</label>
                    <input
                        required
                        type="text"
                        name="cardNumber"
                        maxLength="4"
                    />
                </div>
                <div>
                    <label>Transaction Timestamp:</label>
                    <input
                        required
                        type="datetime-local"
                        name="transactionTimestamp"
                    />
                </div>
                <div>
                    <label>Transaction Amount:</label>
                    <input
                        required
                        type="number"
                        name="transactionAmount"
                        step="0.01"
                    />
                </div>
                <div>
                    <label>Transaction Currency:</label>
                    <select required name="transactionCurrency">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="MXN">MXN</option>
                    </select>
                </div>
                <div>
                    <label>Transaction Type:</label>
                    <input
                        required
                        type="text"
                        name="transactionType"
                    />
                </div>
                <div>
                    <label>Transaction Status:</label>
                    <select required name="transactionStatus">
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="declined">Declined</option>
                    </select>
                </div>
                <div>
                    <label>Merchant ID:</label>
                    <input
                        type="text"
                        name="merchantId"
                    />
                </div>
                <div>
                    <label>Merchant Name:</label>
                    <input
                        required
                        type="text"
                        name="merchantName"
                    />
                </div>
                <div>
                    <label>Transaction Location:</label>
                    <input
                        type="text"
                        name="transactionLocation"
                    />
                </div>
                <div>
                    <label>Fraud Score:</label>
                    <input
                        type="text"
                        name="fraudScore"
                        step=".01"
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="login-button"
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateTransaction;