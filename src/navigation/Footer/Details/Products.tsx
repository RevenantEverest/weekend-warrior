import React from 'react';

function Products() {
    return(
        <React.Fragment>
            <h6 className="text-uppercase font-weight-bold">
                <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
                <a href="#!">MDBootstrap</a>
            </p>
            <p>
                <a href="#!">MDWordPress</a>
            </p>
            <p>
                <a href="#!">BrandFlow</a>
            </p>
            <p>
                <a href="#!">Bootstrap Angular</a>
            </p>
        </React.Fragment>
    );
};

export default Products;