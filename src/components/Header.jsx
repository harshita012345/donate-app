/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import logo from '../assets/Images/jeevandeep_foundation_logo.png';
import "../assets/scss/Home.scss";
import "../assets/scss/Common.scss";

const Header = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="header-area">
                <div className="header-top-action">
                    <Container>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="top-action-content">
                                    <div className="info-box info-box-1 d-flex align-items-center">
                                        <ul className="d-flex align-items-center">
                                            <li><a href="mailto:jeevandeepfoundationsurat@gmail.com"><i className="fa fa-envelope"></i>jeevandeepfoundationsurat@gmail.com</a></li>
                                            <li><a href="tel:+91 98799 55855"><i className="fa fa-phone-square"></i>+91 98799 55855</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="top-action-content-1 info-action-content">
                                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                        <ul className="top-action-list d-flex align-items-center">
                                            <li><a href="#">Login</a></li>
                                            <li><a href="/register">Register</a></li>
                                            <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a></li>
                                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="header-top header-menu-action position-sticky">
                    <Container>
                        <>
                            {["xl"].map((expand) => (
                                <Navbar key={expand} sticky="top" bg="light" expand={expand} className="my-3">
                                    <Container fluid>
                                        <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
                                        {/* <Button className="donate-btn" variant="danger">Donate now</Button> */}
                                        <div className="ml-auto"><a className="donate-btn" href="donate">donate now</a></div>
                                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                        <Navbar.Offcanvas
                                            id={`offcanvasNavbar-expand-${expand}`}
                                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                            placement="end"
                                        >
                                            <Offcanvas.Header closeButton className="justify-content-end" />
                                            <Offcanvas.Body>
                                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                                    <Nav.Link href="/">Home</Nav.Link>
                                                    {/* <Nav.Link href="#action2">Causes</Nav.Link>
                                                    <Nav.Link href="#action2">Events</Nav.Link> */}
                                                    {/* <Nav.Link href="#action2">News</Nav.Link> */}
                                                    <Nav.Link href="/become-volunteer">Become a volunteer</Nav.Link>
                                                    <Nav.Link href="/our-team">Our team</Nav.Link>
                                                    <Nav.Link href="#action2">Sponsers</Nav.Link>
                                                    <Nav.Link href="/gallary">Gallary</Nav.Link>
                                                    <Nav.Link href="/about-us">About</Nav.Link>
                                                    {/* <NavDropdown title="Pages" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                        <NavDropdown.Item href="/about-us">About</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action4">Gallary</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action5">Become a volunteer</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action3">Our team</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action3">Sponsers</NavDropdown.Item>
                                                    </NavDropdown> */}
                                                    <Nav.Link href="/contact-us">Contact</Nav.Link>
                                                </Nav>
                                                <Button className="donate-btn-block" onClick={()=>navigate("/donate")} >Donate now</Button>
                                            </Offcanvas.Body>
                                        </Navbar.Offcanvas>
                                    </Container>
                                </Navbar>
                            ))}
                        </>
                    </Container>
                </div>
            </div>
        </>
    );
};
export default Header;
