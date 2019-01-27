import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark" id="nav">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Contact Us
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto footer-link">
                            <li className="nav-item">
                                <a href="mailto:mrnysolutions@gmail.com" className="btn btn-default navbar-btn footer-btn">Email Us</a>
                            </li>
                            <li className="nav-item">
                                <p className="btn btn-default navbar-btn footer-btn">516.410.7462</p>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Footer;