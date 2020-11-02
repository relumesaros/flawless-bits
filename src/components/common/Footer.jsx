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
  padding: 0 10%;
  box-sizing: border-box;
  background-color: ${stylesConfig.colors.graySection};
  border-top: 1px solid #f1f0f0;
  letter-spacing: 2px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    height: 100px;
    letter-spacing: 0px;
  }
`;

const FooterContentContainer = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: auto auto;
  padding: 0 5px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    padding: 0 2px;
    grid-column-gap: 3px;
  }
`;

const Row = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  
  transition: all 0.5s ease-in-out;
  
  &:hover {
    color: ${stylesConfig.colors.textHover};
  }

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    font-size: 7px;
  }
`;

const Icon = styled.div`
  display: flex;
  font-size: 20px;
  
  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    font-size: 10px;
  }
`;

const Text = styled.p`
  margin: 5px 5px;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    margin: 3px 5px;
  }
`;

const FooterTitle = styled.h4`
  margin: 10px 0;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    margin: 5px 0 3px 0;
  }
`;

export default () => {
  return (
    <FooterWrapper>
      <FooterTitle>We build software products.</FooterTitle>

      <FooterContentContainer>
        <Row>
          <Icon>
            <LocationOnIcon fontSize="inherit"/>
          </Icon>
          <Text>
            <strong>Romania</strong>, Cluj-Napoca
          </Text>
        </Row>

        <Row>
          <Icon>
            <PhoneIcon fontSize="inherit"/>
          </Icon>
          <Text>+40(0) 744 138340</Text>
        </Row>

        <Row>
          <Icon>
            <MailIcon fontSize="inherit"/>
          </Icon>
          <Text>aurelian.mesaros@gmail.com</Text>
        </Row>
      </FooterContentContainer>
    </FooterWrapper>
  );
};
