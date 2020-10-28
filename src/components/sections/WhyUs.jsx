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

const SectionWhyUs = styled.div`
  position: relative;
  height: 100%;
  padding: 120px 17% 60px 17%;
  box-sizing: border-box;
  background-color: rgba(16, 88, 249, 0.03);
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    padding: 70px 17% 20px 17%;
  }
`;

const WhyUsTitle = styled.h2`
  text-align: right;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    text-align: center;
  }
`;

const WhyUsContent = styled.div`
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
  color: #0e56f8;
  letter-spacing: 2px;
  z-index: -1;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 70px;
  }
`;

const WhyUsContentFlexRight = styled.div`
  flex: 1;
  padding-top: 50px;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    padding-top: 10px;
  }
`;

const WhyUsText = styled.p`
  font-size: 20px;
  margin: 0;
  letter-spacing: 2px;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
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

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    font-size: 10px;
  }
`;

export default () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionWhyUs id={navbarConfig.sections.whyUs}>
      <LinearGradientDesc />

      <ScrollArrowUpPosition>
        <ScrollArrowUp
          tooltipText="Go to Vision"
          onCallback={() => onScrollTo(navbarConfig.sections.vision)}
        />
      </ScrollArrowUpPosition>

      <WhyUsTitle> Why us? </WhyUsTitle>

      <WhyUsContent>
        <WhyUsContentFlexLeft>Flawless Bits</WhyUsContentFlexLeft>

        <WhyUsContentFlexRight>
          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit" />
            </ArrowRightIconWrapper>
            <WhyUsText>
              We collaborate only with experienced and mature software
              engineers.
            </WhyUsText>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit" />
            </ArrowRightIconWrapper>
            <WhyUsText>
              Most of us have more than 10 years of experience in this domain.
            </WhyUsText>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit" />
            </ArrowRightIconWrapper>
            <WhyUsText>
              All our software engineers are also co-founders
            </WhyUsText>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit" />
            </ArrowRightIconWrapper>
            <WhyUsText>We are very motivated to make you happy.</WhyUsText>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit" />
            </ArrowRightIconWrapper>
            <WhyUsText>
              Our rates are small (30$ - 50$).
              <br />
            </WhyUsText>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit" />
            </ArrowRightIconWrapper>
            <WhyUsText>Western Mindset</WhyUsText>
          </WhyUsTextContainer>

          <WhyUsTextContainer>
            <ArrowRightIconWrapper>
              <ArrowRightIcon fontSize="inherit" />
            </ArrowRightIconWrapper>
            <WhyUsText>Transparent.</WhyUsText>
          </WhyUsTextContainer>
        </WhyUsContentFlexRight>
      </WhyUsContent>

      <ScrollArrowDownPosition>
        <ScrollArrowDown
          tooltipText="Go to Our Team"
          onCallback={() => onScrollTo(navbarConfig.sections.ourTeam)}
        />
      </ScrollArrowDownPosition>
    </SectionWhyUs>
  );
};
