// src/components/Layout.js

import React from 'react';
import Sidebar from '../sidebar/SideBar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
    
    <div className="layout">
      <Sidebar />
   
       
        <div className="main-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
