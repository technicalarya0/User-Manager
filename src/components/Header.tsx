import { FC } from 'react'
import { NavLink,Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">User Management</NavLink>
                <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userList">User List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
