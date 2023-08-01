import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "We calculate the surrounding weather from where you are!"
},
{
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "We offer you best guides for travelling with you and guide you wherever you wanted to Explore!"

},
{
    imgUrl: customizationImg,
    title: "Customization",
    desc: "You can customize your bookings based on your interest!"

}]


const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=> (
    <Col lg='3' key={index}>
    <ServiceCard item={item}/>
    </Col>
))}
</>
};

export default ServiceList