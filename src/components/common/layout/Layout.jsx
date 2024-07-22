import React, { useEffect } from 'react';
import Sidebar from '../sidebar/SideBar';
import './Layout.css';
import { useDispatch } from 'react-redux';
import { initialState, setSidebarData } from '../../../Redux/Slice';

const Layout = ({ children }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarData(initialState.sidebarData));
  }, [dispatch]);

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