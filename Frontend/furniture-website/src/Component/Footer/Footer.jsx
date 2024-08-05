import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <hr/>
    <div className="main-footer">
      <div className="footer1">
        <h5 className="mt-5 fw-bold">CONTACT US</h5>
        <p className="mt-4 text-secondary">Tel : (234) 23-45-666</p>
        <p className="text-secondary">Mon-Fri : 8am – 8pm</p>
        <p className="text-secondary">Sat-Sun : 8am – 7pm</p>
      </div>
      <div className="footer1">
        <h5 className="mt-5 fw-bold">DESIGN SERVICE</h5>
        <p className=' mt-4 text-secondary'>Interior Design</p>
        <p className=' text-secondary'>Room Planner</p>
        <p className=' text-secondary'>Our Projects</p>
        <p className=' text-secondary'>Design Chat</p>
      </div>
      <div className="footer1">
        <h5 className='mt-5 fw-bold'>ABOUT</h5>
        <p className='mt-4 text-secondary'>Our Story</p>
        <p className='text-secondary'>Careers</p>
        <p className='text-secondary'>Influencers</p>
        <p className='text-secondary'>Join our team</p>
      </div>
      <div className="footer1">
        <h5 className='mt-5 fw-bold'>CLIENT SERVICE</h5>
        <p className='mt-4 text-secondary'>Contact Us</p>
        <p className='text-secondary'>Customer Service</p>
        <p className='text-secondary'>Find Store</p>
        <p className='text-secondary'>Shipping & Returns</p>
      </div>
      <div className="footer2">
        <div className="footer3">
        <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-messenger"></i>
        </div>
        <div className="footer3">
          <h6 className="text-secondary">© Nooni. All Rights Reserved.</h6>
        </div>
        <div className="footer3">
          <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2022/12/payment.png"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer