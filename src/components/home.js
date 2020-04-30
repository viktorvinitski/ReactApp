import React, { Component } from "react"
import CarouselBox from "./carouselBox"
import { Container, CardDeck, Card, Button } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container className='text-center'>
                    <h1>Our team</h1>
                    <CardDeck className='m-5'>
                        <Card bg='light' border='secondary'>
                            <Card.Img
                                variant='top'
                                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>

                        <Card bg='light' border='secondary'>                            
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                            <Card.Img
                                variant='bottom'
                                src='https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            />
                        </Card>

                        <Card bg='light' border='secondary'>
                            <Card.Img
                                variant='top'
                                src='https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>

                    </CardDeck>

                </Container>

            </div>
        )
    }
}

export default Home
