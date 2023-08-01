import React, {useState, useEffect} from 'react';

import {Table} from 'reactstrap';
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utils/config";
import { useNavigate} from 'react-router-dom'



const AllPackages = () => {
  const [pageCount, setPageCount] =useState(0);
  const [page, setPage] = useState(0);

  const {data:tours} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  const navigate = useNavigate()

  
  
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0,0)
  },[page, tourCount, tours]);


  async function handleDelete(id) {
  try {
    const res = await fetch(`${BASE_URL}/tours/`+id,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    })
     const result = await res.json();
  
     if (!res.ok) {
       alert(result.message);
     }
      
     alert("successfully deleted ") 
      
    }
  
    catch(err){
        alert(err.message);
    }
  };

  return (
    <div className="container">
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>PACKAGE ID</th>
          <th>PACKAGE TITLE</th>
          <th>CITY NAME</th>
          <th>DISTANCE</th>
          <th>PRICE</th>
          <th>MAX PEOPLE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        
          {
            tours && tours.map((tours)=>( 
          <tr key={tours._id}>
          <td >{tours._id}</td>
          <td>{tours.title}</td>
          <td>{tours.city}</td>
          <td>{tours.distance}KM</td>
          <td>RS:{tours.price}</td>
          <td>{tours.maxGroupSize}</td>
          <td><button className=" delete__btn"
                    type="submit" 
                    value="{tours._id}"
                    onClick={()=>handleDelete(tours._id)}
                 >DELETE</button></td>
        </tr>
        ))}
      </tbody>
    </Table>

    <div className='pagination d-flex align-items-center
            justify-content-center mt-4 gap-3'>
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} 
                onClick={()=> setPage(number)}
                className={page === number ? "active__page" : ""}>
                
                  {number + 1}
                </span>
              ))}
            </div>

    </div>
  );
};

export default AllPackages;