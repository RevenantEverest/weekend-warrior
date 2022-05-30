import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@fluentui/react-theme-provider';
import {
    MDBContainer as Container,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarToggler,
    MDBCollapse
} from 'mdbreact';

import { Logo } from '../../assets/images';

import { useToggle } from '../../utils';
import _Routes, { Route } from '../_Routes';
import { Theme } from '../../types/theme';

function NavBar() {

    const router = useRouter();
    const styles = useStyles();

    const [collapse, toggleCollapse]: [boolean, Function] = useToggle();
    const [scrollPosition, setScrollPosition]: [number, Function] = useState(0);
    const isTransparent = Boolean((!collapse && router.pathname !== "/") || collapse);
    const navbarClass = scrollPosition > 50 || isTransparent ? styles.gradient : styles.transparent;

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const isActiveRoute = (path: string): boolean => {
        return router.pathname.split("/")[1] === path;
    };

    const renderRoutes = () => (
        _Routes.map((route: Route) => {
            if(!route.navDisplay) return null;

            return(
                <MDBNavItem active={isActiveRoute(route.path)} key={"nav-" + route.path}>
                    <Link href={route.path}>
                        <a className="nav-link">{route.title}</a>
                    </Link>
                </MDBNavItem>
            );
        })
    );

    const overlay = (
        <div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={() => toggleCollapse()} />
    );

    return (
        <div>
            <div>
            <MDBNavbar className={[navbarClass, styles.navbar].join(" ")} dark scrolling expand="md" fixed="top" transparent={isTransparent}>
                <Container>
                    <Link href="/">
                        <MDBNavbarBrand className="d-flex">
                            <img className="img-fluid mr-2" width={40} src={Logo.icon} alt="nav-logo" />
                            <strong className='white-text'>Weekend Warrior LLC</strong>
                        </MDBNavbarBrand>
                    </Link>
                    <MDBNavbarToggler onClick={() => toggleCollapse()} />
                    <MDBCollapse id='navbarCollapse' isOpen={collapse} navbar>
                        <MDBNavbarNav left>
                            {renderRoutes()}
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </Container>
            </MDBNavbar>
            {collapse && overlay}
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme): any => ({
    navbar: {
        transition: ".3s"
    },
    transparent: {
        background: "transparent"
    },
    gradient: {
        background: `${theme.gradients.secondary} !important`,
    }
}));

export default NavBar;