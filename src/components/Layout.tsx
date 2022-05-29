import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@fluentui/react-theme-provider';

import Navigation from '../navigation/Navigation';

import { darkTheme, lightTheme } from '../theme';

interface Props {
    children: JSX.Element
};

function Layout({ children }: Props) {
    
    const [theme, setTheme] = useState(lightTheme);
    
    const changeTheme = (themType: string) => {
        switch(themType) {
            case "dark":
                return setTheme(darkTheme);
            case "light":
                return setTheme(lightTheme);
            default:
                return setTheme(lightTheme);
        };
    };

    return(
        <ThemeProvider id="App" theme={theme}>
            <Navigation changeTheme={changeTheme} />
            <main>{children}</main>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Layout;