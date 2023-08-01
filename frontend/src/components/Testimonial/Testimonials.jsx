import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/avatar5.jpg';
import ava06 from '../../assets/images/ava-6.jpg'

const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                    breakpoint:576,
                    settings: {
                        slidesToShow:1,
                        slidesToScroll:1,
                    },   
            },
        ],
    };
  return( 
  <Slider {...settings}>
    <div classname="testimonial py-4 px-3">
            <p>I must say the service
               we received
               from this site was amazing 
               and would recommend 
               them to anyone
               to trust and use them.</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">PRIYA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p> 
          Excellent value for money and I would
           100% use again and recommend it to others.</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">RUHENA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>Explorify has such a user-friendly website. Easy to navigate, 
          search and fiddle with dates instead of having to call up.
          Thankyou for you seamless booking prices,fabulous
          prices and great customer service.</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">SADIQUA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>Very pleased with the complete service and would recommend 
          you to our friends.We had an wonderfull experience and I must
           say everything was excellent .
           
        </p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">PREETHI</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>Team did a fantastic job in ensuring we had a very memorable trip .
           They were connected with us though out the journey , 
           answering our queries and ensuring all things were in place </p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">SABEEHA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        <div classname="testimonial py-4 px-3">
        <p>We really loved the 
          overall services and we were having
          quick response from EXPLORIFY.</p>

              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava06} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 classname="mb-0 mt-3">AALIYA</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>
        </Slider>
        );
};

export default Testimonials;