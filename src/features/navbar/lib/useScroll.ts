import { useGlobalState } from '../../../app/context/GlobalContextProvider';
import stylesConfig from "../../../shared/config/styles.config";

export const getNavbarHeight = () => {
    if (window.innerWidth > stylesConfig.maxWidth && window.innerHeight > 600) {
        return stylesConfig.navbarHeight.desktop;
    }
    return stylesConfig.navbarHeight.mobile;
};

export const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }
    window.scrollTo(0, element.offsetTop);
};


export default () => {
    const globalContext = useGlobalState();

    const onScrollTo = (navbarActive: string) => {
        globalContext.setContext({
            ...globalContext.context,
            navbarActive,
        });

        scrollToId(navbarActive);
    };

    return {onScrollTo};
};

