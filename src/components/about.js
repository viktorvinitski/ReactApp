import React, { Component } from "react"
import { Container, Tab, Row, Nav, Col } from "react-bootstrap"

class About extends Component {
    render() {
        return (
                <Container className='mt-3'>
                    <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                        <Row>
                            <Col sm={3}>
                                <Nav variant='pills' className='flex-column mt-2'>
                                    <Nav.Item>
                                        <Nav.Link eventKey='first'>Design</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey='second'>Team</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey='third'>Programming</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey='first'>
                                        <img src='https://static.tildacdn.com/tild3833-3363-4233-b434-386532336631/01.png' width='800px' height='400'/>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey='second'>
                                        <img src='https://cms-assets.tutsplus.com/uploads/users/30/posts/32053/image/freebiesupply.jpg' width='800px' height='400'/>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey='third'>
                                        <img src='https://cnet3.cbsistatic.com/img/KhWoFnIS6NiHxgQL9ZmTkRNhpy8=/940x0/2019/10/21/0b8fbcc3-50fd-4561-8135-f9e6a1e2ed9d/figma-editor.jpg' width='800px' height='400'/>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey='fourth'>
                                        <img src='https://www.figmafinder.com/wp-content/uploads/edd/2019/01/figma-design-system-740x600.png' width='800px' height='400'/>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey='fifth'>
                                        <img src='https://figma.imgix.net/1xlcpAF2C0ECIq0E6eYA8Y/a9d02dc9520183ffa39b8c61bb672019/relay-for-figma.png?&w=1060&auto=compress%2Cformat&crop=entropy&fit=crop&q=75' width='800px' height='400'/>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
        )
    }
}

export default About
