import {Container, Nav, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './componentStyles/Navigation.css'


function Navigation(){
    return (
        <Navbar expand='md'>
            <Container className='mx-3' fluid>
            <LinkContainer to='/'>
                <Navbar.Brand>&#60;Jack Roehrig /&#62;</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar' />
            <Navbar.Collapse className='justify-content-center'>
                <Nav className='justify-content-evenly'>
                    <LinkContainer to='/'>
                        <Nav.Item>Home</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to='/about'>
                        <Nav.Item>About</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to='/projects'>
                        <Nav.Item>Projects</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to='/resume'>
                        <Nav.Item>Resume</Nav.Item>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation