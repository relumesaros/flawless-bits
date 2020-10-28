import React from 'react';
import styled from 'styled-components';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TimerIcon from '@material-ui/icons/Timer';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HowItWorksIcon from '../common/HowItWorksIcon';
import { LinearGradientAsc } from '../common/LinearGradient';
import navbarConfig from '../../config/navbarConfig';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import {
  ScrollArrowDown,
  ScrollArrowUp,
  ScrollArrowUpPosition,
  ScrollArrowDownPosition,
} from '../common/ScrollArrow';
import stylesConfig from '../../config/stylesConfig';

const SectionHowItWorks = styled.div`
  position: relative;
  height: 100%;
  padding: 110px 17% 60px 17%;
  box-sizing: border-box;
  background-color: ${stylesConfig.colors.graySection};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    padding: 50px 17% 50px 17%;
  }
`;

const HowItWorksIconsWrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto auto;
  margin-top: 30px;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    margin-top: 15px;
    display: grid;
    grid-column-gap: 25px;
    grid-template-columns: auto auto;
  }
`;

const HowItWorksContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;

const HowItWorksText = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 35px;
  letter-spacing: 2px;
  max-width: 400px;

  @media only screen and (max-width: 900px), screen and (max-height: 910px) {
    font-size: 10px;
    margin: 10px 0 0 0;
    line-height: 15px;
    letter-spacing: 1px;
    text-align: center;
  }
`;

export default () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionHowItWorks id={navbarConfig.sections.howItWorks}>
      <LinearGradientAsc />

      <ScrollArrowUpPosition>
        <ScrollArrowUp
          tooltipText="Go to Our Team"
          onCallback={() => onScrollTo(navbarConfig.sections.ourTeam)}
        />
      </ScrollArrowUpPosition>

      <HowItWorksContent>
        <h2>How it works.</h2>
        <HowItWorksText>
          We gather information about your product. Then we make Time and Cost
          Estimation, we select the perfect Team Members and we start Developing
          and Shaping your Idea into a Great Product.
        </HowItWorksText>
      </HowItWorksContent>

      <HowItWorksIconsWrapper>
        <HowItWorksIcon
          title="Gather Information."
          MaterialUIIcon={AssignmentIcon}
          index="01"
        />
        <HowItWorksIcon
          title="Time & Cost Estimation."
          MaterialUIIcon={TimerIcon}
          index="02"
        />
        <HowItWorksIcon
          title="Team Design."
          MaterialUIIcon={GroupIcon}
          index="03"
        />
        <HowItWorksIcon title="Coding." MaterialUIIcon={CodeIcon} index="04" />
        <HowItWorksIcon
          title="Testing, Review and Launch."
          MaterialUIIcon={FlightTakeoffIcon}
          index="05"
        />
      </HowItWorksIconsWrapper>

      <ScrollArrowDownPosition>
        <ScrollArrowDown
          tooltipText="Go to Contact Us"
          onCallback={() => onScrollTo(navbarConfig.sections.contactUs)}
        />
      </ScrollArrowDownPosition>
    </SectionHowItWorks>
  );
};
