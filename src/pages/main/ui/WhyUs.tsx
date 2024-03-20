import React from 'react';
import styled from 'styled-components';
import {
    ScrollArrowDown,
    ScrollArrowUp,
} from '../../../shared/ui/ScrollArrow';
import navbarConfig from '../../../shared/config/navbar.config';
import stylesConfig from '../../../shared/config/styles.config';
import Header3 from "../../../shared/ui/Header3";
import SectionWrapper from "../../../shared/ui/Section";
import TextWithArrow from "../../../shared/ui/TextWithArrow";
import Text from "../../../shared/ui/Text";

const WhyUsTitleWrapper = styled.div`
  grid-area: grid-why-us-title;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
  }
`;

const AboutUsTitle = styled.div`
  grid-area: grid-about-us-title;
  text-align: right;
  border-top: 1px solid ${stylesConfig.colors.graySection};
  padding-top: 30px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
    border-top: none;
    padding-top: 10px;
  }
`;

const WhyUsContent = styled.div`
  grid-area: grid-why-us-content;
  padding-left: 10px;
`;

const AboutUsText = styled.div`
  grid-area: grid-about-us-content;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 2px;
  border-top: 1px solid ${stylesConfig.colors.graySection};
  padding: 30px 10px 0 10px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    text-align: center;
    border-top: none;
    padding: 0;
  }
`;

const Content = styled.div`
  height: 100%;

  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 130px;
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


export default () => {
    return (
        <SectionWrapper id={navbarConfig.sections.whyUs} backgroundColor={stylesConfig.colors.graySection}>
            <ScrollArrowUp scrollDestination={navbarConfig.sections.vision}/>
            <Content>
                <WhyUsTitleWrapper>
                    <Header3>Why us?</Header3>
                </WhyUsTitleWrapper>
                <WhyUsContent>
                    <TextWithArrow text={'Our software engineers are coding for more than 10 years.'}/>
                    <TextWithArrow text={'We deliver FAST.'}/>
                    <TextWithArrow text={'We are very TRANSPARENT.'}/>
                </WhyUsContent>
                <AboutUsTitle>
                    <Header3>Who are we?</Header3>
                </AboutUsTitle>
                <AboutUsText>
                    <Text>
                        We are close friends, founders and tech people.
                        We know each other very well, and some of us were also teammates while working for
                        top software companies.
                        Our contribution left a strong footprint on the projects we were assigned on.
                    </Text>
                </AboutUsText>
            </Content>
            <ScrollArrowDown scrollDestination={navbarConfig.sections.ourTeam}/>
        </SectionWrapper>
    );
};
