import React from 'react'
import './App.css'
import Layout from './components/common/layout/Layout'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'


function App() {

  return (
    <>
    <Header/>
 <Layout>
<div className='mb-3'>
  <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c85e16df7aedd64e.jpg?q=20" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f8a77e5d6118ba7c.jpeg?q=20" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b1ae4615d83a193a.jpg?q=20" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
</div>
 </Layout>
  
    </>
  )
}

export default App
