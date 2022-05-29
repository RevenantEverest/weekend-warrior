import type { NextPage } from 'next';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import { PageContainer } from '../../components/Common';

function Products() {
    return(
        <PageContainer>
            <Row>
                <Col>
                    <h1>Products Page</h1>
                </Col>
            </Row>
        </PageContainer>
    );
};

export default Products as NextPage;