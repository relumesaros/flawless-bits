import React, { useEffect } from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import logoSrc from '../../../shared/assets/logo.png';
import { useGlobalState } from '../../../app/context/GlobalContextProvider';
import navbarConfig from '../../../shared/config/navbar.config';
import useScroll, { getNavbarHeight } from '../lib/useScroll';
import stylesConfig from '../../../shared/config/styles.config';
import { NavbarMenuItem } from "./NavbarMenuItem";
import { getElementDistanceFromTopOfWindow } from "../../../shared/lib/viewport";

const NavbarWrapper = styled.div`
  height: ${stylesConfig.navbarHeight.desktop - 1}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f0f0;
  z-index: 1;

  @media only screen and (max-width: 1000px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0 10px;
    height: ${stylesConfig.navbarHeight.mobile - 1}px;
  }
`;

const NavbarTitle = styled.p`
  font-size: 30px;
  margin: 0 0 0 10px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 12px;
    margin: 0 0 0 5px;
  }
`;

const NavbarLogo = styled.img`
  height: 60px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 25px;
  }
`;

const NavbarMenuItemsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const NavbarLogoAndTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const getNavbarActive = () => {
    const proximityHeight = window.innerHeight / 3;
    const navbarHeight = getNavbarHeight();

    const navbarAndProximityHeight = proximityHeight + navbarHeight;

    if ((getElementDistanceFromTopOfWindow(navbarConfig.sections.contactUs) - navbarAndProximityHeight) < 0) {
        return navbarConfig.sections.contactUs;
    }

    // if ((getElementDistanceFromTopOfWindow(navbarConfig.sections.blog) - navbarAndProximityHeight) < 0) {
    // 	return navbarConfig.sections.blog;
    // }

    if ((getElementDistanceFromTopOfWindow(navbarConfig.sections.howItWorks) - navbarAndProximityHeight) < 0) {
        return navbarConfig.sections.howItWorks;
    }

    if ((getElementDistanceFromTopOfWindow(navbarConfig.sections.ourTeam) - navbarAndProximityHeight) < 0) {
        return navbarConfig.sections.ourTeam;
    }

    if ((getElementDistanceFromTopOfWindow(navbarConfig.sections.whyUs) - navbarAndProximityHeight) < 0) {
        return navbarConfig.sections.whyUs;
    }

    if ((getElementDistanceFromTopOfWindow(navbarConfig.sections.vision) - navbarAndProximityHeight) < 0) {
        return navbarConfig.sections.vision;
    }

    return false;
};

const Navbar = () => {
    const {onScrollTo} = useScroll();
    const globalContext = useGlobalState();
    const {navbarActive} = globalContext.context;

    // const shouldSetNavbarActiveToBlog = () => {
    //   if (window.location.pathname.startsWith('/blog')) {
    //     globalContext.setContext({
    //       ...globalContext.context,
    //       navbarActive: navbarConfig.sections.blog,
    //     });
    //   }
    // };

    const onScroll = debounce(() => {
        // if (window.location.pathname === '/') {
        const navbarActiveScrolled = getNavbarActive();

        if (navbarActiveScrolled) {
            globalContext.setContext({
                ...globalContext.context,
                navbarActive: navbarActiveScrolled,
            });
        }
        // }
        // shouldSetNavbarActiveToBlog();
    }, 50);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [window.location.pathname]);

    // useEffect(() => {
    //   shouldSetNavbarActiveToBlog();
    // }, []);


    const onScrollToBlog = () => {
        if (window.location.pathname !== '/') {
            // navigate('/');
            setTimeout(() => {
                onScrollTo(navbarConfig.sections.blog);
            }, 100);
        } else {
            onScrollTo(navbarConfig.sections.blog);
        }
    };

    return (
        <NavbarWrapper>
            <NavbarLogoAndTitleWrapper onClick={() => onScrollTo(navbarConfig.sections.vision)}>
                <NavbarLogo src={logoSrc}/>
                <NavbarTitle>Flawless Bits</NavbarTitle>
            </NavbarLogoAndTitleWrapper>
            <NavbarMenuItemsWrapper>
                <NavbarMenuItem
                    isActive={navbarActive === navbarConfig.sections.vision}
                    onCallback={() => onScrollTo(navbarConfig.sections.vision)}
                    text="VISION"
                />
                <NavbarMenuItem
                    isActive={navbarActive === navbarConfig.sections.whyUs}
                    onCallback={() => onScrollTo(navbarConfig.sections.whyUs)}
                    text="WHY US"
                />
                <NavbarMenuItem
                    isActive={navbarActive === navbarConfig.sections.ourTeam}
                    onCallback={() => onScrollTo(navbarConfig.sections.ourTeam)}
                    text="OUR TEAM"
                />
                <NavbarMenuItem
                    isActive={navbarActive === navbarConfig.sections.howItWorks}
                    onCallback={() => onScrollTo(navbarConfig.sections.howItWorks)}
                    text="HOW IT WORKS"
                />
                <NavbarMenuItem
                    isActive={navbarActive === navbarConfig.sections.contactUs}
                    onCallback={() => onScrollTo(navbarConfig.sections.contactUs)}
                    text="CONTACT US"
                />
                <NavbarMenuItem
                    isActive={navbarActive === navbarConfig.sections.blog}
                    onCallback={onScrollToBlog}
                    text="BLOG"
                />
            </NavbarMenuItemsWrapper>
        </NavbarWrapper>
    );
};

export default Navbar;
