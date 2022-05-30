import React from 'react';

function FooterServices() {
    return(
        <React.Fragment>
            <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
                <a href="#!">Your Account</a>
            </p>
            <p>
                <a href="#!">Become an Affiliate</a>
            </p>
            <p>
                <a href="#!">Shipping Rates</a>
            </p>
            <p>
                <a href="#!">Help</a>
            </p>
        </React.Fragment>
    );
};

export default FooterServices;