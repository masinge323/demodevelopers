import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../styles/Carousel.css'

const carousel = () => {
    return (
        <Carousel>
           
            <Carousel.Item>
                <img    src='images/Software-Development.jpg'
                        alt='img1'
                        className='d-block w-100'
                />
                <Carousel.Caption className='caption'>
                    <h3>Software Development Indurial</h3>
                    <p>Make your dream of having an application online true by contacting us today!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img    src='images/tech-support-header.jpg'
                        alt='img2'
                        className='d-block w-100'
                />
                <Carousel.Caption className='caption'>
                    <h3>Technical Support Indurial</h3>
                    <p>We Supply, fix, Intall &amp; maintain computer softwares and sytems on devices</p>
                </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item>
                <img    src='images/support.jpg'
                        alt='img3'
                        className='d-block w-100'
                />
                <Carousel.Caption className='caption'>
                    <h3>Software Intallations and Maintanace</h3>
                    <p>We give you best latest fast applications &amp; maintain softwares and sytem crush on devices</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default carousel
