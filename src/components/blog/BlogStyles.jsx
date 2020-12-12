import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../config/stylesConfig';

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 0 20px 0;
`;

export const IconWrapper = styled.div`
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
  color: #7b7b7b;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #4e4d4d;
  }
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 20px;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
  padding-bottom: 30px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding-bottom: 10px;
    font-size: 15px;
    line-height: 25px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Subtitle = styled.p`
  margin: 10px 0; 
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 20px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 12px;
  }
`;

export const Text = styled.p`
  margin: 5px 0; 
  letter-spacing: 2px;
  line-height: 25px;
  font-size: 18px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    letter-spacing: 1px;
    font-size: 10px;
    line-height: 13px;
  }
`;

export const Pre = styled.pre`
  background-color: rgb(242, 242, 242);
  overflow: auto;
  font-size: 15px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
  }
`;

export const ListItemWrapper = styled.div`
  margin: 7px 0; 
  display: flex;
  align-items: flex-start;
`;

export const ListItemDash = styled.div`
  margin: 7px 5px 0 0; 
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 1px 5px 0 0; 
  }
`;

export const ListItem = ({ children }) => {
  return (
    <ListItemWrapper>
      <ListItemDash>-</ListItemDash>
      <Text><strong>{children}</strong></Text>
    </ListItemWrapper>
  );
};

export const PaddingLeft = styled.div`
  padding-left: 20px
`;

export const ListItem2 = ({ children }) => {
  return (
    <PaddingLeft>
      <ListItem>
        {children}
      </ListItem>
    </PaddingLeft>
  );
};

export const TitleH3 = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1.5px;
  padding-bottom: 30px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding-bottom: 10px;
    font-size: 12px;
  }
`;

export const Link = styled.a`
  margin: 5px 0;
  text-decoration: underline;
  word-break: break-word;
`;

export const Section = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
  padding: 80px 25% 200px 25%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 50px 20px 40px 20px;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: #0000000a;
  margin: 15px 0; 
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 5px 0; 
  }
`;
