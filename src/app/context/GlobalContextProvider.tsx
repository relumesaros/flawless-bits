import React, { useState, createContext, useContext, Dispatch, SetStateAction  } from 'react';

interface IGlobalState {
  navbarActive?: string;
}

export const GlobalStateContext = createContext({
  context: {} as Partial<IGlobalState>,
  setContext: {} as Dispatch<SetStateAction<Partial<IGlobalState>>>,
});

const GlobalContextProvider = ({children, value}: {children: React.ReactNode, value: IGlobalState}) => {
  const [context, setContext] = useState<IGlobalState>(value);

  return (
    <GlobalStateContext.Provider value={{ context, setContext }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;

export function useGlobalState() {
  return useContext(GlobalStateContext);
}
