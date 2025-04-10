import React from 'react';

function NavCus() {

    return (
        <nav className="navcus">
            <div className={'navbar-option'}><a href={'/transactions'}>Transactions</a></div>
            <div className={'navbar-option'}><a href={'/review'}>Review</a></div>
            <div className={'navbar-option'}><a href={'/settings'}>Settings</a></div>
        </nav>
    );
}

export default NavCus;