import React from 'react';

import {Table} from 'reactstrap';
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utils/config";


const AllBooking = () => {
  
  const {data:booking} = useFetch(`${BASE_URL}/booking`)
  

  

  return (
    <div className="container">
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>BOOKING ID</th>
          <th>USER ID</th>
          <th>PACKAGE TITLE</th>
          <th>FULL NAME</th>
          <th>MOBILE NO</th>
          <th>MAX PEOPLE</th>
        </tr>
      </thead>
      <tbody>
        
          {
            booking && booking.map((booking)=>(
              <tr key={booking._id}>
          <td>{booking._id}</td>
          <td>{booking.userId}</td>
          <td>{booking.tourName}</td>
          <td>{booking.fullName}</td>
          <td>{booking.phone}</td>
          <td>{booking.guestSize}</td>
         </tr>
        ))}
      </tbody>
    </Table>

    

    </div>
  );
};

export default AllBooking;