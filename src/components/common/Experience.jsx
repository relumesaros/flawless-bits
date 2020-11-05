import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../config/stylesConfig';
import { experienceLanguages } from '../../config/experienceConfig';

const IconWrapper = styled.div`
  height: 22px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 15px;
  }
`;

const IconText = styled.p`
  font-size: 10px;
  font-weight: bold;
  margin: 0 0 0 3px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 9px;
  }
`;

const ExperienceItemContainer = styled.div`
  font-size: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 3px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 5px;
  }
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-column-gap: 7px;
  justify-content: center;
  grid-template-columns: auto auto auto;
  padding: 0 5px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    grid-column-gap: 3px;
  }
`;

export default ({ experience }) => {
  return (
    <ExperienceContainer>
      {
        Object.keys(experience).map((experienceName) => {
          const experienceLanguage = experienceLanguages[experienceName];
          if (!experienceLanguage) {
            return null;
          }
          const { Icon } = experienceLanguage;
          return (
            <ExperienceItemContainer key={experienceName}>
              <IconWrapper>
                <Icon/>
              </IconWrapper>
              <IconText>{experienceLanguage.name}:</IconText>
              <IconText>{experience[experienceName]}yr.</IconText>
            </ExperienceItemContainer>
          );
        })

      }
    </ExperienceContainer>
  );
};
