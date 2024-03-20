import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../config/styles.config';

const HowItWorksIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4c4c4c;
  flex-shrink: 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 5px 10px;
  }
`;

const HowItWorksIconNumberWrapper = styled.div`
  position: absolute;
  font-size: 130px;
  opacity: 0.15;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  letter-spacing: 10px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 40px;
    letter-spacing: 3px;
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

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
  }
`;

const MaterialUIIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  overflow: hidden;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
  }
`;

interface IProfileCard {
    title: string;
    Icon: () => JSX.Element;
    index: string
}

const IProfileCard = ({title, Icon, index}: IProfileCard) => {
    return (
        <HowItWorksIconWrapper>
            <MaterialUIIconWrapper>
                <Icon/>
            </MaterialUIIconWrapper>
            <HowItWorksIconRelativeWrapper>
                <HowItWorksTitle>{title}</HowItWorksTitle>
                <HowItWorksIconNumberWrapper>{index}</HowItWorksIconNumberWrapper>
            </HowItWorksIconRelativeWrapper>
        </HowItWorksIconWrapper>
    );
};

export default IProfileCard;
