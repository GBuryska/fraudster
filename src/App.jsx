import TransactionList from "./pages/TransactionList.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import {AuthProvider} from "./utils/AuthContext.jsx";

function App() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/transactions" element={<TransactionList/> } />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App
