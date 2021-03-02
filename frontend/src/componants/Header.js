import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import '../styles/Header.css'
import '../styles/bootstrap.min.css'

const contact = document.getElementById('contact');

function scrollFuction(){
    document.documentElement.scrollTop = 1;
}


const Header = () => {
    return (
        <Navbar className='header' variant='dark' expand='lg' >
            <Navbar.Brand href="/">Demo Developers</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic.navbar.nav' variant='dark' className='ml-5'>
               
                <div className='dropdown'>
                <Nav.Link className='Nav-Link'>Software Development</Nav.Link>
                    <div className='dropdown-content'>
                        <Nav.Link to='/'>Web Applications</Nav.Link>
                        <Nav.Link to='/'>Android Applications</Nav.Link>
                        <Nav.Link to='/'>IOS Applications</Nav.Link>
                    </div>
                </div>

                <div className='dropdown'>
                <Nav.Link className='Nav-Link'>Technical Support</Nav.Link>
                    <div className='dropdown-content'>
                        <Nav.Link to='/'>Windows Instalation</Nav.Link>
                        <Nav.Link to='/'>Software Instalation</Nav.Link>
                        <Nav.Link to='/'>Anti-Virus Instalation</Nav.Link>
                        <Nav.Link to='/'>Desktop &amp; Laptop Fix and Upgrade </Nav.Link>
                        <Nav.Link to='/'>Printer Setup &amp; Catridge Instalation</Nav.Link>
                        <Nav.Link to='/'>Networking</Nav.Link>
                        
                    </div>
                </div>

                <div className='dropdown'>
                <Nav.Link className='Nav-Link'>About Us</Nav.Link>
                    <div className='dropdown-content'>
                        <Nav.Link to='/'>Company Certification</Nav.Link>
                        <Nav.Link to='/'>View Latest Projects</Nav.Link>
                        <Nav.Link to='/'>Meet Our Staff</Nav.Link>
                    </div>
                </div>
                <Nav.Link className='Nav-Link' id='contact'>Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
