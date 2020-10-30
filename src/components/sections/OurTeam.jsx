import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

import { LinearGradientDesc } from '../common/LinearGradient';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import navbarConfig from '../../config/navbarConfig';
import teamAurelianMesarosSrc from '../../assets/teamAurelianMesaros.jpg';
import teamIonutMesarosSrc from '../../assets/teamIonutMesaros.png';
import {
  ScrollArrowDown,
  ScrollArrowDownPosition,
  ScrollArrowUp,
  ScrollArrowUpPosition,
} from '../common/ScrollArrow';
import { teamMembers } from '../../config/experienceConfig';
import Experience from '../common/Experience';

const SectionOurTeam = styled.div`
  position: relative;
  height: 100%;
  padding: 120px 17% 60px 17%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    padding: 50px 0 40px 0;
  }
`;

const OurTeamContainerDesktop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0 20px 0;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    display: none;
  }
`;

const Title = styled.h2`
  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    text-align: center;
  }
`;

const TeamMembersRow = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
  }
`;

const TeamMemberWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url("${props => props.imageUrl}") no-repeat center top;
  background-size: cover;
  opacity: 0.9;
  
  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    
  }
`;

const TeamMemberContent = styled.div`
  margin: 0;
  height: 200px;
  background: #ffffffbf;

  &:hover {
    background: #fffffff0;
  }

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    height: 155px;
  }
`;

const TeamMemberName = styled.p`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 8px 0 0 0;
  text-align: center;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    letter-spacing: 1px;
    font-size: 12px;
    margin: 10px 0 0 0;
  }
`;

const TeamMemberRole = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  margin: 5px 0 8px 0;
  text-align: center;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    letter-spacing: 0;
    font-size: 10px;
    margin: 5px 0;
  }
`;

const OurTeamContainerMobileWrapper = styled.div`
  display: none;
  height: 100%;
  margin: 20px 0 10px 0;
  box-sizing: border-box;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    display: flex;
  }

  .Carousel-root-1,
  >div,
  .CarouselItem,
  .CarouselItem > div {
    height: 100%;
    width: 100%;
  }
`;

const TeamMember = (
  {
    name,
    imageUrl,
    role,
    teamMemberName
  }
) => {
  if (!name) {
    return (<TeamMemberWrapper/>);
  }
  return (
    <TeamMemberWrapper imageUrl={imageUrl}>
      <TeamMemberContent>
        <TeamMemberName>{name}</TeamMemberName>
        <TeamMemberRole>
          {role}
        </TeamMemberRole>
        <Experience teamMemberName={teamMemberName}/>
      </TeamMemberContent>
    </TeamMemberWrapper>
  );
};

const roleFullstack = 'Full Stack Software Engineer, Co-Founder';

const OurTeamContainerMobile = () => {
  // eslint-disable-next-line
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line
  const onChange = indexNew => {
    // setIndex(indexNew);
    // eslint-disable-next-line
    console.error('index', index);
  };

  return (
    <OurTeamContainerMobileWrapper>
      <Carousel
        navButtonsAlwaysVisible
        autoPlay={false}
        onChange={onChange()}
        animation="slide"
      >
        <TeamMember
          name="Aurelian Mesaros"
          imageUrl={teamAurelianMesarosSrc}
          role={roleFullstack}
          teamMemberName={teamMembers.aurelianMesaros}
        />
        <TeamMember
          name="Ionut Mesaros"
          imageUrl={teamIonutMesarosSrc}
          role={roleFullstack}
          teamMemberName={teamMembers.ionutMesaros}
        />
      </Carousel>
    </OurTeamContainerMobileWrapper>
  );
};

const OurTeam = () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionOurTeam id={navbarConfig.sections.ourTeam}>
      <LinearGradientDesc/>

      <ScrollArrowUpPosition>
        <ScrollArrowUp
          tooltipText="Go to Why Us"
          onCallback={() => onScrollTo(navbarConfig.sections.whyUs)}
        />
      </ScrollArrowUpPosition>

      <Title>Meet Our Team.</Title>

      <OurTeamContainerMobile/>

      <OurTeamContainerDesktop>
        <TeamMembersRow>
          <TeamMember
            name="Aurelian Mesaros"
            imageUrl={teamAurelianMesarosSrc}
            role={roleFullstack}
            teamMemberName={teamMembers.aurelianMesaros}
          />
          <TeamMember
            name="Ionut Mesaros"
            imageUrl={teamIonutMesarosSrc}
            role={roleFullstack}
            teamMemberName={teamMembers.ionutMesaros}
          />
        </TeamMembersRow>
      </OurTeamContainerDesktop>

      <ScrollArrowDownPosition>
        <ScrollArrowDown
          tooltipText="Go to How It Works"
          onCallback={() => onScrollTo(navbarConfig.sections.howItWorks)}
        />
      </ScrollArrowDownPosition>
    </SectionOurTeam>
  );
};
export default OurTeam;
