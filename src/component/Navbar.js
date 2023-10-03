import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    static propTypes = {};

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><strong> NewsPedia</strong></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Headlines</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark bg-dark">
                                        <li className="nav-item">
                                            <Link className="dropdown-item" to="/business">Business</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="dropdown-item" to="/health">Health</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="dropdown-item" to="/science">Science</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="dropdown-item" to="/sports">Sports</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="dropdown-item" to="/technology">Technology</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
