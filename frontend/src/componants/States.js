import React from 'react'
import {Row, Col } from 'react-bootstrap'
import '../styles/States.css'

const States = () => {
    return (
        <>
        <hr className='line'/>
        <Row className='ml-auto mr-auto w-75 mb-3'>
            <Col>
                <h3>1200+</h3>
                <span>Projects Completed</span>
            </Col>

            <Col>
                <h3 className='ml-5'>10</h3>
                <span>Professional Employees</span>
            </Col>

            <Col>
                <h3>500+</h3>
                <span>Satisfied Clients We Served</span>
            </Col>

            <Col>
                <h3  className='ml-5'>4</h3>
                <span  className='ml-auto mr-auto'>Years Of Experience</span>
            </Col>
            
        </Row>
        </>
    )
}

export default States
