import React from 'react';
import styled from 'styled-components';
import LocationSvg from '../assets/icons/LocationSvg';
import PhoneSvg from '../assets/icons/PhoneSvg';
import MailSvg from '../assets/icons/MailSvg';
import LinkedInSvg from '../assets/icons/LinkedInSvg';
import FacebookSvg from '../assets/icons/FacebookSvg';
import stylesConfig from '../config/styles.config';
import logoSrc from '../assets/logo.jpg';

const FooterWrapper = styled.div`
  height: 220px;
  padding: 30px 17%;
  box-sizing: border-box;
  background-color: ${stylesConfig.colors.black};
  border-top: 1px solid #f1f0f0;
  letter-spacing: 2px;
  color: white;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 10px 10%;
    height: 100px;
    letter-spacing: 0px;
  }
`;

const FooterContentContainer = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-columns: auto auto auto;
  padding: 0 5px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0 2px;
    grid-column-gap: 3px;
    grid-row-gap: 2px;
  }
`;

const Row = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  white-space: nowrap;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 7px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  color: ${stylesConfig.colors.white};

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 10px;
    height: 10px;
  }
`;

const ContactIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSection = styled.div`
  display: grid;
  align-items: center;
  margin: 10px 0;
  grid-column-gap: 5px;
  grid-row-gap: 2px;
  grid-template-columns: auto auto;
  justify-content: flex-start;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 5px 0;
  }
`;

const SVGLink = styled.a`
  height: 40px;
  cursor: pointer;
  margin: 0 10px;
  background: white;
  color: transparent;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 15px;
  }
`;

const Text = styled.p`
  margin: 5px 5px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 3px 5px;
  }
`;

const Title = styled.p`
  margin: 0;
  font-size: 25px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 15px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 15px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 8px;
  }
`;

const NavbarLogo = styled.img`
  height: 40px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 15px;
  }
`;

export default () => {
    return (
        <FooterWrapper>
            <HeaderSection>
                <Title>Flawless Bits</Title>
                <div/>
                <Subtitle>
                    Transparent, streamlined, rapid, and adept in Agile practices.
                </Subtitle>
            </HeaderSection>

            <FooterContentContainer>
                <Row>
                    <IconWrapper>
                        <LocationSvg/>
                    </IconWrapper>
                    <Text>
                        <strong>Romania</strong>, Cluj-Napoca
                    </Text>
                </Row>

                <Row>
                    <IconWrapper>
                        <PhoneSvg/>
                    </IconWrapper>
                    <Text>+4 0744-138-340</Text>
                </Row>

                <ContactIconsWrapper>
                    <SVGLink
                        href="https://www.linkedin.com/company/flawless-bits"
                        target="_blank"
                    >
                        <LinkedInSvg/>
                    </SVGLink>

                    <SVGLink
                        href="https://www.facebook.com/flawless.bits"
                        target="_blank"
                    >
                        <FacebookSvg/>
                    </SVGLink>

                </ContactIconsWrapper>

                <Row>
                    <IconWrapper>
                        <MailSvg/>
                    </IconWrapper>
                    <Text>flawless-bits@gmail.com</Text>
                </Row>

            </FooterContentContainer>
        </FooterWrapper>
    );
};
