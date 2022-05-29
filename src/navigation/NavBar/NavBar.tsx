import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

function NavBar() {

    const router = useRouter();
    const [collapse, toggleCollapse]: [boolean, Function] = useToggle();

    const isActiveRoute = (path: string): boolean => router.pathname === path;

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
            <MDBNavbar dark scrolling expand="md" fixed="top">
                <Container>
                    <MDBNavbarBrand>
                        <img className="img-fluid mr-2" width={40} src={Logo.icon} alt="nav-logo" />
                        <strong className='white-text'>Weekend Warrior LLC</strong>
                    </MDBNavbarBrand>
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

export default NavBar;