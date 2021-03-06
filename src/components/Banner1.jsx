import React from 'react';
import '../style/BannerLeftText.scss'
import { Row, Col, Container } from 'react-bootstrap';


const Banner1 = () => {

    return (
        <Container>
            <Row xs={1} lg={2} className="banner-lt d-flex align-items-md-center">
                <Col className="banner-lt_text">
                    <div>
                        <h2 className='testiTitolo'>
                            Goditi GreenStream sulla tua TV.
                        </h2>
                        <p className='testiTitolo'>
                            Guarda GreenStream su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.
                        </p>
                    </div>

                </Col>
                <Col className="banner-lt_image">
                    <img src={require("../images/tv.png")} alt="tv" />

                    <video style={{ marginTop: "7px", maginBottom: "5px", paddingTop: "5px", }} width={"auto"} height={"auto"} id="tv_clip" autoPlay={true} muted="" loop="100" playsInline="">
                        <source src={require("../videos/video3.mp4")} type="video/mp4" />
                    </video>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner1;