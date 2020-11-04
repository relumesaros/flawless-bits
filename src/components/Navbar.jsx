import React, { useEffect } from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import logoSrc from '../assets/logo.png';
import { useGlobalState } from '../context/GlobalContext';
import navbarConfig from '../config/navbarConfig';
import onScrollToHandler from '../handlers/onScrollToHandler';
import stylesConfig from '../config/stylesConfig';
import { getNavbarHeight } from '../service/scrollService';

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

const NavbarTitle = styled.h3`
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
  align-items: flex-end;
  cursor: pointer;
`;

const NavbarMenuItemWrapper = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin: 0 10px;
  padding: 10px 0;
  cursor: pointer;
  flex-shrink: 0;
  color: ${props => (props.active ? stylesConfig.colors.blue : 'black')};
  border-bottom: 2px solid
    ${props => (props.active ? stylesConfig.colors.blue : 'transparent')};
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 0 3px;
    font-size: 6px;
  }
`;

const NavbarMenuItem = ({ text, active, onCallback }) => {
  return (
    <NavbarMenuItemWrapper active={active} onClick={onCallback}>
      {text}
    </NavbarMenuItemWrapper>
  );
};

const getElementDistanceTop = (id) => document.getElementById(id).getBoundingClientRect().top;

const getNavbarActive = () => {
  const proximityHeight = window.innerHeight / 3;
  const navbarHeight = getNavbarHeight();

  const navbarAndProximityHeight = proximityHeight + navbarHeight;

  if ((getElementDistanceTop(navbarConfig.sections.contactUs) - navbarAndProximityHeight) < 0) {
    return navbarConfig.sections.contactUs;
  }

  if ((getElementDistanceTop(navbarConfig.sections.howItWorks) - navbarAndProximityHeight) < 0) {
    return navbarConfig.sections.howItWorks;
  }

  if ((getElementDistanceTop(navbarConfig.sections.ourTeam) - navbarAndProximityHeight) < 0) {
    return navbarConfig.sections.ourTeam;
  }

  if ((getElementDistanceTop(navbarConfig.sections.whyUs) - navbarAndProximityHeight) < 0) {
    return navbarConfig.sections.whyUs;
  }

  if ((getElementDistanceTop(navbarConfig.sections.vision) - navbarAndProximityHeight) < 0) {
    return navbarConfig.sections.vision;
  }

  return false;
};

const Navbar = () => {
  const globalContext = useGlobalState();

  const { onScrollTo } = onScrollToHandler();

  const { navbarActive } = globalContext.context;

  const onScroll = debounce(() => {
    const navbarActiveScrolled = getNavbarActive();

    if (navbarActiveScrolled) {
      globalContext.setContext({
        ...globalContext.context,
        navbarActive: navbarActiveScrolled,
      });
    }
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScrollToVision = () => {
    onScrollTo(navbarConfig.sections.vision);
  };

  const onScrollToWhyUs = () => {
    onScrollTo(navbarConfig.sections.whyUs);
  };

  const onScrollToOurTeam = () => {
    onScrollTo(navbarConfig.sections.ourTeam);
  };

  const onScrollToHowItWorks = () => {
    onScrollTo(navbarConfig.sections.howItWorks);
  };

  const onScrollToContactUs = () => {
    onScrollTo(navbarConfig.sections.contactUs);
  };

  return (
    <NavbarWrapper>
      <NavbarLogoAndTitleWrapper onClick={onScrollToVision}>
        <NavbarLogo src={logoSrc}/>
        <NavbarTitle>Flawless Bits</NavbarTitle>
      </NavbarLogoAndTitleWrapper>
      <NavbarMenuItemsWrapper>
        <NavbarMenuItem
          active={navbarActive === navbarConfig.sections.vision}
          onCallback={onScrollToVision}
          text="VISION"
        />
        <NavbarMenuItem
          active={navbarActive === navbarConfig.sections.whyUs}
          onCallback={onScrollToWhyUs}
          text="WHY US"
        />
        <NavbarMenuItem
          active={navbarActive === navbarConfig.sections.ourTeam}
          onCallback={onScrollToOurTeam}
          text="OUR TEAM"
        />
        <NavbarMenuItem
          active={navbarActive === navbarConfig.sections.howItWorks}
          onCallback={onScrollToHowItWorks}
          text="HOW IT WORKS"
        />
        <NavbarMenuItem
          active={navbarActive === navbarConfig.sections.contactUs}
          onCallback={onScrollToContactUs}
          text="CONTACT US"
        />
      </NavbarMenuItemsWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
