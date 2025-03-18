import "./Sidebar.css"

function Sidebar() {
    return (
        <nav className="sidebar">
            <a href="/">Transactions</a>
            <a href="/prevention">Prevention</a>
            <a href="/settings">Settings</a>
        </nav>
    )
}

export default Sidebar;