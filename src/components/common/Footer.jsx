import React from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import stylesConfig from '../../config/stylesConfig';

const FooterWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 0 17%;
  margin-top: 30px;
  box-sizing: border-box;
  background-color: ${stylesConfig.colors.graySection};
  border-top: 1px solid #f1f0f0;
  letter-spacing: 2px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0 10%;
    height: 100px;
    letter-spacing: 0px;
  }
`;

const FooterContentContainer = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: auto auto;
  padding: 0 5px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0 2px;
    grid-column-gap: 3px;
  }
`;

const Row = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  
  transition: all 0.1s ease-in-out;
  
  &:hover {
    color: ${stylesConfig.colors.textHover};
  }

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 7px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 20px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
  }
`;

const Text = styled.p`
  margin: 5px 5px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 3px 5px;
  }
`;

const Title = styled.h3`
  margin: 15px 0 0 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 5px 0 0 0;
  }
`;

const Subtitle = styled.p`
  margin: 15px 0;
  font-size: 15px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 5px 0 3px 0;
    font-size: 8px;
  }
`;

export default () => {
  return (
    <FooterWrapper>
      <Title>Flawless Bits</Title>

      <Subtitle>
        We provide quality software and service, shaping your ideas into great products.
      </Subtitle>

      <FooterContentContainer>
        <Row>
          <IconWrapper>
            <LocationOnIcon fontSize="inherit"/>
          </IconWrapper>
          <Text>
            <strong>Romania</strong>, Cluj-Napoca
          </Text>
        </Row>

        <Row>
          <IconWrapper>
            <PhoneIcon fontSize="inherit"/>
          </IconWrapper>
          <Text>+40(0) 744 138340</Text>
        </Row>

        <Row>
          <IconWrapper>
            <MailIcon fontSize="inherit"/>
          </IconWrapper>
          <Text>flawless-bits@gmail.com</Text>
        </Row>
      </FooterContentContainer>
    </FooterWrapper>
  );
};
