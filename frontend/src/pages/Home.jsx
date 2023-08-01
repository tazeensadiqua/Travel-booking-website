import React from 'react'
import '../styles/home.css'
import Subtitle from '../shared/Subtitle';

import { Container, Row , Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from './../assets/images/world.png';

import SearchBar from '../shared/SearchBar';
import  ServiceList from '../services/ServiceList';
import FeaturedTourList from "../components/Featured-tours/FeaturedToursList";
import Affordablepack from '../components/Affordable/Affordablepack';
import MansoryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
import Footer from '../components/Footer/Footer';
import Specialpack from '../components/Special/Specialpack';
import Trending from '../components/Trending/Trending';
import Discountpack from '../components/Discount/Discountpack'





const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Some beautiful paths cant be discovered without getting lost!'} />
                <img src={worldImg} alt=" "/>
              </div>
              <h1>Welcome to <span className="highlight">Explorify</span></h1>
              <p>Traveling is an extraordinary experience every person needs to try. It reveals a whole new and exciting world out there, opens out your inner strength, and presents with unforgettable adventures. </p>

            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box ">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
           
           <SearchBar />


        </Row>
      </Container>
    </section>
    {/* ######################### hero section start##########################*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle"> What we serve</h5>
            <h5 className="services__title">We offer our best services</h5>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* #############featured tour section start#############*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">
              Our featured packages
            </h2>

          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    {/* #############featured tour section ends#############*/}
        {/* #############trending tour section start#############*/}
        <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="trending__tour-title">
              Our Trending packages
            </h2>

          </Col>
          <Trending/>
        </Row>
      </Container>
    </section>

    {/* #############trending tour section ends#############*/}
            {/* #############affordable tour section start#############*/}
            <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="affordable__tour-title">
              Affordable Packages
            </h2>

          </Col>
          <Affordablepack/>
        </Row>
      </Container>
    </section>

    {/* #############affordable tour section ends#############*/}
    {/* #############discount tour section start#############*/}
            <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="discount__tour-title">
              Discount packages
            </h2>

          </Col>
          <Discountpack/>
        </Row>
      </Container>
    </section>

    {/* #############discount tour section ends#############*/}
        {/* #############special tour section start#############*/}
        <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="special__tour-title">
              Our Special Packages
            </h2>

          </Col>
          <Specialpack/>
        </Row>
      </Container>
    </section>

    {/* #############special tour section ends#############*/}

    {/* #############Gallery Section#############*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MansoryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ############Testimonial Section########## */}
    <section>
      <Container>
        <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Customers Love'} />
          <h2 className="testimonial__title">What Our Customers Say About Us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
        </Row>
      </Container>
    </section>

<Newsletter />
<Footer />

  </>
};

export default Home