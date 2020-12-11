import React from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { LinearGradientDesc } from '../common/LinearGradient';
import {
  ScrollArrowDown,
  ScrollArrowDownPosition,
  ScrollArrowUp,
  ScrollArrowUpPosition,
} from '../common/ScrollArrow';
import navbarConfig from '../../config/navbarConfig';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import stylesConfig from '../../config/stylesConfig';

const SectionWhyUs = styled.div`
  position: relative;
  min-height: 100%;
  padding: 80px 17% 60px 17%;
  box-sizing: border-box;
  background-color: rgba(16, 88, 249, 0.03);
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 70px 17% 50px 17%;
  }
`;

const WhyUsTitle = styled.h2`
  grid-area: grid-why-us-title;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
  }
`;

const AboutUsTitle = styled.h2`
  grid-area: grid-about-us-title;
  
  text-align: right;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
  }
`;

const WhyUsContent = styled.div`
  grid-area: grid-why-us-content;
`;

const AboutUsText = styled.div`
  grid-area: grid-about-us-content;
  margin: 0 10px;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 2px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 10px 0;
    text-align: center;
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 15px;
  }
`;

const Content = styled.div`
  height: 100%;
  
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 70px;
  grid-template-columns: auto auto;
  
  grid-template-areas: 
  "grid-why-us-title grid-why-us-content"
  "grid-about-us-content grid-about-us-title";
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    grid-row-gap: 10px;
    grid-template-areas: 
    "grid-why-us-title"
    "grid-why-us-content"
    "grid-about-us-title"
    "grid-about-us-content";
  }
`;

const Text = styled.p`
  font-size: 20px;
  margin: 0;
  letter-spacing: 2px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
    letter-spacing: 1px;
  }
`;

const WhyUsTextContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ArrowRightIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 20px;
  padding-top: 3px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
  }
`;

export default () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionWhyUs id={navbarConfig.sections.whyUs}>
      <LinearGradientDesc/>

      <ScrollArrowUpPosition>
        <ScrollArrowUp
          tooltipText="Go to Vision"
          onCallback={() => onScrollTo(navbarConfig.sections.vision)}
        />
      </ScrollArrowUpPosition>

      <Content>

        <WhyUsTitle> Why us? </WhyUsTitle>

        <WhyUsContent>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit"/>
            </ArrowRightIconWrapper>
            <Text>
              We are experienced and mature software engineers.
            </Text>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit"/>
            </ArrowRightIconWrapper>
            <Text>
              We write code for more than 10 years.
            </Text>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit"/>
            </ArrowRightIconWrapper>
            <Text>
              Many of us are also co-founders.
            </Text>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit"/>
            </ArrowRightIconWrapper>
            <Text>
              We deliver fast.
            </Text>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit"/>
            </ArrowRightIconWrapper>
            <Text>Western Mindset</Text>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit"/>
            </ArrowRightIconWrapper>
            <Text>Transparent.</Text>
          </WhyUsTextContainer>

        </WhyUsContent>

        <AboutUsTitle>Who are we?</AboutUsTitle>

        <AboutUsText /* eslint-disable */>
          We are close friends, founders and tech people. We are located in Cluj-Napoca, Romania.
          We know each other very well, and some of us were also teammates while working for
          top software companies in the Cluj county.
          Our contribution left a strong footprint on the projects we were assigned on.
          The motivation to start our own business was triggered by the following key aspects:
          the ability to choose future projects and not to be assigned on them,
          being able to work together again as a team and we know for sure that our team is a match,
          and of course, there is also the financial aspect.
        </AboutUsText>

      </Content>

      <ScrollArrowDownPosition>
        <ScrollArrowDown
          tooltipText="Go to Our Team"
          onCallback={() => onScrollTo(navbarConfig.sections.ourTeam)}
        />
      </ScrollArrowDownPosition>
    </SectionWhyUs>
  );
};
