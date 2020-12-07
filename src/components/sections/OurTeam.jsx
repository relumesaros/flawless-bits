import React from 'react';
import styled from 'styled-components';

import { LinearGradientDesc } from '../common/LinearGradient';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import navbarConfig from '../../config/navbarConfig';
import teamAdrianMesarosSrc from '../../assets/team/teamAdrianMesaros.jpg';
import teamAurelianMesarosSrc from '../../assets/team/teamAurelianMesaros.jpg';
import teamIonutMesarosSrc from '../../assets/team/teamIonutMesaros.png';
import teamAlexPopaSrc from '../../assets/team/teamAlexPopa.png';
import teamZoltanZelenyacSrc from '../../assets/team/teamZoltanZelenyac.png';
import teamTudorPopSrc from '../../assets/team/teamTudorPop.jpg';
import {
  ScrollArrowDown,
  ScrollArrowDownPosition,
  ScrollArrowUp,
  ScrollArrowUpPosition,
} from '../common/ScrollArrow';
import { experienceConfig } from '../../config/experienceConfig';
import Experience from '../common/Experience';
import stylesConfig from '../../config/stylesConfig';

const SectionOurTeam = styled.div`
  position: relative;
  min-height: 100%;
  padding: 120px 5% 60px 5%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 50px 0 40px 0;
  }
`;

const OurTeamContainerDesktop = styled.div`
  width: 100%;
  height: 100%;
  margin: 60px 0 20px 0;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 70px;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 30px 0 20px 0;
    grid-template-columns: repeat(auto-fill, 320px);
    grid-row-gap: 5px;
    grid-column-gap: 5px;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const TeamMemberWrapper = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url("${props => props.imageUrl}") no-repeat center top;
  background-size: cover;
  opacity: 0.9;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) { 
    height: 400px;
    width: 320px;
  }
`;

const TeamMemberContent = styled.div`
  margin: 0;
  height: 200px;
  background: #ffffffbf;

  &:hover {
    background: #fffffff0;
  }

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 160px;
  }
`;

const TeamMemberName = styled.p`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 8px 0 0 0;
  text-align: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
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

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    letter-spacing: 0;
    font-size: 10px;
    margin: 5px 0;
  }
`;

// const OurTeamContainerMobileWrapper = styled.div`
//   display: none;
//   height: 100%;
//   margin: 20px 0 10px 0;
//   box-sizing: border-box;
// eslint-disable-next-line
//   @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
//     display: flex;
//   }
//
//   .Carousel-root-1,
//   >div,
//   .CarouselItem,
//   .CarouselItem > div {
//     height: 100%;
//     width: 100%;
//   }
// `;

const TeamMember = (
  {
    name,
    imageUrl,
    role,
    experience
  }
) => {
  return (
    <TeamMemberWrapper imageUrl={imageUrl}>
      <TeamMemberContent>
        <TeamMemberName>{name}</TeamMemberName>
        <TeamMemberRole>
          {role}
        </TeamMemberRole>
        {experience && (
          <Experience experience={experience}/>
        )}
      </TeamMemberContent>
    </TeamMemberWrapper>
  );
};

const roleFullstack = 'Full Stack Software Engineer, Co-Founder';
const roleUIUXDesigner = 'UI/UX Designer, Co-Founder';

// eslint-disable-next-line
// const OurTeamContainerMobile = () => {
//   // eslint-disable-next-line
//   const [index, setIndex] = useState(0);
//
//   // eslint-disable-next-line
//   const onChange = indexNew => {
//     // setIndex(indexNew);
//     // eslint-disable-next-line
//     console.error('index', index);
//   };
//
//   return (
//     <OurTeamContainerMobileWrapper>
//       <Carousel
//         navButtonsAlwaysVisible
//         autoPlay={false}
//         onChange={onChange()}
//         animation="slide"
//       >
//         <TeamMember
//           name="Aurelian Mesaros"
//           imageUrl={teamAurelianMesarosSrc}
//           role={roleFullstack}
//           experience={experienceConfig.aurelianMesaros}
//         />
//         <TeamMember
//           name="Ionut Mesaros"
//           imageUrl={teamIonutMesarosSrc}
//           role={roleFullstack}
//           experience={experienceConfig.ionutMesaros}
//         />
//       </Carousel>
//     </OurTeamContainerMobileWrapper>
//   );
// };

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

      <OurTeamContainerDesktop>
        <TeamMember
          name="Aurelian Mesaros"
          imageUrl={teamAurelianMesarosSrc}
          role={roleFullstack}
          experience={experienceConfig.aurelianMesaros}
        />
        <TeamMember
          name="Ionut Mesaros"
          imageUrl={teamIonutMesarosSrc}
          role={roleFullstack}
          experience={experienceConfig.ionutMesaros}
        />
        <TeamMember
          name="Adrian Mesaros"
          imageUrl={teamAdrianMesarosSrc}
          role={roleFullstack}
          experience={experienceConfig.adrianMesaros}
        />
        <TeamMember
          name="Tudor"
          imageUrl={teamTudorPopSrc}
          role={roleFullstack}
          experience={experienceConfig.tudorPop}
        />
        <TeamMember
          name="Alex Popa"
          imageUrl={teamAlexPopaSrc}
          role={roleFullstack}
          experience={experienceConfig.alexPopa}
        />
        <TeamMember
          name="Zoltan Zelenyak"
          imageUrl={teamZoltanZelenyacSrc}
          role={roleUIUXDesigner}
        />
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
