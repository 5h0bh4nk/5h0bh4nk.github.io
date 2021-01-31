import React, { useState } from 'react'
import '../styles/Navbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

function Navpage() {

    const [open, setOpen]=useState(false);
    const toggle = () =>setOpen(!open);

    return (
        <div>
            <Navbar expand="md" light style={{color: 'black'}}  fixed>
                <NavbarBrand href="/" 
                style={{
                    fontFamily: 'Agustina Regular',
                    fontSize: '32px',
                    fontWeight: '700',
                    padding: '20px 10px'}} 
                >
                   <span style={{fontFamily: 'Arial'}}>&lt;</span> Shubhank Kulshreshtha <span style={{fontFamily: 'Arial'}}>/&gt;</span>
                </NavbarBrand>
                <NavbarToggler style={{color: 'black'}} onClick={toggle} />
                <Collapse isOpen={open} navbar >
                    <Nav style={{color: 'black'}}  className="ml-auto my" navbar>
                        <NavItem >
                            <NavLink href="#About">About me 😉</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Projects">Projects 🤓</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Contact Me">Contact Me 📩</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navpage
