import React from 'react';
import styled from 'styled-components';
import ReactJsSvg from '../../assets/ReactJsSvg';
import AngularJsSvg from '../../assets/AngularJsSvg';
import AwsSvg from '../../assets/AwsSvg';
import NodeJsSvg from '../../assets/NodeJsSvg';
import JavaSvg from '../../assets/JavaSvg';
import JavaScriptSvg from '../../assets/JavaScriptSvg';
import MySqlSvg from '../../assets/MySqlSvg';
import PostgreSqlSvg from '../../assets/PostgreSqlSvg';
import MongoDbSvg from '../../assets/MongoDbSvg';
import DockerSvg from '../../assets/DockerSvg';
import PhpSvg from '../../assets/PhpSvg';
import stylesConfig from '../../config/stylesConfig';

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
      <ExperienceItemContainer>
        <IconWrapper>
          <ReactJsSvg />
        </IconWrapper>
        <IconText>ReactJS:</IconText>
        <IconText>{experience.reactJs}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <AngularJsSvg />
        </IconWrapper>
        <IconText>AngularJS:</IconText>
        <IconText>{experience.angularJs}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <AwsSvg />
        </IconWrapper>
        <IconText>AWS:</IconText>
        <IconText>{experience.aws}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <NodeJsSvg />
        </IconWrapper>
        <IconText>Node.js:</IconText>
        <IconText>{experience.nodeJs}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <JavaSvg />
        </IconWrapper>
        <IconText>Java:</IconText>
        <IconText>{experience.java}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <JavaScriptSvg />
        </IconWrapper>
        <IconText>JavaScript:</IconText>
        <IconText>{experience.javascript}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <MySqlSvg />
        </IconWrapper>
        <IconText>MySQL:</IconText>
        <IconText>{experience.mySql}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <PostgreSqlSvg />
        </IconWrapper>
        <IconText>PostgreSQL:</IconText>
        <IconText>{experience.postgreSql}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <MongoDbSvg />
        </IconWrapper>
        <IconText>MongoDB:</IconText>
        <IconText>{experience.mongoDb}yr.</IconText>
      </ExperienceItemContainer>

      <ExperienceItemContainer>
        <IconWrapper>
          <DockerSvg />
        </IconWrapper>
        <IconText>Docker:</IconText>
        <IconText>{experience.docker}yr.</IconText>
      </ExperienceItemContainer>

      {experience.php && (
        <ExperienceItemContainer>
          <IconWrapper>
            <PhpSvg />
          </IconWrapper>
          <IconText>PHP:</IconText>
          <IconText>{experience.php}yr.</IconText>
        </ExperienceItemContainer>
      )}
    </ExperienceContainer>
  );
};
