import React from 'react';
import styled from 'styled-components';
import HowItWorks from './sections/HowItWorks';
import Vision from './sections/Vision';
import WhyUs from './sections/WhyUs';
import OurTeam from './sections/OurTeam';
import ContactUs from './sections/ContactUs';
import stylesConfig from '../config/stylesConfig';

const HomeWrapper = styled.div`
  height: 100%;
  color: ${stylesConfig.colors.text}
`;

const Main = () => {
  return (
    <HomeWrapper>
      <Vision />

      <WhyUs />

      <OurTeam />

      <HowItWorks />

      <ContactUs />
    </HomeWrapper>
  );
};

export default Main;
