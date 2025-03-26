import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {getTransactions} from "../utils/TransactionActions.js";

function TransactionList() {
    const [transactions, setTransactions] = useState([]);
    const [expandedTransactions, setExpandedTransactions] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await getTransactions();
            setTransactions(data);
        }
        fetchData();
    }, []);

    const toggleTransactionDetails = (id) => {
        setExpandedTransactions((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const sortedTransactions = [...transactions].sort(
        (a, b) => new Date(b.transaction_date) - new Date(a.transaction_date)
    );

    const getRowColor = (transaction) => {
        if (transaction.transaction_flag === "declined") {
            return 'red-row';
        } else if (transaction.transaction_flag === "warning") {
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
                        <React.Fragment key={transaction.$id}>
                            <tr className={getRowColor(transaction)}>
                                <td>{`****-****-****-${transaction.card_number.slice(-4)}`}</td>
                                <td>{new Date(transaction.transaction_date).toLocaleDateString('en-US')}</td>
                                <td>{transaction.transaction_type}</td>
                                <td>{transaction.amount > 0 ? `$${transaction.amount.toFixed(2)}` : ''}</td>
                                <td>{transaction.amount < 0 ? `$${transaction.amount.toFixed(2).slice(1)}` : ''}</td>
                                <td>
                                    <button onClick={() => toggleTransactionDetails(transaction.$id)}>
                                        {expandedTransactions[transaction.$id] ? 'Collapse' : 'Expand'}
                                    </button>
                                </td>
                            </tr>
                            {expandedTransactions[transaction.$id] && (
                                <tr className="expanded-row">
                                    <td colSpan="6">
                                        <div className="transaction-details">
                                            <strong>Transaction ID:</strong> {transaction.$id}
                                        </div>
                                        <div className="transaction-details">
                                            <strong>Merchant:</strong> {transaction.merchant_name || 'N/A'}
                                        </div>
                                        <div className="transaction-details">
                                            <strong>Description:</strong> {transaction.description || 'N/A'}
                                        </div>
                                        <div className="transaction-details">
                                            <strong>Location:</strong> {transaction.location || 'N/A'}
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