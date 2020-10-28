import { scrollToId } from '../service/scrollService';
import { useGlobalState } from '../context/GlobalContext';

export default () => {
  const globalContext = useGlobalState();

  const onScrollTo = navbarActive => {
    globalContext.setContext({
      ...globalContext.context,
      navbarActive,
    });

    scrollToId(navbarActive);
  };

  return { onScrollTo };
};
