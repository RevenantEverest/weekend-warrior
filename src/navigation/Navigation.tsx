import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from './NavBar';

interface Props {
    changeTheme: Function
};

function Navigation({ changeTheme }: Props) {
    return(
        <Navbar />
    );
};

Navigation.propTypes = {
    changeTheme: PropTypes.func
};

export default Navigation;