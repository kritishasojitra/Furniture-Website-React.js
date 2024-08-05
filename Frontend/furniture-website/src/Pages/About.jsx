import React from 'react'
import "../Css/About.css"

const About = () => {
  return (
    <>
    <div className="about-box">
      <h1>About Noon’i</h1>
      <h5 className="mt-4 text-secondary">Noon’i was established in 1990, consectetur eleifend commodo at, consectetur eu justo.<br/> Sed viverra consectetur risus nec ultricies.</h5>
    </div>

    <div className="about-box2">
      <div className="a-box">
      <img src="https://demo.theme-sky.com/nooni/wp-content/uploads/2023/04/about-parallax-1.jpg"></img>
    </div>
    </div>

    <div className="work-box">
      <div className="work-box1">
        <div className="w-box1">
          <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/08/about-3.jpg"/>
        </div>
        <div className="w-box1">
          <div className="wo-box1">
            <h3 className="fw-bold ms-5 mt-4">HOW WE WORKS</h3>
          </div>
          <div className="wo-box2">
            <h5 className="fw-bold ms-5 mt-5">Production Design</h5>
            <p className="fs-5 ms-5 text-secondary">Integer dignissim sagittis quam. Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
          </div>
          <div className="wo-box2">
            <h5 className="fw-bold ms-5 mt-3">Manufacturing</h5>
            <p className="fs-5 ms-5 text-secondary">Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
          </div>
          <div className="wo-box2">
            <h5 className="fw-bold ms-5">Marketing and selling</h5>
            <p className="fs-5 ms-5 text-secondary">Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="team-box">
      <div className="team-box1">
        <h2 className="text-center mt-2 fw-bold">OUR TEAM</h2>
      </div>
      <div className='team-box2'>
        <div className="t-box">
          <img src='https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2021/04/team-1.jpg'/>
          <h6 className="mt-3 fw-bold">CEO & FOUNDER</h6>
          <h3 className='text-secondary'>John Hossain</h3>
          <div className="hover-box">
            <div className="t-icon">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-messenger"></i>
          </div>
          </div>
        </div>
        <div className="t-box">
        <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2021/04/team-2.jpg"/>
        <h6 className='mt-3 fw-bold'>SALER</h6>
        <h3 className='text-secondary'>Charlotte</h3>
         <div className="hover-box">
            <div className="t-icon">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-messenger"></i>
          </div>
          </div>
        </div>
        <div className="t-box">
          <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2021/04/team-4.jpg"></img>
          <h6 className='mt-3 fw-bold'>MARKETIN</h6>
          <h3 className='text-secondary'>Isabella</h3>
           <div className="hover-box">
            <div className="t-icon">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-messenger"></i>
          </div>
          </div>
        </div>
        <div className="t-box">
          <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2021/04/team-3.jpg"/>
          <h6 className='mt-3 fw-bold'>GRAPHIC DESIGN</h6>
          <h3 className='text-secondary'>Chris Patterson</h3>
           <div className="hover-box">
            <div className="t-icon">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-messenger"></i>
          </div>
          </div>
        </div>
      </div>
    </div>


    <div className="fposter-box">
      <div className="fposter-boxs1">
        <img src="https://demo.theme-sky.com/nooni/wp-content/uploads/2023/04/about-2.jpg"></img>
        <div className="f-box1">
          <h1 className="text-light">We Deliver Genuine Products</h1>
        <p className="text-light mt-3 fw-bold">Sed viverra consectetur risus nec ultricies. Curabitur tincidunt<br/> tincidunt urna id maximus.</p>
        <button className="btn btn-light mt-3">CONTACT US</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default About