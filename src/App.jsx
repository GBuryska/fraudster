import './App.css'
import TransactionList from "./TransactionList.jsx";

function App() {
    const transactions = [
        {
            id: 1,
            date: '2023-10-27',
            description: 'Grocery Store',
            withdrawal: 50.0,
            fraud: false,
            warning: false,
            merchant: 'Local Groceries',
            category:'Food'
        },
        {
            id: 2,
            date: '2023-10-28',
            description: 'Salary Deposit',
            deposit: 2000.0,
            fraud: false,
            warning: false,
            merchant: 'Company Inc',
            category: 'Income'
        },
        {
            id: 3,
            date: '2023-10-26',
            description: 'Online Purchase',
            withdrawal: 100.0,
            fraud: true,
            warning: false,
            merchant: 'Example Online Store',
            category: 'Shopping'
        },
        {
            id: 4,
            date: '2023-10-29',
            description: 'ATM Withdrawal',
            withdrawal: 200.0,
            fraud: false,
            warning: true,
            merchant: 'Bank ATM',
            category: 'Withdrawal'
        },
    ];

    return (
        <div>
            <h1>Transaction History</h1>
            <TransactionList transactions={transactions} />
        </div>
    );
}

export default App
