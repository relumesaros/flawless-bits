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
    padding: 70px 17% 20px 17%;
  }
`;

const TitleWhyUs = styled.h2`
  text-align: right;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
  }
`;

const TitleAboutUs = styled.h2`
  margin: 0 0 20px 0;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
`;

const WhyUsContentFlexLeft = styled.div`
  opacity: 0.1;
  text-orientation: mixed;
  writing-mode: vertical-rl;
  flex: 1;
  font-size: 8em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${stylesConfig.colors.blue};
  letter-spacing: 2px;
  z-index: -1;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 70px;
  }
`;

const ContentRight = styled.div`
  flex: 1;
  padding-top: 30px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding-top: 10px;
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

const AboutUsText = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 35px;
  letter-spacing: 2px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 15px;
  }
`;

const WhyUsTextContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const AboutUsTextContainer = styled.div`
  margin: 30px 10px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 10px 0;
  }
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
        <WhyUsContentFlexLeft>Flawless Bits</WhyUsContentFlexLeft>

        <ContentRight>
          <TitleWhyUs> Why us? </TitleWhyUs>

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

          <AboutUsTextContainer>
            <TitleAboutUs>Who are we?</TitleAboutUs>

            <AboutUsText /* eslint-disable */>
              We are a group of close friends and teammates located in Cluj-Napoca Romania.
              We knew each other before, but also also while working for top software companies in Cluj county.
              Our contribution left a strong footprint on the projects we were assigned.
              The motivation to start our own business was triggered by following key aspects:
              we can decide the projects that come in and fit best our technology stack,
              we can still be teammates and we know for sure that our team is a match,
              and there is also the financial aspect.
            </AboutUsText>
          </AboutUsTextContainer>

        </ContentRight>

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
