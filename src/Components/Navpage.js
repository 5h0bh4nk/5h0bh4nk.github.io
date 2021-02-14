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
        <div class="col-12" style={{backgroundColor: '#B7E9F7'}}
        >
            <Navbar expand="md" light style={{color: 'black'}}  fixed>
                <NavbarBrand href="/" 
                style={{
                    fontFamily: 'Agustina Regular',
                    fontSize: '28px',
                    fontWeight: '700',
                    padding: '20px 10px'}} 
                >
                   <span style={{fontFamily: 'Arial'}}>&lt;</span> Shubhank Kulshreshtha <span style={{fontFamily: 'Arial'}}>/&gt;</span>
                </NavbarBrand>
                <NavbarToggler style={{color: 'black'}} onClick={toggle} />
                <Collapse isOpen={open} navbar >
                    <Nav style={{color: 'black'}}  className="ml-auto my" navbar>
                        <NavItem >
                            <NavLink href="#about" data-scroll="">About me 😉</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#project" data-scroll="">Projects 🤓</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact" data-scroll="">Contact Me 📩</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navpage
