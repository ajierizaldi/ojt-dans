import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
    return (
        <div className="d-flex" id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Dashboard </div>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link to="/profile" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faUser} /> Profile
                    </Link>
                    <Link to="/settings" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faCog} /> Settings
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
