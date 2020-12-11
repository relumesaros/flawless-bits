import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

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

const NavbarMenuItemWrapper = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin: 0 10px;
  padding: 10px 0;
  cursor: pointer;
  flex-shrink: 0;
  color: ${props => (props.active ? stylesConfig.colors.blue : 'black')};
  border-top: 2px solid transparent;
  border-bottom: 2px solid
    ${props => (props.active ? stylesConfig.colors.blue : 'transparent')};
  transition: all 0.1s ease-in-out;

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

const getElementDistanceTop = (id) => {
  if (!document.getElementById(id)) {
    return 1;
  }
  return document.getElementById(id).getBoundingClientRect().top;
};

const getNavbarActive = () => {
  const proximityHeight = window.innerHeight / 3;
  const navbarHeight = getNavbarHeight();

  const navbarAndProximityHeight = proximityHeight + navbarHeight;

  if ((getElementDistanceTop(navbarConfig.sections.contactUs) - navbarAndProximityHeight) < 0) {
    return navbarConfig.sections.contactUs;
  }

  if ((getElementDistanceTop(navbarConfig.sections.blog) - navbarAndProximityHeight) < 0) {
    return navbarConfig.sections.blog;
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

const Navbar = (props) => {
  const globalContext = useGlobalState();

  const { onScrollTo } = onScrollToHandler();

  const { navbarActive } = globalContext.context;

  const shouldSetNavbarActiveToBlog = () => {
    if (props.location.pathname.startsWith('/blog')) {
      globalContext.setContext({
        ...globalContext.context,
        navbarActive: navbarConfig.sections.blog,
      });
    }
  };

  const onScroll = debounce(() => {
    if (props.location.pathname === '/') {
      const navbarActiveScrolled = getNavbarActive();

      if (navbarActiveScrolled) {
        globalContext.setContext({
          ...globalContext.context,
          navbarActive: navbarActiveScrolled,
        });
      }
    }
    shouldSetNavbarActiveToBlog();
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [props.location.pathname]);

  useEffect(() => {
    shouldSetNavbarActiveToBlog();
  }, []);

  const goHome = () => {
    if (props.location.pathname !== '/') {
      props.history.push('/');
      setTimeout(() => {
        onScrollTo(navbarConfig.sections.vision);
      }, 100);
    } else {
      onScrollTo(navbarConfig.sections.vision);
    }
  };

  const onScrollToWhyUs = () => {
    if (props.location.pathname !== '/') {
      props.history.push('/');
      setTimeout(() => {
        onScrollTo(navbarConfig.sections.whyUs);
      }, 100);
    } else {
      onScrollTo(navbarConfig.sections.whyUs);
    }
  };

  const onScrollToOurTeam = () => {
    if (props.location.pathname !== '/') {
      props.history.push('/');
      setTimeout(() => {
        onScrollTo(navbarConfig.sections.ourTeam);
      }, 100);
    } else {
      onScrollTo(navbarConfig.sections.ourTeam);
    }
  };

  const onScrollToHowItWorks = () => {
    if (props.location.pathname !== '/') {
      props.history.push('/');
      setTimeout(() => {
        onScrollTo(navbarConfig.sections.howItWorks);
      }, 100);
    } else {
      onScrollTo(navbarConfig.sections.howItWorks);
    }
  };

  const onScrollToBlog = () => {
    if (props.location.pathname !== '/') {
      props.history.push('/');
      setTimeout(() => {
        onScrollTo(navbarConfig.sections.blog);
      }, 100);
    } else {
      onScrollTo(navbarConfig.sections.blog);
    }
  };

  const onScrollToContactUs = () => {
    if (props.location.pathname !== '/') {
      props.history.push('/');
      setTimeout(() => {
        onScrollTo(navbarConfig.sections.contactUs);
      }, 100);
    } else {
      onScrollTo(navbarConfig.sections.contactUs);
    }
  };

  return (
    <NavbarWrapper>
      <NavbarLogoAndTitleWrapper onClick={goHome}>
        <NavbarLogo src={logoSrc}/>
        <NavbarTitle>Flawless Bits</NavbarTitle>
      </NavbarLogoAndTitleWrapper>
      <NavbarMenuItemsWrapper>

        <NavbarMenuItem
          active={navbarActive === navbarConfig.sections.vision}
          onCallback={goHome}
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
          active={navbarActive === navbarConfig.sections.blog}
          onCallback={onScrollToBlog}
          text="BLOG"
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

export default withRouter(Navbar);
