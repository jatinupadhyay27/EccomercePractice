import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
function Header() {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <a className="navbar-brand ms-3" href="#">Ecomm</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="input-group d-flex justify-content-center mx-auto w-50">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn" style={{background:"#ebebeb",color:"#2e37a4" , border:"none" }} type="submit">Search</button>
      </form>
    </div>
    <div className='d-flex '>
    <Button className='me-4' style={{color:"2e37a4"}}  startIcon={<PersonPinIcon />}>
  Login
</Button>
    <Button className='ms-3 me-3'style={{color:"2e37a4"}} startIcon={<ShoppingCartIcon />}>
  Cart
</Button>
    </div>
  </div>
</nav>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav mx-auto nav-header">
        <div className="nav-item mx-4">
          Men
        </div>
        <div className="nav-item mx-4">
          Woman
        </div>
        <div className="nav-item mx-4">
         Children
        </div>
        <div className="nav-item mx-4 ">
          Home & Living
        </div>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header                           