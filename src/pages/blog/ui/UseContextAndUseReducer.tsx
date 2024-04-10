import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CloseButton,
    HorizontalLine,
    IconWrapper,
    Image,
    Link,
    ListItemStrong,
    Pre,
    Section,
    Subtitle,
    Text,
    TitleH2
} from "./BlogStyles";
import blogConfig from "../../../shared/config/blog.config.json";
import MetaBlog from "./MetaBlog";
import { LinearGradientAsc } from "../../../shared/ui/LinearGradient";

export default () => {
    const navigate = useNavigate();
    const onGoBackClick = () => {
        navigate('/');
    };

    return (
        <Section>

            <MetaBlog
                title={blogConfig.reactjsWithUsecontextAndUsereducerHooksExample.title}
                subTitle={blogConfig.reactjsWithUsecontextAndUsereducerHooksExample.subTitle}
                link={blogConfig.reactjsWithUsecontextAndUsereducerHooksExample.link}
                s3imageBucketPath={blogConfig.reactjsWithUsecontextAndUsereducerHooksExample.imageSrc}
            />

            <CloseButton>
                <IconWrapper onClick={onGoBackClick}>
                    &#9664; Go Back
                </IconWrapper>
            </CloseButton>

            <LinearGradientAsc/>

            <TitleH2>
                {blogConfig.reactjsWithUsecontextAndUsereducerHooksExample.title}
            </TitleH2>

            <br/>
            <br/>

            <Image src={`/${blogConfig.reactjsWithUsecontextAndUsereducerHooksExample.imageSrc}`}/>

            <br/>
            <br/>
            <br/>

            <Subtitle>
                We’re gonna show a simple example that uses ReactJs Hooks useContext and useReducer.
            </Subtitle>

            <Subtitle>
                We’re gonna mimic the Redux way of doing things, but with React’s native hooks. Let’s skip the chit-chat
                and
                dive in!
            </Subtitle>

            <br/>
            <HorizontalLine/>
            <br/>

            <Text><strong>Components:</strong></Text>

            <ListItemStrong>ContextProvider.jsx</ListItemStrong>
            <ListItemStrong>Navbar.jsx</ListItemStrong>
            <ListItemStrong>Home.jsx</ListItemStrong>
            <ListItemStrong>App.jsx</ListItemStrong>

            <HorizontalLine/>

            <Text>
                <br/>
                Code for this example:
                <br/>
                <Link href='https://github.com/relumesaros/react-with-context-and-reducer-hook' target="_blank">
                    https://github.com/relumesaros/react-with-context-and-reducer-hook
                </Link>
                <br/>
            </Text>

            <HorizontalLine/>

            <ListItemStrong>ContextProvider.jsx</ListItemStrong>
            <br/>

            <Pre>{
                `
      import React, { useReducer, createContext, useContext } from 'react';
      export const GlobalContext = createContext();
      export const ACTION_NAVBAR_SET = 'navbar/set';
      export const ACTION_NAVBAR_RESET = 'navbar/reset';
      const defaultContext = {
        navbarActive: null
      };
      const reducer = (state, action) => {
        switch (action.type) {
          case ACTION_NAVBAR_SET:
            return {
              ...state,
              navbarActive: action.payload
            };
          case ACTION_NAVBAR_RESET:
            return {
              ...state,
              navbarActive: null
            };
          default:
            throw new Error();
        }
      };
      const ContextProvider = props => {
        const [context, dispatch] = useReducer(reducer, defaultContext);
        return (
          <GlobalContext.Provider value={{ context, dispatch }}>
            {props.children}
          </GlobalContext.Provider>
        );
      };
      export default ContextProvider;
      export const useGlobalContext = () => useContext(GlobalContext);
        `
            }
            </Pre>

            <br/>
            <br/>
            <HorizontalLine/>
            <br/>
            <br/>

            <ListItemStrong>Navbar.jsx</ListItemStrong>
            <br/>

            <Pre>{
                `
          import React from 'react';
          import styled from 'styled-components';
          import { ACTION_NAVBAR_SET, useGlobalContext } from './ContextProvider';
          const NavbarWrapper = styled.div\`
            display: flex;
            width: 250px;
            justify-content: space-between;
          \`;
          const NavbarMenuItem = styled.div\`
            color: ${(props: any) => (props.active ? 'red' : 'blue')};
          \`;
          const home = 'home';
          const aboutUs = 'aboutUs';
          const Navbar = () => {
            const { dispatch, context: { navbarActive } } = useGlobalContext();
            return (
              <NavbarWrapper>
                <NavbarMenuItem
                  active={navbarActive === home}
                  onClick={() => dispatch({
                    type: ACTION_NAVBAR_SET,
                    payload: home
                  })}
                >
                  Home
                </NavbarMenuItem>
                <NavbarMenuItem
                  active={navbarActive === aboutUs}
                  onClick={() => dispatch({
                    type: ACTION_NAVBAR_SET,
                    payload: aboutUs
                  })}
                >
                  About Us
                </NavbarMenuItem>
              </NavbarWrapper>
            );
          };
          export default Navbar;
          `
            }</Pre>

            <br/>
            <br/>
            <HorizontalLine/>
            <br/>
            <br/>

            <ListItemStrong>Home.jsx</ListItemStrong>
            <br/>

            <Pre>{
                `
          import React from 'react';
          import styled from 'styled-components';
          import { ACTION_NAVBAR_RESET, useGlobalContext } from './ContextProvider';
          const ResetWrapper = styled.p\`
            color: blue;
          \`;
          const Home = () => {
            const { dispatch, context: { navbarActive } } = useGlobalContext();
            return (
              <div>
                <Text>
                  Active Navbar: {navbarActive}
                </Text>
                <ResetWrapper onClick={() => dispatch({
                   type: ACTION_NAVBAR_RESET
                })}>
                  Reset
                </ResetWrapper>
              </div>
            );
          };
          export default Home;
          `
            }</Pre>

            <br/>
            <br/>
            <HorizontalLine/>
            <br/>
            <br/>

            <ListItemStrong>App.jsx</ListItemStrong>
            <br/>

            <Pre>{
                `
          import React, { Component } from 'react';
          import { hot } from 'react-hot-loader/root';
          import ContextProvider from './ContextProvider';
          import Navbar from './Navbar';
          import Home from './Home';
          class App extends Component {
            render() {
              return (
                <ContextProvider>
                  <Navbar />
                  <Home />
                </ContextProvider>
              );
            }
          }
          export default hot(App);
          `
            }</Pre>

            <br/>
            <br/>
            <HorizontalLine/>
            <br/>
            <br/>

            <Text>
                When to use native React.useReducer Hook and how it differentiate from Redux? That’s a Great Question
                and there are some answers in the link below:
            </Text>

            <Link
                target="_blank"
                href='https://stackoverflow.com/questions/54576865/when-to-use-native-react-usereducer-hook-and-how-it-differentiate-from-redux/54577838#54577838'>
                https://stackoverflow.com/questions/54576865/when-to-use-native-react-usereducer-hook-and-how-it-differentiate-from-redux/54577838#54577838
            </Link>

            <br/>
            <br/>
            <HorizontalLine/>
            <br/>
            <br/>

            <Image src='/blog/thatsAllFolks.png'/>

            <br/>
            <br/>
            <HorizontalLine/>
            <br/>
            <br/>

            <Text>
                Have a Great Day!
            </Text>
        </Section>
    );
};
