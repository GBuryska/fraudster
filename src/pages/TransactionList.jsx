import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {getTransactions} from "../utils/TransactionActions.js";
import {useAuth} from "../utils/UseAuth.jsx";

function TransactionList() {
    const [transactions, setTransactions] = useState([]);
    const [expandedTransactions, setExpandedTransactions] = useState({});
    const {user} = useAuth()

    useEffect(() => {
        async function fetchData() {
            const data = await getTransactions(user.$id);
            console.log(data);
            setTransactions(data);
        }
        fetchData();
    }, [user]);

    const toggleTransactionDetails = (id) => {
        setExpandedTransactions((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const sortedTransactions = [...transactions].sort(
        (a, b) => new Date(b.transaction_timestamp) - new Date(a.transaction_timestamp)
    );

    const getRowColor = (transaction) => {
        if (transaction.fraud_score <= 70) {
            return 'red-row';
        } else if (transaction.fraud_score <= 80) {
            return 'orange-row';
        } else {
            return 'green-row';
        }
    };

    return (
        <>
            <Navbar className="navbar" />
            <div className="sidebar-page">
                <Sidebar />
                <table className="transaction-table">
                    <thead className="transaction-head">
                        <tr>
                            <th>Card Number</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Deposits</th>
                            <th>Withdrawals</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {sortedTransactions.map((transaction) => (
                        <React.Fragment key={transaction.$transaction_id}>
                            <tr className={getRowColor(transaction)}>
                                <td>{`****-****-****-${transaction.card_number.slice(-4)}`}</td>
                                <td>{new Date(transaction.transaction_timestamp).toLocaleString()}</td>
                                <td>{transaction.transaction_type}</td>
                                <td>{transaction.transaction_amount > 0 ? `$${transaction.transaction_amount.toFixed(2)}` : ''}</td>
                                <td>{transaction.transaction_amount < 0 ? `$${transaction.transaction_amount.toFixed(2).slice(1)}` : ''}</td>
                                <td>
                                    <button onClick={() => toggleTransactionDetails(transaction.$transaction_id)}>
                                        {expandedTransactions[transaction.$transaction_id] ? 'Collapse' : 'Expand'}
                                    </button>
                                </td>
                            </tr>
                            {expandedTransactions[transaction.$transaction_id] && (
                                <tr className="expanded-row">
                                    <td colSpan="6">
                                        <div className="transaction-details">
                                            <strong>Transaction ID:</strong> {transaction.$transaction_id}
                                        </div>
                                        <div className="transaction-details">
                                            <strong>Merchant:</strong> {transaction.merchant_name || 'N/A'}
                                        </div>
                                        <div className="transaction-details">
                                            <strong>Currency:</strong> {transaction.transaction_currency || 'N/A'}
                                        </div>
                                        <div className="transaction-details">
                                            <strong>Location:</strong> {transaction.transaction_location || 'N/A'}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TransactionList;