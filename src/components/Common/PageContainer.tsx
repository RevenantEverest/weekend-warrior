import React from 'react';
import PropTypes from 'prop-types';
import { MDBContainer as Container } from 'mdbreact';

interface Props {
    className?: string,
    children: JSX.Element
};

function PageContainer({ className, children }: Props) {
    return(
        <Container fluid className={className + " app-page mt-5"}>
            <Container className="mt-5">
            {children}
            </Container>
        </Container>
    );
};

PageContainer.defaultProps = {
    className: ""
};

PageContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

export default PageContainer;