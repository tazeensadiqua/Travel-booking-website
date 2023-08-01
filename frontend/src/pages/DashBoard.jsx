import React from 'react';
import { Container, Row , Col } from 'reactstrap';
import exp from '../assets/images/exp.jpg';
import service from '../assets/images/service.jpg'

const DashBoard = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
    <div>
    <h3>Why Choose Us?</h3>
    <div>
       <p>More than 20 Years of Experience, Variety of Tour Packages, Best Deals and Personalised Services.</p>
       <div>
          <div>
             <div>
             </div>
             <br></br>
             <div>
                <h4>Experience</h4>
                <p>Our dedicated travel team diligently works round-the-clock to design the best travel experiences for the customers. The skilled team spends considerable amounts of time ideating tour packages that guarantee to make travelling with us an experience like no other. We select the finest hotels in every category, boast an excellent personal fleet of vehicles for transportation.</p>
             </div>
          </div>
          <div>
             <div>
             </div>
             <br></br>
             <div>
                <h4>Positive Customer Feedback</h4>
                <p>We're truly humbled to have received volumes of positive customer feedback for our services. This appreciation from our prestigious clients is more valuable than any award for us. As a customer-driven travel company, our priority has always been their satisfaction. Therefore, our dedicated team of experts endeavours to achieve the goal of making our customers happy.</p>
             </div>
          </div>
          <div>
             <div>
             </div>
             <br></br>
             <div>
                <h4>Recognition</h4>
                <p>We are proud to be accredited by major tour and travel associations in India and world like IATA, IATO, TAAI, IMF, MOT (Ministry of Tourism, Govt of India), and TOFT. It is an honour for us to be able to be a part of crucial initiatives towards safeguarding animal rights, protection of endangered species, and responsible mountaineering and trekking ventures.</p>
             </div>
          </div>
       </div>
    </div>
 </div> 
 </Col>
 <Col lg='15'>
 <div>
  <img src={exp} alt=""/>
  </div>
  <br></br>
  <div>
    <img src={service} alt=""/>
  </div>
  </Col>
 </Row>
 </Container>
 </section>
  )
}

export default DashBoard;