import React from 'react'
import Header from '../common/header/Header'
import Layout from '../common/layout/Layout'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../common/sidebar/SideBar';

function Mens() {

  const location = useLocation();
  console.log(location.pathname);
  const route = location.pathname;

 
  const state = useSelector((state) => state);
console.log(state);


  return (
    <>
      <Header/>
      <Layout>
        <div>
          <h1>Route: 
            {route}
          </h1>
          
        </div>
      </Layout>
    </>
  )
}

export default Mens