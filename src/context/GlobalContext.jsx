import React, { useState, createContext, useContext } from 'react';
import navbarConfig from '../config/navbarConfig';

export const StateContext = createContext();

const AppStateContextProvider = props => {
  const [context, setContext] = useState({
    navbarActive: navbarConfig.sections.vision,
  });

  return (
    <StateContext.Provider value={{ context, setContext }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default AppStateContextProvider;

export function useGlobalState() {
  return useContext(StateContext);
}
