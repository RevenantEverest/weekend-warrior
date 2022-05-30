import React from 'react';

function Contact() {
    return(
        <React.Fragment>
            <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
                <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
                <i className="fa fa-envelope mr-3" /> info@weekendwarriorli.com
            </p>
            <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
        </React.Fragment>
    );
};

export default Contact;