import React from 'react';
import styled from 'styled-components';
import visionSrc from '../../../shared/assets/vision.png';
import navbarConfig from '../../../shared/config/navbar.config';
import { ScrollArrowDown } from '../../../shared/ui/ScrollArrow';
import stylesConfig from '../../../shared/config/styles.config';
import Header3 from "../../../shared/ui/Header3";
import Header2 from "../../../shared/ui/Header2";
import TechnologyCard from "../../../shared/ui/TechnologyCard";
import SectionWrapper from "../../../shared/ui/Section";
import ImageBackground from "../../../shared/ui/ImageBackground";
import technologiesConfig from "../../../shared/config/technologies.config";

const WhatWeKnowWrapper = styled.div`
  margin-top: 50px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin-top: 20px;
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

export default () => {
    return (
        <SectionWrapper id={navbarConfig.sections.vision} backgroundColor='none'>
            <ImageBackground $imageSrc={visionSrc}/>
            <Header2>
                Our mission is to offer end-to-end digital design, development, and scaling solutions
            </Header2>
            <WhatWeKnowWrapper>
                <Header3>Technologies we master:</Header3>
                <WhatWeKnowIconsWrapper>
                    {Object.values(technologiesConfig).map(technology => {
                        return (
                            <TechnologyCard
                                key={technology.technologyName}
                                Icon={technology.Icon}
                                technologyName={technology.technologyName}/>
                        )
                    })}
                </WhatWeKnowIconsWrapper>
            </WhatWeKnowWrapper>
            <ScrollArrowDown scrollDestination={navbarConfig.sections.whyUs}/>
        </SectionWrapper>
    );
};
