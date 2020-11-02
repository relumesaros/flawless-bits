import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Main from './Main';
import stylesConfig from '../config/stylesConfig';

const RouterContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SwitchWrapper = styled.div`
  box-sizing: border-box;
  margin-top: ${stylesConfig.navbarHeight.desktop - 1}px;
  height: calc(100% - ${stylesConfig.navbarHeight.desktop - 1}px);
  width: 100%;

  @media only screen and (max-width: 950px), screen and (max-height: 800px) {
    margin-top: ${stylesConfig.navbarHeight.mobile - 1}px;
    height: calc(100% - ${stylesConfig.navbarHeight.mobile - 1}px);
  }
`;

export default function App() {
  return (
    <Router>
      <RouterContentWrapper>
        <Navbar />
        <SwitchWrapper>
          <Route exact path="/">
            <Main />
          </Route>
        </SwitchWrapper>
      </RouterContentWrapper>
    </Router>
  );
}
