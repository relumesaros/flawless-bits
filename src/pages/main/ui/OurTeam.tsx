import React from 'react';
import styled from 'styled-components';
import navbarConfig from '../../../shared/config/navbar.config';
import teamAdrianMesarosSrc from '../../../shared/assets/team/teamAdrianMesaros.png';
import teamAurelianMesarosSrc from '../../../shared/assets/team/teamAurelianMesaros.png';
import teamIonutMesarosSrc from '../../../shared/assets/team/teamIonutMesaros.png';
import teamAlexPopaSrc from '../../../shared/assets/team/teamAlexPopa.png';
import teamZoltanZelenyacSrc from '../../../shared/assets/team/teamZoltanZelenyac.png';
import teamTudorPopSrc from '../../../shared/assets/team/teamTudorPop.png';
import {
    ScrollArrowDown,
    ScrollArrowUp,
} from '../../../shared/ui/ScrollArrow';
import stylesConfig from '../../../shared/config/styles.config';
import jobRole from "../../../shared/enum/jobRole.enum";
import TeamMember from "../../../shared/ui/TeamMember";
import SectionWrapper from "../../../shared/ui/Section";
import Header2 from "../../../shared/ui/Header2";

const OurTeamContainerDesktop = styled.div`
  width: 100%;
  height: 100%;
  margin: 60px 0 20px 0;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 70px;
  grid-template-columns: repeat(auto-fit, ${stylesConfig.teamMember.desktop.width});
  justify-content: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 30px 0 20px 0;
    grid-template-columns: repeat(auto-fill, ${stylesConfig.teamMember.mobile.width});
    grid-row-gap: 5px;
    grid-column-gap: 5px;
  }
`;

const OurTeam = () => {
    return (
        <SectionWrapper id={navbarConfig.sections.ourTeam} backgroundColor={stylesConfig.colors.white}>
            <ScrollArrowUp scrollDestination={navbarConfig.sections.whyUs}/>

            <Header2>Meet Our Team.</Header2>

            <OurTeamContainerDesktop>
                <TeamMember
                    name="Aurelian Mesaros"
                    imageUrl={teamAurelianMesarosSrc}
                    role={jobRole.roleFullstackAndCoFounder}
                />
                <TeamMember
                    name="Ionut Mesaros"
                    imageUrl={teamIonutMesarosSrc}
                    role={jobRole.roleFullstackAndCoFounder}
                />
                <TeamMember
                    name="Adrian Mesaros"
                    imageUrl={teamAdrianMesarosSrc}
                    role={jobRole.roleFullstack}
                />
                <TeamMember
                    name="Tudor"
                    imageUrl={teamTudorPopSrc}
                    role={jobRole.roleFullstack}
                />
                <TeamMember
                    name="Alex Popa"
                    imageUrl={teamAlexPopaSrc}
                    role={jobRole.roleFullstack}
                />
                <TeamMember
                    name="Zoltan Zelenyak"
                    imageUrl={teamZoltanZelenyacSrc}
                    role={jobRole.roleUIUXDesigner}
                />
            </OurTeamContainerDesktop>

            <ScrollArrowDown scrollDestination={navbarConfig.sections.howItWorks}/>
        </SectionWrapper>
    );
};
export default OurTeam;
