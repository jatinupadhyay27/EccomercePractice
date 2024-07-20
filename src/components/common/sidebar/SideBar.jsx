// src/components/Sidebar.js

import React, { useState } from 'react';
import { FaHome, FaServicestack, FaUser, FaUserMd, FaCalendarAlt, FaCalendarCheck, FaHospital } from 'react-icons/fa';
import '../sidebar/SideBar.css';
import { FiMenu, FiMoreVertical } from 'react-icons/fi';
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <div className="sidebar-toggle mx-auto">
    <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
    {collapsed ? <FiMoreVertical/> : <FiMenu />}
      </button>
    </div>
    
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
 <ul>
   
        <li><FaUser /><a href="#staff">Staff</a></li>
        <li><FaCalendarAlt /><a href="#appointments">Appointments</a></li>
        <li><FaCalendarCheck /><a href="#schedule">Doctor Schedule</a></li>
        <li><FaHospital /><a href="#departments">Departments</a></li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
