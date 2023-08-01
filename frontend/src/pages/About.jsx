import React from 'react';
import { Container, Row , Col } from 'reactstrap';
import aboutvideo from '../assets/images/tour-vid.mp4';
import Subtitle from '../shared/Subtitle';


const About = () => {
  return<>
  <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='about__img-box'>
              <video src={aboutvideo} alt="" controls />
            </div>
          </Col>
          <Col lg='20'>
          <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'KNOW MORE ABOUT US!'}/>
              </div>
              <div className='about__content'>
            <p className='about__content'>EXPLORIFY has grown from the embryonic days of “Web 2.0” with user-generated content.
               It has developed organically.  Over the decades it has remained a sharing space for travel,
               adventure, people and cultures and sacred spaces. It continues to be a non-commercial 
               information and reflection space, with no hidden agendas.
               <br></br>
               <br></br>

               From time to time, as technology outstripped the outdated platforms on which 
               EXPLORIFY rested, the site woke up to keep abreast of the changing times.
               <br></br>
               <br></br>
               
               Recently, ease of navigation and current user-friendly technology was adopted to 
               streamline the aesthetics and presentation of content, which continues to reign supreme.
               <br></br>
               <br></br>

               EXPLORIFY is not just about journeys and destinations –
               <br></br>
               it is about an entire attitude to living that enhances life though the ability to convey
               the spirit of India, promote its culture and values and express the warmth and joy of a 
               people who have much to share.</p>
                <h3>WHO WE ARE?</h3>
                <p>We are travelers and technologists. We work across time zones, hemispheres, cultures and languages.
              We’re used to breaking things down and building them back up again, until they’re even better.
              We know travel can be hard, but we also know that it’s worth it, every time. And
              because we believe travel is a force for good, we take our roles seriously.
              We’re here to build great products, and facilitate connections between travelers and our partners that 
              truly bring good into the world.</p>
              <h3>WHAT WE DO?</h3>
              <p>
              We build connections. We leverage our platform and technology capabilities across an extensive portfolio
              of businesses and brands to orchestrate the movement of people and the delivery of travel experiences
              on both a local and global basis. We help our travelers and our partners find the right pathways 
               through millions of possibilities to reach the best possible outcome.
              </p>
              <h3>HOW WE DO IT?</h3>
              <p>Powered by more than 70+ petabytes of data and 20+ years of tech innovation, EXPLORIFY Group is
                 one of the world’s largest travel platforms. With unrivaled knowledge of the industry and advanced 
                 tech innovation, we built a two sided marketplace that allows us to filter through millions of different
                 possibilities, for travelers and partners worldwide</p>
              </div>
              <div>
               <center><h3>WE BELIEVE TRAVEL IS A FORCE FOR GOOD</h3></center>
              </div></Col>
        </Row>
      </Container>
    </section>
    </>
};

export default About