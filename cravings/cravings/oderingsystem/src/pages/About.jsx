import React from 'react';
import Header from "../views/Header";
import Footer from "../views/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
    <div><Header />
        <Container>
          <Row>
            <Col sm={6}>
              
                <h3 style={{paddingTop:"10rem"}}>Whenever crave for some food, go for<span style={{ color: "red", fontWeight: "bold", }}> CRAVINGS </span></h3>
                <p className='aboutP'>
                  <b>WHAT WE SERVE</b><br></br>
                  This website's content attracts visitors based on the wide
                  variety of recipes available. From soups and salads to bento
                  recipes, there are so many interesting and unique dishes. 
                  Recipes are categorized into various menus, including celebrity 
                  recipe, everyone’s recipe, the hottest kitchen, etc. There is also a
                   news section, offering content that is both educational and informative.

                </p>
              
            </Col>
            <Col sm={6}><img src='img/food3.png' className='aboutimg'></img></Col>
          </Row>

        </Container>


      </div>

      <Footer />
      </>
      );
}
      export default About;