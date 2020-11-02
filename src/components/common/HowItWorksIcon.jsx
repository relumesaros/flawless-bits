import React from 'react';
import styled from 'styled-components';

const HowItWorksIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4c4c4c;
  flex-shrink: 0;

  @media only screen and (max-width: 950px), screen and (max-height: 800px) {
    padding: 5px 10px;
  }
`;

const HowItWorksIconNumberWrapper = styled.div`
  position: absolute;
  font-size: 90px;
  opacity: 0.15;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;

  @media only screen and (max-width: 950px), screen and (max-height: 800px) {
    font-size: 40px;
  }
`;

const HowItWorksIconRelativeWrapper = styled.div`
  position: relative;
`;

const HowItWorksTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  text-align: center;

  @media only screen and (max-width: 950px), screen and (max-height: 800px) {
    font-size: 10px;
  }
`;

const MaterialUIIconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 70px;
  margin-bottom: 30px;

  @media only screen and (max-width: 950px), screen and (max-height: 800px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const HowItWorksIcon = ({ title, MaterialUIIcon, index }) => {
  return (
    <HowItWorksIconWrapper>
      <MaterialUIIconWrapper>
        <MaterialUIIcon fontSize="inherit" />
      </MaterialUIIconWrapper>
      <HowItWorksIconRelativeWrapper>
        <HowItWorksTitle>{title}</HowItWorksTitle>
        <HowItWorksIconNumberWrapper>{index}</HowItWorksIconNumberWrapper>
      </HowItWorksIconRelativeWrapper>
    </HowItWorksIconWrapper>
  );
};

export default HowItWorksIcon;
