import React from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
    let { uid } = useParams();
    let location = useLocation();
    let firstName = location.state?.data?.firstName;

    return (
        <div className="d-flex" id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <img src="/pic.jpg" alt="pic-profile" className="rounded-circle" style={{ width: '200px' }} />
                <div className="sidebar-heading text-center">{firstName}</div>
                <div className="list-group list-group-flush">
                    <Link to='/dashboard/:uid' className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link to="/certificate/:uid" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faUser} /> Certificate
                    </Link>
                    <Link to="/matkul" className="list-group-item list-group-item-action bg-light">
                        <FontAwesomeIcon icon={faCog} /> Daftar Matkul
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
