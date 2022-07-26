import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
class Slider extends Component {
    render() {
        return (
            <div className='container-fluid p-5'>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={'img/bg1.jpg'} width="80vw" height="400vh" />

                        <Carousel.Caption>
                            <h1>Food is here</h1>
                            <p>Ready to Serve!</p>
                        </Carousel.Caption>


                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={'/img/bg2.png'} width="80vw" height="400vh" />

                        <Carousel.Caption>
                            <h1>Unlimited Stock</h1>
                            <p>Love for Pizza Stays Eternal</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src={'/img/bg3.jpg'} width="80vw" height="400vh" />
                        <Carousel.Caption>
                            <h1>Monsoon is here</h1>
                            <p>Hot Food is ready to be served!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Slider