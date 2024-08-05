
import React, { useEffect, useState } from 'react';
import "../Css/Product.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filter,setFilter]=useState({
    Bed:false,
    Chair:false,
    Lamp:false,
    Cabinet:false,
    Sofa:false
  })
  const [sort,setSort]=useState("");

  useEffect(() => {
    axios.get('http://localhost:2424/product')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);


  const handlefiltter=(e)=>{
    setFilter({
      ...filter,
      [e.target.name] : e.target.checked
    })
  }
  
  let filterData = products;

if (filter.Bed || filter.Chair || filter.Cabinet || filter.Sofa || filter.Lamp) {
  filterData = filterData.filter((el) => {
    if (filter.Bed && el.items === "Bed") return true;
    if (filter.Chair && el.items === "Chair") return true;
    if (filter.Lamp && el.items === "Lamp") return true;
    if (filter.Cabinet && el.items === "Cabinet") return true;
    if (filter.Sofa && el.items === "Sofa") return true;
    return false;
  });
}


if(sort)
{
  filterData = filterData.sort((a,b)=>{
    if(sort == "asc")
    {
      return a.price - b.price;
    }
    else if(sort == "desc")
    {
      return b.price - a.price;
    }
  })
}
  







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
      <hr/>
      <div className='main-product'>
        <div className='heading-box'>
          <div className='filtter-boxs1'>
            <h3 className='fw-bold'>FILTER</h3>
          </div>



          <div className='filtter-boxs1'>
        <h5 className="mt-3">Sorting :</h5>
          <select name="" className=" mt-2 ms-3" id="" onChange={(e)=>setSort(e.target.value)}>
              <option value="">Sort</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
          </select>
          </div>
          </div>

        <div className='pr-boxs'>
          <div className='filtter-box'>
            <div className='he-1'>
            <h5 className=''>TYPE</h5>
            </div>
            <input type='checkbox' className='mt-5 ms-5' name="Bed" onChange={handlefiltter}/><span className='fs-5'>Bed</span><br/>
              <input type='checkbox'  className='mt-3 ms-5' name="Chair" onChange={handlefiltter}/><span className='fs-5'>Chair</span><br/>
              <input type='checkbox'  className='mt-3 ms-5' name="Lamp" onChange={handlefiltter}/><span className='fs-5'>Lamp</span><br/>
              <input type='checkbox'  className='mt-3 ms-5' name="Cabinet" onChange={handlefiltter}/><span className='fs-5'>Cabinet</span>
              <input type='checkbox'  className='mt-3 ms-5' name="Sofa" onChange={handlefiltter}/><span className='fs-5'>Sofa</span>

          </div>
          <div className='product-boxs'>


            {
            
            filterData.map((el) => (
              
              <div className='pp-boxs' key={el.id}>
                <Link to={`/Product/${el._id}`} className='text-decoration-none text-dark'>
                <img src={el.img} alt={el.title} />
                <div className="pr-boxs1">
                  <i className="fa-solid fa-magnifying-glass animate__animated animate__backInUp boxs-icon1"></i><br />
                  <i className="fa-solid fa-code-compare animate__animated animate__backInUp boxs-icon2"></i><br />
                  <i className="fa-regular fa-heart animate__animated animate__backInUp boxs-icon2"></i><br />
                  <button className="btn1 animate__animated animate__backInUp">Add To Cart</button>
                </div>
               
                  <p className=' mt-3 ms-1  '>{el.title}</p>
             
                <h6 className='ms-1'>{el.price}</h6>
                </Link>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
