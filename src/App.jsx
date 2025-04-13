import TransactionsPage from "./pages/TransactionsPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import {AuthProvider} from "./utils/AuthContext.jsx";
import FraudTransactions from "./pages/FraudTransactions.jsx";
import PrivateRoutesBank from "./utils/PrivateRoutesBank.jsx";
import PrivateRoutesCustomer from "./utils/PrivateRoutesCustomer.jsx";
import CreateTransaction from "./pages/CreateTransaction.jsx";
import CreateTransactions from "./pages/CreateTransactions.jsx";
import CreateCustomer from "./pages/CreateCustomer.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";

function App() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="createtransaction" element={<CreateTransaction/>} />
                    <Route path="createtransactions" element={<CreateTransactions/>} />
                    <Route element={<PrivateRoutesCustomer />}>
                        <Route path="/transactions" element={<TransactionsPage/> } />
                        <Route path="/settings" element={<SettingsPage/>} />
                        <Route path="/review" element={<ReviewPage/>} />
                    </Route>
                    <Route element={<PrivateRoutesBank />}>
                        <Route path="/fraudtransactions" element={<FraudTransactions/>} />
                        <Route path="/create-customer" element={<CreateCustomer/>} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App
