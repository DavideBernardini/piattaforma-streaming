import React from 'react';
import '../style/BannerRightText.scss'
import { Row, Col, Container } from 'react-bootstrap';
import '../images/tv.png'

const Banner2 = () => {

    return (
        <Container>
            <Row md={2} className="banner-rt kids d-flex align-items-md-center">
                <Col className="banner-rt_image">
                    <img src={require("../images/kidsValueProp.png")} alt="kids" />
                </Col>
                <Col className="banner-rt_text">
                    <div>
                        <h2>
                            Crea profili per i bambini.
                        </h2>
                        <p>
                            I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner2;