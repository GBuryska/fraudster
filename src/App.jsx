import TransactionList from "./pages/TransactionList.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import {AuthProvider} from "./utils/AuthContext.jsx";
import FraudTransactions from "./pages/FraudTransactions.jsx";
import PrivateRoutesBank from "./utils/PrivateRoutesBank.jsx";
import PrivateRoutesCustomer from "./utils/PrivateRoutesCustomer.jsx";

function App() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route element={<PrivateRoutesCustomer />}>
                        <Route path="/transactions" element={<TransactionList/> } />
                    </Route>
                    <Route element={<PrivateRoutesBank />}>
                        <Route path="/fraudtransactions" element={<FraudTransactions/>} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App
