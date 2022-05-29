import type { NextPage } from 'next';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn
} from 'mdbreact';

function Home() {
    return(
        <Container>
            <Row>
                <Col>
                    <MDBBtn color="primary" size="lg">
                        Hello World
                    </MDBBtn>
                </Col>
            </Row>
        </Container>
    );
};

export default Home as NextPage;
