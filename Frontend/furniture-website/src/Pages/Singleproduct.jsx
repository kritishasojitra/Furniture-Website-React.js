import React, { useEffect, useState } from 'react';
import "../Css/Single.css";
import "../Css/Product.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Singleproduct = () => {
  const { id } = useParams();
  console.log("Product ID:", id);

  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2424/products/${id}`)
      .then((res) => {
        console.log("API Response:", res.data); // Check the structure of res.data
        setState(res.data); // Adjust this if res.data is an object containing the product details
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  console.log("Product State:", state); // Verify that state is being set correctly


  return (
    <>
      <div className="product-head">
        <div className='product-h'>
          <h1 className='text-center mt-5 fw-bold'>Shop</h1>
        </div>
        <div className='product-shop'>
          <div className='shop-box'>
            <div className='s-box1'>
              <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/04/chair-1-310x310.jpg" alt="Chair" />
            </div>
            <div className='s-box2'>
              <h4 className='mt-5 ms-2 fw-bold'>Chair</h4>
              <p className='ms-2'>12 products</p>
            </div>
          </div>
          <div className='shop-box'>
            <div className='s-box1'>
              <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/05/outdoor-310x310.jpg" alt="Outdoor Lounge" />
            </div>
            <div className='s-box2'>
              <h4 className='mt-4 ms-2 fw-bold'>Outdoor Lounge</h4>
              <p className='ms-2'>23 products</p>
            </div>
          </div>
          <div className='shop-box'>
            <div className='s-box1'>
              <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/04/lamp-1-310x310.jpg" alt="Lamp" />
            </div>
            <div className='s-box2'>
              <h4 className='mt-5 ms-2 fw-bold'>Lamp</h4>
              <p className='ms-2'>10 products</p>
            </div>
          </div>
          <div className='shop-box'>
            <div className='s-box1'>
              <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/05/living-room-310x310.jpg" alt="Living Room" />
            </div>
            <div className='s-box2'>
              <h4 className='mt-4 ms-2 fw-bold'>Living Room</h4>
              <p className='ms-2'>30 products</p>
            </div>
          </div>
        </div>
      </div>

      <div className='main-single'>
        <div className='single-page1'>
          <div className='img-page1'>
            <div className='img-p1'>
              <img src={state.img} alt={state.title} />
            </div>
            <div className='img-p1'>
              <img src={state.img} alt={state.title} />
            </div>
            <div className='img-p1'>
              <img src={state.img} alt={state.title} />
            </div>
          </div>
          <div className='img-page2'>
          <img src={state.img} alt={state.title} />
          </div>
        </div>
        <div className='single-page2'>
          <div className='add2'>
           <h2 className='mt-5 ms-5'>{state.title}</h2>
           <div className='mt-3 ms-5'>
           <i class="bi bi-star-fill"></i>
           <i class="bi bi-star-fill ms-2"></i>
           <i class="bi bi-star-fill ms-2"></i>
           <i class="bi bi-star-fill ms-2"></i>
           <i class="bi bi-star ms-2"></i> (3)
           </div>
            <h3 className="ms-5 mt-3">{state.price}</h3>
            <p className="ms-5 mt-4 text-secondary">Aliquam condimentum dictum gravida. Sed eu odio id lorem<br/> fermentum faucibus. Cras tempor semper ligula.</p>
            </div>
            <div className='add1'>
              <div className='add-to2'>
                <div className='number'>
                  <span className='fs-5 fw-bold'>+</span>
                  <span className='fs-5 fw-bold'>1</span>
                  <span className='fs-5 fw-bold'>-</span>
                </div>
                <div className='button1'>
                  <button className='btn w-100 h-100 btn-secondary'>ADD-TO-CART</button>
                </div>
              </div>
              <div className='add-to1'>
                <button className='btn-1 text-secondary'>BUY NOW</button>
              </div>
              <div className='add-to3'>
              <i className="fa-regular fa-heart mt-2 ms-5"></i><span className='ms-2'>Add To Wishlist</span>
              <i className="fa-solid fa-code-compare ms-5"></i><span className='ms-2'>Compare</span>
              <i class="bi bi-facebook fs-5" style={{marginLeft:"120px"}}></i>
              <i class="bi bi-twitter ms-3 fs-5"></i>
              <i class="bi bi-instagram ms-3 fs-5"></i>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;
