import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavCus(props) {
    const { selected } = props;
    const navigate = useNavigate();
    return (
        <nav className="navcus">
            <button className={`navbar-option ${selected === 'transactions' ? 'selected' : 'notSelected'}`} onClick={() => navigate('/transactions')}>Transactions</button>
            <button className={`navbar-option ${selected === 'review' ? 'selected' : 'notSelected'}`} onClick={() => navigate('/review')}>Review</button>
            <button className={`navbar-option ${selected === 'settings' ? 'selected' : 'notSelected'}`} onClick={() => navigate('/settings')}>Settings</button>
        </nav>
    );
}

export default NavCus;