import type { NextPage } from 'next';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn,
    MDBView,
    MDBMask
} from 'mdbreact';

import { Logo } from '../assets/images';

function Home() {

    return(
        <div>
            <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.webp'>
                <MDBMask className='rgba-black-strong' />
                <Container
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: '100%', width: '100%' }}
                >
                    <Row>
                    <Col md='12' className='mb-4 white-text text-center'>
                        <img className="img-fluid mb-0 pt-md-5 pt-5" width={1000} src={Logo.light}  alt="logo" />
                        {/* <MDBBtn outline color="amber">
                            portfolio
                        </MDBBtn>
                        <MDBBtn outline color="amber">
                            About me
                        </MDBBtn> */}
                    </Col>
                    </Row>
                </Container>
            </MDBView>
        </div>
    );
};

export default Home as NextPage;
