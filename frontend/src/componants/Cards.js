import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/Cards.css'

const Cards = () => {
    return (
        <Container className='Cards mb-2'>
            <Row>
                <Col>
                    <Card bg='warning' className="text-center mb-2 py-4">
                        <Card.Header>System Intalation</Card.Header>
                        <Card.Body>
                            <Card.Title>Windows, Linux, Mac Systems</Card.Title>
                            <Card.Text>
                            We do all Intallations and maintanance of our systems :: we also do regulary checks to avoid syatem breakdowns.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">3 Months Garantee</Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card bg='success' className="text-center mb-2">
                        <Card.Header>Networking</Card.Header>
                        <Card.Body>
                            <Card.Title>Wired and Wireless Internet</Card.Title>
                            <Card.Text>
                            We supply, setup and do connections to all types of networks such as fiber, enternet and wireless where needed ::
                            Our service is of best quality :: We offer maintanace for free to our intallations.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">3 Months Garantee</Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card bg='danger' className="text-center mb-2">
                        <Card.Header>Android Applications</Card.Header>
                        <Card.Body>
                            <Card.Title>Playstore Publishing</Card.Title>
                            <Card.Text>
                                We Create application of your dreams and publish them on your behalf when need to :: We stay true and loyal
                                to our presentation before publishment :: We always make it up for our costomers.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Once-Off</Card.Footer>
                    </Card>
                </Col>

            </Row> 

            <Row>
                <Col>
                    <Card bg='danger' className="text-center mb-2">
                        <Card.Header>Web Applivations</Card.Header>
                        <Card.Body>
                            <Card.Title>All types of websites</Card.Title>
                            <Card.Text>
                                If you are looking for a developer to take your business to the next level by creating a professional website,
                                consider it done with us :: We create and design Static, Homepages, Magazine websites, E-commerce websites, 
                                Blogs, Portfolio websites, Landing pages, Social media websites, Directory and contact pages, etc.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Once-Off</Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card bg='warning' className="text-center mb-2 py-4">
                        <Card.Header>Virus Fix</Card.Header>
                        <Card.Body>
                            <Card.Title>All threads and bugs</Card.Title>
                            <Card.Text>
                                Is your Computer too slow, hiding files, deleting files as well as duplicating and creating new files ::
                                We are here to help you. We fix al those and install a anti-virus protection software that suits the type of 
                                computer you're using.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">1 Momth Garantee</Card.Footer>
                    </Card>
                </Col>

                <Col>
                    <Card bg='success' className="text-center mb-2 py-4">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Desktop and Laptop Fix</Card.Title>
                            <Card.Text>
                                Computer doesn't power up :: Keybord is no longer working or some keys are dead :: touchpad not responding :: 
                                USB ports not working :: broken screen and other :: We can fix it for you at an affordable price.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted py-4">Once-Off</Card.Footer>
                    </Card>
                </Col>

            </Row> 
        </Container>
    )
}

export default Cards
