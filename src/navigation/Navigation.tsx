import React from 'react';
import PropTypes from 'prop-types';

import { NavBar } from './NavBar';

interface Props {
    changeTheme: Function
};

function Navigation({ changeTheme }: Props) {
    return(
        <NavBar />
    );
};

Navigation.propTypes = {
    changeTheme: PropTypes.func
};

export default Navigation;