import { Container, Row, Col, Button} from "react-bootstrap";
import './componentStyles/Home.css'
import {Animated} from 'react-animated-css';
import {useState} from 'react'
import EmailForm from "./EmailForm";


function Home(){
    let[showEmailForm, toggleEmailForm] = useState(false)

    return(
        <Container fluid>
            <Row>
                <Col xs={2}></Col>
                <Col id='nameplate' xs={8}>
                    <Animated animationIn="fadeInLeftBig" animationOut='fadeOutRightBig' animationOutDelay={1000}>
                        <p className='lead fw-normal'>Hi, my name is... </p>
                    </Animated>
                    <Animated animationInDelay={1000}>
                        <h1 id='name' className="display-1 shadow p-4 rounded">Jack Roehrig</h1>
                    </Animated>
                </Col>
                <Col xs={2}></Col>
            </Row>
            <Row>
                <Animated animationInDelay={1500}>
                    <h2 className='job-title mx-auto mt-4 text-center rounded'>I'm a Web Dev</h2>
                </Animated>
            </Row>
            <Row>
                <Animated animationInDelay={2000}>
                    <Col className='d-flex justify-content-evenly mt-5'>
                        <Button variant="outline-secondary" className='number'>608-235-8788</Button>
                        <Button variant="outline-secondary" onClick={() => toggleEmailForm(!showEmailForm)}>Send an Email</Button>
                        <Button variant="outline-secondary">See my GitHub</Button>
                    </Col>
                </Animated>
            </Row>
            {showEmailForm ? <EmailForm /> : null}
        </Container>
    )
}

export default Home