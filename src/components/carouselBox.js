import React, { Component } from "react"
import Carousel from 'react-bootstrap/Carousel'
import Sunset from '../assets/sunset.jpeg'
import Winter from '../assets/winter.jpeg'
import Drops from '../assets/drops.jpeg'

class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={Sunset}
                            alt='sunset'
                            height='600px'
                        />
                        <Carousel.Caption>
                            <h3>Sunset</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={Winter}
                            alt='winter'
                            height='600px'
                        />
                        <Carousel.Caption>
                            <h3>Winter</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={Drops}
                            alt='drops'
                            height='600px'
                        />
                        <Carousel.Caption>
                            <h3>Drops</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default CarouselBox
