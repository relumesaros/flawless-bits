import React from 'react';
import styled from 'styled-components';
import IProfileCard from '../../../shared/ui/IProfileCard';
import navbarConfig from '../../../shared/config/navbar.config';
import {
    ScrollArrowDown, ScrollArrowUp,
} from '../../../shared/ui/ScrollArrow';
import stylesConfig from '../../../shared/config/styles.config';
import Text from "../../../shared/ui/Text";
import Header2 from "../../../shared/ui/Header2";
import SectionWrapper from "../../../shared/ui/Section";
import InformationSvg from "../../../shared/assets/icons/InformationSvg";
import EstimateSvg from "../../../shared/assets/icons/EstimateSvg";
import TeamSvg from "../../../shared/assets/icons/TeamSvg";
import CodingSvg from "../../../shared/assets/icons/CodingSvg";
import ReleaseSvg from "../../../shared/assets/icons/ReleaseSvg";

const HowItWorksIconsWrapper = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 70px;
  grid-template-columns: auto auto auto;
  margin: 50px 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 25px 0;
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: auto auto;
    grid-row-gap: 20px;
  }
`;

const HowItWorksContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;

const HowItWorksTextWrapper = styled.div`
  max-width: 48%;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    max-width: 100%;
  }
`;

export default () => {
    return (
        <SectionWrapper id={navbarConfig.sections.howItWorks} backgroundColor={stylesConfig.colors.graySection}>
            <ScrollArrowUp scrollDestination={navbarConfig.sections.ourTeam}/>

            <HowItWorksContent>
                <Header2>How it works.</Header2>
                <HowItWorksTextWrapper>
                    <Text>
                        We gather information about your product. Then we make Time and Cost
                        Estimation, we select the perfect Team Members and we start Developing
                        and Shaping your Idea into a Great Product.
                    </Text>
                </HowItWorksTextWrapper>
            </HowItWorksContent>

            <HowItWorksIconsWrapper>
                <IProfileCard
                    title="Gather Information."
                    Icon={InformationSvg}
                    index="01"
                />
                <IProfileCard
                    title="Time & Cost Estimation."
                    Icon={EstimateSvg}
                    index="02"
                />
                <IProfileCard
                    title="Team Design."
                    Icon={TeamSvg}
                    index="03"
                />
                <IProfileCard
                    title="Coding."
                    Icon={CodingSvg}
                    index="04"
                />
                <IProfileCard
                    title="Testing, Review and Launch."
                    Icon={ReleaseSvg}
                    index="05"
                />
            </HowItWorksIconsWrapper>

            <ScrollArrowDown scrollDestination={navbarConfig.sections.blog}/>
        </SectionWrapper>
    );
};
