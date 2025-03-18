import React, { useState } from 'react';
import './TransactionList.css';

function TransactionList({ transactions }) {
    const [expandedTransactions, setExpandedTransactions] = useState({});

    const toggleTransactionDetails = (id) => {
        setExpandedTransactions((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const sortedTransactions = [...transactions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const getRowColor = (transaction) => {
        if (transaction.fraud) {
            return 'red-row';
        } else if (transaction.warning) {
            return 'orange-row';
        }
        else {
            return 'green-row';
        }
    };

    return (
        <table className="transaction-table">
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Deposits/Credits</th>
                <th>Withdrawals/Debits</th>
                <th>Details</th>
            </tr>
            </thead>
            <tbody>
            {sortedTransactions.map((transaction) => (
                <React.Fragment key={transaction.id}>
                    <tr className={getRowColor(transaction)}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.deposit ? `$${transaction.deposit.toFixed(2)}` : ''}</td>
                        <td>{transaction.withdrawal ? `$${transaction.withdrawal.toFixed(2)}` : ''}</td>
                        <td>
                            <button onClick={() => toggleTransactionDetails(transaction.id)}>
                                {expandedTransactions[transaction.id] ? 'Collapse' : 'Expand'}
                            </button>
                        </td>
                    </tr>
                    {expandedTransactions[transaction.id] && (
                        <tr className="expanded-row">
                            <td colSpan="5">
                                <div className="transaction-details">
                                    <strong>Transaction ID:</strong> {transaction.id}
                                </div>
                                <div className="transaction-details">
                                    <strong>Merchant:</strong> {transaction.merchant || 'N/A'}
                                </div>
                                <div className="transaction-details">
                                    <strong>Category:</strong> {transaction.category || 'N/A'}
                                </div>
                            </td>
                        </tr>
                    )}
                </React.Fragment>
            ))}
            </tbody>
        </table>
    );
}

export default TransactionList;