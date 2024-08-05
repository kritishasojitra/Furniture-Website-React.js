import React, { useEffect, useState } from 'react'
import "../Css/Home.css"
import axios from 'axios';
// import 'animate.css';


const Home = () => {

 
  

  return (
    <>
    <div className="main-slider">
      <div className="slider">
      <div id="carouselExampleFade" class="carousel slide carousel-fade h-100" data-bs-ride="carousel">
  <div class="carousel-inner h-100">
    <div class="carousel-item active h-100">
      <div className="text">
        <div className="tx animate__animated animate__fadeInDownBig">
          <h5>$1.009 <span className="text1">$1.150</span></h5>
          <h1>Modern Chairs Living Room</h1>
          <p>Designer chair styles for every space </p>
          <button className='btn ms-4 text-decoration-underline fs-6 mt-2'>SHOP NOW</button>
        </div>
        <div className="img animate__animated animate__fadeInDownBig">
          <div className="off">
            <h5>UP TO</h5>
            <h1 className=" animate__animated animate__swing">50%</h1>
            <p>ON SELECTED ITEMS</p>
          </div>
        <img src="img/slide-1-home3.png" class="d-block " alt="..."/>
        </div>
      </div>
    </div>
    <div class="carousel-item" style={{background:"#CDFADB"}}>
    <div className="text" style={{background:"#CDFADB"}}>
        <div className="tx animate__animated animate__fadeInDownBig" style={{background:"#CDFADB"}}>
          <h5>$1.009 <span className="text1">$1.150</span></h5>
          <h1>Decor WithNew Kitchen Cabinets</h1>
          <p>Cabinets & Chests On Sale & Deals </p>
          <button className='btn ms-4 text-decoration-underline fs-6 mt-2'>SHOP NOW</button>
        </div>
        <div className="img animate__animated animate__fadeInDownBig" style={{background:"#CDFADB"}}>
        <img src="img/slide-2-home3.png" class="d-block " alt="..." style={{width:"60%" , marginLeft:"150px"}}/>
        </div>
      </div>
    </div>
    <div class="carousel-item" style={{background:"#A3D8FF"}}>
    <div className="text" style={{background:"#A3D8FF"}}>
        <div className="tx animate__animated animate__fadeInDownBig" style={{background:"#A3D8FF"}}>
          <h5>$1.009 <span className="text1">$1.150</span></h5>
          <h1>Lamps & Lighting You Will Love</h1>
          <p>Drive Up or Order </p>
          <button className='btn ms-4 text-decoration-underline fs-6 mt-2'>SHOP NOW</button>
        </div>
        <div className="img animate__animated animate__fadeInDownBig" style={{background:"#A3D8FF"}}>
        <img src="img/slide-3-home3.png" class="d-block " alt="..." style={{width:"60%", marginLeft:"150px"}}/>
        </div> 
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>


    <div class="container1">
      <div class="shop1">
        <h3 className='fw-bold ms-5'>SHOP BY CATEGORY</h3>
      </div>
      <div class="shop2">
        <div className="s1">
          <div className="s">
            <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/04/icon-2-2x.png"/>
          </div>
          <div className="s">
            <h4 className="fw-bold mt-5">Lamp</h4>
            <p>7 Products</p>         
          </div>
        </div>
        <div className="s1">
           <div className="s">
            <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/04/icon-4-2x.png"/>
          </div>
          <div className="s">
            <h4 className="fw-bold mt-5">Table</h4>
            <p>5 Products</p>         
          </div>
        </div>
        <div className="s1">
           <div className="s">
            <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/04/icon-3-2x.png"/>
          </div>
          <div className="s">
            <h4 className="fw-bold mt-5">Bed</h4>
            <p>7 products</p>         
          </div>
        </div>
        <div className="s1">
           <div className="s">
            <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/04/icon-5-2x.png"/>
          </div>
          <div className="s">
            <h4 className="fw-bold mt-5">Sofa</h4>
            <p>8 products</p>         
          </div>
        </div>
      </div>
    </div>

    <div className="offer1">
      <div className="offer2">
        <img src="img/lamp-1-1.jpg"/>
        <div className="top-text">
          <h5>ENDS TOMORROW</h5>
          <h3 className='mt-3'>Up To 40% Off<br/> Top Lamp Brands</h3>
        </div>
      </div>
      <div className="offer3">
        <img src="public/img/sofa-2-1.jpg"/>
        <div className="top-text">
        <h5>BIG SALE</h5>
          <h3 className='mt-3'>Up To 40% Off<br/> Top Lamp Brands</h3>

        </div>
      </div>
    </div>

   

    <div className="off-box">
      <div className='off-box1'>
        <div className="off-box2">
          <p>END OF SEASON SALE</p>
          <h1>Up To 60% Off</h1>
          <button>1221<br/>Days</button>
          <button className='ms-3 mt-4'>23<br/>Hours</button>
          <button className='ms-3 mt-4'>26<br/>mins</button>
          <button className='ms-3 mt-4'>07<br/>Secs</button>
        </div>
        <div className="off-box2">
          <img src='https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/04/sofa.png'/>
        </div>
      </div>
    </div>


    {/* <div className="box1"></div> */}

    <div className="poster-box">
      <div className="poster-box1">
        <div className="poster-box2">
          <h1>Get A $20 Nooni Card</h1>
          <h6>When You Buy $100 E-Gift Cards</h6>
          <button className='btn ms-4 text-decoration-underline fs-6 mt-2'>SHOP NOW</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home