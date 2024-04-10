import React from 'react';
import styled from 'styled-components';
import HowItWorks from './HowItWorks';
import Vision from './Vision';
import WhyUs from './WhyUs';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';
import Blog from './Blog';
import stylesConfig from '../../../shared/config/styles.config';
import MetaMain from './MetaMain';

const HomeWrapper = styled.div`
  height: 100%;
  color: ${stylesConfig.colors.text};
`;

export const Main = () => {
    return (
        <HomeWrapper>
            <MetaMain/>
            <Vision/>
            <WhyUs/>
            <OurTeam/>
            <HowItWorks/>
            <Blog/>
            <ContactUs/>
        </HomeWrapper>
    );
};
