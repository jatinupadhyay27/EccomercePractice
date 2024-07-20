// src/components/Layout.js

import React from 'react';
import Sidebar from '../sidebar/SideBar';
import Header from '../header/Header';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
    </>
  );
};

export default Layout;
