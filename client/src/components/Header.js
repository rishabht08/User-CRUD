import React from 'react';
import "../styles/header.css"
import CompanyLogo from "../assets/Logo.svg"
import Dashboard from "../assets/ico_dashboard.svg"
import Users from "../assets/ico_users.svg"
import Sessions from "../assets/ico_sessionmanager.svg"
import Notifications from "../assets/ico_notification.svg"
import User from "../assets/ico_user.svg"
import Down from "../assets/ico_downarrow.svg"


function Header() {
  return (
    <div className="main-header">
        <img src={CompanyLogo}></img>
        <div className="dashboard">
            <img src={Dashboard}></img>
            <span>Dashboard</span>

        </div>

        <div className="users">
            <img src={Users}></img>
            <span>Users</span>

        </div>

        <div className="sessions">
            <img src={Sessions}></img>
            <span>Session Manager</span>

        </div>

        <div className="userpanel">
        <img src={Notifications}></img>
        <div className="user">
        <img src={User}></img>
            <span>John Smith</span>

        </div>
        <img src={Down}></img>

        </div>

    </div>
  );
}

export default Header;
