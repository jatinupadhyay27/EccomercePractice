// src/components/Sidebar.js

import React, { useState } from "react";
import {
  FaHome,
  FaServicestack,
  FaUser,
  FaUserMd,
  FaCalendarAlt,
  FaCalendarCheck,
  FaHospital,
  FaTshirt,
} from "react-icons/fa";
import "../sidebar/SideBar.css";
import { FiMenu, FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="sidebar-toggle mx-auto">
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <FiMoreVertical /> : <FiMenu />}
        </button>
      </div>

      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <span
          onClick={toggleVisibility}
          className="Main"
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <FaTshirt className="ms-3 me-2" />{" "}
          <span className="menu-text">
            Top wear
            {isVisible ? (
              <SlArrowDown className="ms-2" style={{ fontSize: "10px" }} />
            ) : (
              <SlArrowRight className="ms-2" style={{ fontSize: "10px" }} />
            )}{" "}
          </span>
        </span>
        {isVisible && (
          <ul className="my-1">
            <li className="ms-4">
              <Link to="/#">T-Shirts</Link>
            </li>
            <li className="ms-4">
              <Link to="/#">Formal Shirts</Link>
            </li>
            <li className=" ms-4">
              <Link to="/#">Casual Shirts</Link>
            </li>
          </ul>
        )}
        <ul>
          <li>
            <FaUser />
            <a href="#staff">Staff</a>
          </li>
          <li>
            <FaCalendarAlt />
            <a href="#appointments">Appointments</a>
          </li>
          <li>
            <FaCalendarCheck />
            <a href="#schedule">Doctor Schedule</a>
          </li>
          <li>
            <FaHospital />
            <a href="#departments">Departments</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
