import React, { useState } from "react";
import { Navbar, Container, Form, Nav, Button, Modal } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom";


const Navigatore = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    // scroll nav
    let [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
 
    return (
        <>
        {
            isScrolled ?
            <Navbar bg="none" expand="lg" className="navbar scrolled flex-nowrap top-0 position-fixed w-100 py-1">
                <Container fluid>
                    <Navbar.Brand>
                        <h1 className="ms-0 ms-sm-3 ms-md-5 titolo pointer" style={{ width: "300px", height: "auto", color: "#198754",}}>
                            GreenStream
                            </h1>
                        </Navbar.Brand>
                    <div id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>

                        <Form className="d-flex m-4">
                            
                            <Button id="btn-access" className="ms-2 mx-md-4 px-3" variant="success" onClick={handleShow}>Inizia</Button>
                        </Form>
                    </div>
                </Container>
            </Navbar> :

            <Navbar bg="none" expand="lg" className="navbar flex-nowrap top-0 position-fixed w-100 py-1">
            <Container fluid>
                <Navbar.Brand><h1 className="ms-0 ms-sm-3 ms-md-5 titolo " style={{ width: "300px", height: "auto", color: "#198754" }}>GreenStream</h1></Navbar.Brand>
                <div id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>

                    <Form className="d-flex m-4">
                        
                        <Button id="btn-access" className="ms-2 mx-md-4 px-3" variant="success" onClick={handleShow}>Inizia</Button>
                    </Form>
                </div>
            </Container>
        </Navbar>
        }
            

            <Outlet />


            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton className="bg-dark border-dark">
                    <Modal.Title>Form Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                
                                type="password"
                                placeholder="password"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="bg-dark border-dark justify-content-center">
                    <Button onClick={()=>{handleClose(); handleShow2();}} variant="secondary">
                        Registrati
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/selectUtente"> Accedi</Link>
                        
                    </Button>
                </Modal.Footer>
            </Modal>



            <Modal show={show2} onHide={handleClose2} className="modal">
                <Modal.Header closeButton className="bg-dark border-dark">
                    <Modal.Title>Form Registrazione</Modal.Title>
                </Modal.Header>
                <Modal.Body  className="bg-dark">
                    <Form >
                        <Form.Group className="mb-3  " controlId="exampleForm.ControlInput1">
                            <Form.Label  > Nome</Form.Label>
                            <Form.Control 
            
                                type="text"
                                placeholder="Nome"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label  >Cognome</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Cognome"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="bg-dark border-dark justify-content-center">
                    <Button   onClick={handleClose2} variant="secondary">
                        <Link  style={{ textDecoration: "none", color: "white" }} to="/selectUtente"> Registrati</Link>
                      
                    </Button>
                    <Button variant="success" onClick={handleClose2}>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/selectUtente"> Accedi</Link>
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Navigatore
