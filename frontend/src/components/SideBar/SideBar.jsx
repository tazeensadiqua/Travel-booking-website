import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'



const SideBar = () => {
    

    const menuItem=[
        {
            path:"/admin/DashBoard",
            Display:"DashBoard",
        
        },
        {
            path:"/home",
            Display:"Home",
        },
        {
      
            path:"/AllBooking",
            Display:"AllBooking",
        
        },
        {
            path:"/AddProduct",
            Display:"AddPackage",
            
        },
        {
            path:"/AllPackages",
            Display:"AllPackages",
            
        },
        {
          path:"/login",
          Display:"Logout"  
        }
        
    ]
  return (
    <div className="Admin_menu">
          <div className='sidebar'>
            <div className='top_section'>
                <h1 className="logo">Logo</h1>
            </div>
            {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" ativeclassname ="active">
                           
                           <div  className="link_text">{item.Display}</div>
                       </NavLink>
                   ))
               }
            </div> 
            </div>
               
  )
}

export default SideBar