import {useAuth} from "../utils/UseAuth.jsx";

function Sidebar() {
    const {user} = useAuth()

    if (user.labels.includes('customer')) {
        return (
            <nav className="sidebar">
                <a href="/transactions">Transactions</a>
            </nav>
        )
    } else if (user.labels.includes('bank')) {
        return (
            <nav className="sidebar">
                <a href="/fraudtransactions">Fraud Transactions</a>
                <a href="/createcustomer">Create Customer</a>
            </nav>
        )
    }

}

export default Sidebar;