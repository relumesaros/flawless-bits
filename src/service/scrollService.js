import stylesConfig from '../config/stylesConfig';

export const getNavbarHeight = () => {
  if (window.innerWidth > 900 && window.innerHeight > 910) {
    return stylesConfig.navbarHeight.desktop;
  }
  return stylesConfig.navbarHeight.mobile;
};

export const scrollToId = id => {
  const element = document.getElementById(id);
  window.scrollTo(0, element.offsetTop - getNavbarHeight());
};
