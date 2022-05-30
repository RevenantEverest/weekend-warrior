import React from 'react';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBFooter
} from 'mdbreact';
import { makeStyles } from '@fluentui/react-theme-provider';

import { SocialIcons, Services, Products, Contact } from './Details';

import { Logo } from '../../assets/images';
import { Theme } from '../../types/theme';

function Footer() {

    const styles = useStyles();

    return(
        <MDBFooter color="elegant-color" className={"page-footer font-small pt-0 " + styles.footer}>
            <div className={styles.topFooter}>
                <Container fluid className="text-center text-md-left">
                    <Row className="py-4 d-flex align-items-center">
                        <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">
                                Get connected with us on social networks!
                            </h6>
                        </Col>
                        <Col md="6" lg="7" className="text-center text-md-right flex lg:justify-end justify-center">
                            <SocialIcons />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="mt-5 mb-4 text-center text-md-left">
            <Row className="mt-3">
                <Col md="3" lg="4" xl="3" className="mb-4">
                <h6 className="d-flex mb-2 text-uppercase font-weight-bold">
                    <img className="img-fluid mr-2 -mt-3" width={40} src={Logo.icon} alt="nav-logo" />
                    <strong className="">Weekend Warrior LLC</strong>
                </h6>
                <p>
                    Here you can use rows and columns here to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                </p>
                </Col>
                <Col md="2" lg="2" xl="2" className="mb-4">
                    <Services />
                </Col>
                <Col md="3" lg="2" xl="2" className="mb-4">
                    <Products />
                </Col>
                <Col md="4" lg="3" xl="3" className="mb-4">
                    <Contact />
                </Col>
            </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://weekendwarriorli.com"> WeekendWarriorLI.com </a>
            </Container>
            </div>
        </MDBFooter>
    );
};

const useStyles = makeStyles((theme: Theme): any => ({
    footer: {
        backgroundColor: theme.colors.dark
    },
    topFooter: {
        backgroundColor: theme.colors.secondary
    }
}));

export default Footer;