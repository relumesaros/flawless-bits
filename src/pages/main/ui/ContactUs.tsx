import React from 'react';
import styled from 'styled-components';

import navbarConfig from '../../../shared/config/navbar.config';
import {
    ScrollArrowUp,
} from '../../../shared/ui/ScrollArrow';
import Footer from '../../../shared/ui/Footer';
import stylesConfig from '../../../shared/config/styles.config';
import SectionWrapper from "../../../shared/ui/Section";
import { ContactUsForm } from "../../../features/contact-us-form";
import Header2 from "../../../shared/ui/Header2";


const ContentWrapper = styled.div`
  height: calc(100% - ${stylesConfig.footerHeight.desktop}px);
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: calc(100% - ${stylesConfig.footerHeight.mobile}px);
  }
`;


const TitleAndSubtitleWrapper = styled.div`
  width: 48%;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleAndFromWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const SubtitleText = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 30px;
  margin: 20px 0 0 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: center;
  }
`;


const ContactUs = () => {
    return (
        <>
            <ContentWrapper>
                <SectionWrapper id={navbarConfig.sections.contactUs} backgroundColor={stylesConfig.colors.graySection}>
                    <ScrollArrowUp scrollDestination={navbarConfig.sections.blog}/>
                    <TitleAndFromWrapper>
                        <TitleAndSubtitleWrapper>
                            <Header2>
                                Let's get in touch!
                            </Header2>
                            <SubtitleText>
                                Do you have project in mind and would like to discuss more about it?
                            </SubtitleText>
                            <SubtitleText>
                                Please feel free to use the contact form below to ask us anything.
                                <br/>
                                We promise we’ll get back to you.
                            </SubtitleText>
                        </TitleAndSubtitleWrapper>
                        <ContactUsForm/>
                    </TitleAndFromWrapper>
                </SectionWrapper>
            </ContentWrapper>
            <Footer/>
        </>
    );
};

export default ContactUs;
