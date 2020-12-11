import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Main from './Main';
import stylesConfig from '../config/stylesConfig';
import UseContextAndUseReducer from './blog/UseContextAndUseReducer';
import RestVsGraphQL from './blog/RestVsGraphQL';
import ClassLoadersAndHowTheyAreUsedInJvm from './blog/ClassLoadersAndHowTheyAreUsedInJvm';
import Footer from './common/Footer';

const RouterContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SwitchWrapper = styled.div`
  box-sizing: border-box;
  margin-top: ${stylesConfig.navbarHeight.desktop - 1}px;
  height: calc(100% - ${stylesConfig.navbarHeight.desktop - 1}px);
  width: 100%;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin-top: ${stylesConfig.navbarHeight.mobile - 1}px;
    height: calc(100% - ${stylesConfig.navbarHeight.mobile - 1}px);
  }
`;

export default function App() {
  return (
    <Router>
      <RouterContentWrapper>
        <Navbar/>
        <SwitchWrapper>
          <Switch>
            <Route exact path="/blog/reactjs-with-context-and-reducer-hooks-example">
              <div>
                <UseContextAndUseReducer/>
                <Footer/>
              </div>
            </Route>
            <Route exact path="/blog/rest-vs-graphql">
              <div>
                <RestVsGraphQL/>
                <Footer/>
              </div>
            </Route>
            <Route exact path="/blog/rest-vs-graphql">
              <div>
                <ClassLoadersAndHowTheyAreUsedInJvm/>
                <Footer/>
              </div>
            </Route>
            <Route exact path="/blog/class-loaders-and-how-they-are-used-in-jvm">
              <div>
                <ClassLoadersAndHowTheyAreUsedInJvm/>
                <Footer/>
              </div>
            </Route>
            <Route>
              <Main/>
            </Route>
          </Switch>
        </SwitchWrapper>
      </RouterContentWrapper>
    </Router>
  );
}
