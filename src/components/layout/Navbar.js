import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark" id="nav">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        NYC Fireguard Services
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto nav-link">
                            <li className="nav-item">
                                <Link to="/booking" className="btn btn-default nav-btn">Booking</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/apply-now" className="btn btn-default nav-btn">Join Us</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;