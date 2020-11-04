import React from 'react';
import styled from 'styled-components';

import visionSrc from '../../assets/vision.png';
import { LinearGradientAsc } from '../common/LinearGradient';
import navbarConfig from '../../config/navbarConfig';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import {
  ScrollArrowDown,
  ScrollArrowDownPosition,
} from '../common/ScrollArrow';
import AwsSvg from '../../assets/AwsSvg';
import NodeJsSvg from '../../assets/NodeJsSvg';
import JavaSvg from '../../assets/JavaSvg';
import JavaScriptSvg from '../../assets/JavaScriptSvg';
import MySqlSvg from '../../assets/MySqlSvg';
import PostgreSqlSvg from '../../assets/PostgreSqlSvg';
import MongoDbSvg from '../../assets/MongoDbSvg';
import ReactJsSvg from '../../assets/ReactJsSvg';
import AngularJsSvg from '../../assets/AngularJsSvg';
import DockerSvg from '../../assets/DockerSvg';
import PhpSvg from '../../assets/PhpSvg';
import stylesConfig from '../../config/stylesConfig';

const SectionVision = styled.div`
  position: relative;
  min-height: 100%;
  padding: 80px 17% 60px 17%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  
  ::after {
    content: "";
    background: url("${visionSrc}") no-repeat center;
    background-position: 30% 25%;
    background-size: 70%;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 60px 17% 60px 17%;
  }
`;

const Title = styled.h2`
  max-width: 750px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0;
    text-align: center;
    margin: 0;
  }
`;

const WhatWeKnowWrapper = styled.div`
  margin-top: 50px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin-top: 20px;
  }
`;

const WhatWeKnowTitle = styled.h3`
  text-align: center;
  font-weight: 300;
  font-size: 22px;
  letter-spacing: 1px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 12px;
    margin: 0;
  }
`;

const WhatWeKnowIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin-top: 20px;
  }
`;

const IconWrapper = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-shrink: 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 60px;
  }
`;

const IconText = styled.p`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 8px;
    margin-top: 5px;
  }
`;

export default () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionVision id={navbarConfig.sections.vision}>
      <LinearGradientAsc />

      <Title>
        We build builds quality web-based applications. Transparent, efficient, fast and familiarized with the Agile methodology.
      </Title>

      <WhatWeKnowWrapper>
        <WhatWeKnowTitle>What we know:</WhatWeKnowTitle>

        <WhatWeKnowIconsWrapper>
          <IconWrapper>
            <ReactJsSvg />
            <IconText>ReactJS</IconText>
          </IconWrapper>

          <IconWrapper>
            <AngularJsSvg />
            <IconText>AngularJS</IconText>
          </IconWrapper>

          <IconWrapper>
            <AwsSvg />
            <IconText>AWS</IconText>
          </IconWrapper>

          <IconWrapper>
            <NodeJsSvg />
            <IconText>Node.js</IconText>
          </IconWrapper>

          <IconWrapper>
            <JavaSvg />
            <IconText>Java</IconText>
          </IconWrapper>

          <IconWrapper>
            <JavaScriptSvg />
            <IconText>JavaScript</IconText>
          </IconWrapper>

          <IconWrapper>
            <MySqlSvg />
            <IconText>MySQL</IconText>
          </IconWrapper>

          <IconWrapper>
            <PostgreSqlSvg />
            <IconText>PostgreSQL</IconText>
          </IconWrapper>

          <IconWrapper>
            <MongoDbSvg />
            <IconText>MongoDB</IconText>
          </IconWrapper>

          <IconWrapper>
            <DockerSvg />
            <IconText>Docker</IconText>
          </IconWrapper>

          <IconWrapper>
            <PhpSvg />
            <IconText>PHP</IconText>
          </IconWrapper>
        </WhatWeKnowIconsWrapper>
      </WhatWeKnowWrapper>

      <ScrollArrowDownPosition>
        <ScrollArrowDown
          tooltipText="Go to Why Us"
          onCallback={() => onScrollTo(navbarConfig.sections.whyUs)}
        />
      </ScrollArrowDownPosition>
    </SectionVision>
  );
};
