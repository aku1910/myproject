import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoPersonSharp } from "react-icons/io5";
import { BrowserRouter as Router,} from 'react-router-dom';
import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function Example(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggle = () => {
        if (windowWidth <= 992) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 992) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Router>
            <Navbar {...args} fixed="top" style={{ backgroundColor: scrollPosition > 10 ? 'rgb(252,252,252)' : 'transparent' }}>
                <NavbarBrand>Product . </NavbarBrand>
                <Nav className='middle'>
                    <Link style={{textDecoration:"none"}} to={"/"}>NEW</Link>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            MEN
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Elements</DropdownItem>
                            <DropdownItem>T-Shirt</DropdownItem>
                            <DropdownItem>Underware</DropdownItem>
                            <DropdownItem>Clothing</DropdownItem>
                            <DropdownItem>Accesories</DropdownItem>
                            <DropdownItem>Briefs</DropdownItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Menu Two
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>T-Shirt</DropdownItem>
                                    <DropdownItem>Underware</DropdownItem>
                                    <DropdownItem>Clothing</DropdownItem>
                                    <DropdownItem>Accesories</DropdownItem>
                                    <DropdownItem>Briefs</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <DropdownItem>Menu Three</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavLink href=''>WOMEN</NavLink>
                    <NavLink href=''>ACCESORIES</NavLink>
                    <NavLink href=''>JEWELERY</NavLink>
                    <NavLink href=''>ABOUT</NavLink>
                    <NavLink href=''>CONTACT</NavLink>
                </Nav>
                <Nav className='last'>
                    <h5><FaSearch /></h5>
                    <div>
                        <h5 onClick={() => setIsSidebarOpen(!isSidebarOpen)}><FaShoppingCart /></h5>
                        <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
                                <div className='butonlar'>
                                    <button onClick={() => setIsSidebarOpen(false)}>X</button>
                                    <button><Link to="/Checkout">salam</Link></button>

                                </div>
                        </div>
                    </div>
                    <h5><IoPersonSharp /></h5>
                </Nav>
                {windowWidth <= 992 && <NavbarToggler onClick={toggle} />}
                <Collapse isOpen={isOpen && windowWidth <= 992} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink>New</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Elements</DropdownItem>
                                <DropdownItem>T-Shirt</DropdownItem>
                                <DropdownItem>Underware</DropdownItem>
                                <DropdownItem>Clothing</DropdownItem>
                                <DropdownItem>Accesories</DropdownItem>
                                <DropdownItem>Shoes</DropdownItem>
                                <DropdownItem>Briefs</DropdownItem>
                                <DropdownItem>Menu Two</DropdownItem>
                                <DropdownItem>Menu Three</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="">Women</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Accesories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Jewelery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Router>
    );
}

export default Example;
