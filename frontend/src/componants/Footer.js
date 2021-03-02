import React from 'react'
import '../styles/Footer.css'
import { Col, Navbar, Row } from 'react-bootstrap'

const Footer = () => {
    return (
    

            <Navbar bg='dark' variant='dark' className="w-100">
                <Row className="text-center  ml-auto  mr-auto w-100" >
                    <Col>
                        <h4><stong>Demodevelopers</stong></h4>
                        <hr className="line"/>
                        <p>(+27) 60-632-0464</p>
                        <p>support@demodevelopers.co.za</p>
                        <p>1886 Block L</p>
                        <p>Soshanguve,Pretoria, 0152</p>
                    </Col>

                    <Col>
                        <hr className="line"/>
                        <h5>Our Hours</h5>
                        <hr className="line"/>
                        <p>Monday - Friday: 9am - 17pm</p>
                        <p>Saturday: 10am - 13pm</p>
                        <p>Sunday: Closed</p>
                        <p>Public Holiday: Closed</p>
                    </Col>

                    <Col>
                        <hr className="line"/>
                        <h5>Connect</h5>
                        <hr className="line"/>
                        <p>Facebook</p>
                        <p>WhatsApp</p>
                        <p>Telegram</p>
                        <p>Instagram</p>
                    </Col>
                    <hr className='line w-100'/>
                    <Row calssName='text-center  ml-auto  mr-auto w-100'>
                        <Col>
                           Copyright Reserved &copy; 2021 Demodevelopers
                        </Col>
                    </Row>

                </Row>

                
        </Navbar>
    
     
    )
}

export default Footer
