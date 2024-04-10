import React from 'react';
import styled from 'styled-components';
import {
    ScrollArrowDown,
    ScrollArrowUp,
} from '../../../shared/ui/ScrollArrow';
import navbarConfig from '../../../shared/config/navbar.config';
import stylesConfig from '../../../shared/config/styles.config';
import SectionWrapper from "../../../shared/ui/Section";
import TextWithArrow from "../../../shared/ui/TextWithArrow";
import Text from "../../../shared/ui/Text";
import Header2 from "../../../shared/ui/Header2";

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
                    <Header2>Why us?</Header2>
                </WhyUsTitleWrapper>
                <WhyUsContent>
                    <TextWithArrow text={'Our software engineers wield over a decade of coding mastery.'}/>
                    <TextWithArrow text={'We champion RAPID deliveries.'}/>
                    <TextWithArrow text={'Transparency is our cornerstone.'}/>
                </WhyUsContent>
                <AboutUsTitle>
                    <Header2>Who are we?</Header2>
                </AboutUsTitle>
                <AboutUsText>
                    <Text>
                        We are not merely close friends; we are the architects, the pioneers,
                        the tech-savvy minds shaping tomorrow. Our bonds run deep, forged
                        through shared experiences and countless hours of collaboration.
                        Many of us have traversed the corporate landscape together, serving
                        as valued teammates within the corridors of leading software enterprises.
                        Our collective expertise has left an indelible mark on every project
                        we've touched, imprinting our vision and dedication onto the very
                        fabric of innovation.
                    </Text>
                </AboutUsText>
            </Content>
            <ScrollArrowDown scrollDestination={navbarConfig.sections.ourTeam}/>
        </SectionWrapper>
    );
};
