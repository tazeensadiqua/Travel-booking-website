import React, {useState} from'react';
import { useNavigate} from 'react-router-dom'

import "../styles/product.css";
import {BASE_URL} from '../utils/config';


const AddProduct = () => {
  const[tours, setTours] = useState({
    title:"",
    city:"",
    address:"",
    distance:"",
    photo:"",
    desc:"",
    price:"",
    maxGroupSize:1,
    featured:"",
});

 const navigate = useNavigate()

const handleChange = e => {
  setTours(prev=>({ ...prev, [e.target.id]: e.target.value }));
};

const handleClick =  async e=> {
  e.preventDefault();
  


try {
  const res = await fetch(`${BASE_URL}/tours`,{
    method:'post',
    headers:{
      'content-type':'application/json',
    },
    body: JSON.stringify(tours),
  })
   const result = await res.json();

   if (!res.ok) {
     alert(result.message);
   }
    
      
   navigate("/");
  }

  catch(err){
      alert(err.message);
  }
};


  return (
    <section className ="body">
      <form className="product__form" onSubmit={handleClick}>
      <h1 className="heading">ADD PRODUCTS</h1>
       <div className="d-flex align-items-center gap-3">
          <h5>TITLE:</h5>
            <input
              className="product_input"
              type="text"
              placeholder="Enter Tour Title"
              id="title"
              onChange={handleChange} 
              required
              
            />
          </div>
          <div className="d-flex align-items-center gap-3">
             <h5>CITY:</h5>
              <input
              className="product_input"
              type="text"
              placeholder="Enter City Name"
              id="city"
              onChange={handleChange} 
              required
            
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <h5>ADDRESS:</h5>
            <input
              className="product_input"
              type="text"
              placeholder="Enter you address"
              id="address"
              onChange={handleChange} 
              required
              
            />
             </div>
             <div className="d-flex align-items-center gap-3">
            <h5>DISTANCE:</h5>
            <input
              className="product_input"
              type="text"
              placeholder="Enter your distance"
              id="distance"
              onChange={handleChange} 
              required
             
            />
             </div>
            <div className="d-flex align-items-center gap-3">
            <h5>PHOTO:</h5>
            <input
              className="product_input"
              type="text"
              placeholder="Enter photo url"
              id="photo"
              onChange={handleChange} 
              required
              
            />
            </div>

            <div className="d-flex align-items-center gap-3">
            <h5>DISCRIPTION:</h5>
            <input
              className="product_input"
              type="text"
              placeholder="Enter the description"
              id="desc"
              onChange={handleChange} 
              required
             
            />
             </div>
             <div className="d-flex align-items-center gap-3">
            <h5>PRICE:</h5>
            <input
              className="product_input"
              type="text"
              placeholder="Enter the price"
              id="price"
              onChange={handleChange} 
              required
              
            />
             </div>
             <div className="d-flex align-items-center gap-3">
            <h5>MAXGROUPSIZE:</h5>
            <input
              className="product_input"
              type="number"
              placeholder="Enter MaxGroupSize"
              id="maxGroupSize"
              onChange={handleChange} 
              required
              
            />
             </div>
             <div className="d-flex align-items-center gap-3">
            <h5>FEATURED?:</h5>
            <input
              className="product_input"
              type="boolean"
              placeholder="True/false"
              id="featured"
              onChange={handleChange} 
              required
              
            />
             </div>
            
            
        <button
                    className=" auth__btn"
                    type="submit"
                  >
                    ADD
                  </button>
      
                  </form>

    </section>
  );
};

export default AddProduct;