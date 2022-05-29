import type { NextPage } from 'next';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import { PageContainer } from '../../components/Common';

function Contact() {
    return(
        <PageContainer>
            <Row>
                <Col>
                    <h1>Contact Page</h1>
                </Col>
            </Row>
        </PageContainer>
    );
};

export default Contact as NextPage;