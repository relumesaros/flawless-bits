import React from 'react';
import styled from 'styled-components';

import { LinearGradientDesc } from '../common/LinearGradient';
import onScrollToHandler from '../../handlers/onScrollToHandler';
import navbarConfig from '../../config/navbarConfig';
import blogUseContextAndReducerSrc from '../../assets/blog/blogUseContextAndReducer.png';
import blogRestVsGraphQLSrc from '../../assets/blog/blogRestVsGraphQL.png';
import {
  ScrollArrowDown,
  ScrollArrowDownPosition,
  ScrollArrowUp,
  ScrollArrowUpPosition,
} from '../common/ScrollArrow';
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

const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 60px 0 20px 0;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 70px;
  grid-template-columns: repeat(auto-fit, 500px);
  justify-content: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin: 30px 0 20px 0;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-row-gap: 5px;
    grid-column-gap: 5px;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const blogConfig = {
  useContextAndReducer: {
    title: 'Basic ReactJs Example with useContext() and useReducer() Hooks.',
    imageSrc: blogUseContextAndReducerSrc,
    link: 'https://medium.com/flawless-bits/reactjs-with-context-and-reducer-hooks-example-5f6189bf8882'
  },
  restVsGraphQL: {
    title: 'REST vs. GraphQL: A Critical Review.',
    imageSrc: blogRestVsGraphQLSrc,
    link: 'https://medium.com/flawless-bits/rest-vs-graphql-a-critical-review-c86da2a18823'
  }
};

const BlogCardWrapper = styled.a`
  height: 300px;
  width: 500px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url("${props => props.imageSrc}") no-repeat center top;
  background-size: contain;
  opacity: 0.9;
  
  transition: all 0.1s linear;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) { 
    height: 250px;
    width: 400px;
  }
`;

const BlogCardContent = styled.div`
  margin: 0;
  height: fit-content;
  min-height: 70px;
  background: #ffffffbf;
  padding: 8px 20px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    min-height: 60px;
  }
`;

const BlogCardTitle = styled.p`
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  text-align: center;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
    letter-spacing: 1px;
  }
`;

const BlogCard = ({ imageSrc, title, link }) => {
  return (
    <BlogCardWrapper href={link}
                     target="_blank"
                     imageSrc={imageSrc}
    >
      <BlogCardContent>
        <BlogCardTitle>{title}</BlogCardTitle>
      </BlogCardContent>
    </BlogCardWrapper>
  );
};

const Blog = () => {
  const { onScrollTo } = onScrollToHandler();

  return (
    <SectionOurTeam id={navbarConfig.sections.blog}>
      <LinearGradientDesc/>

      <ScrollArrowUpPosition>
        <ScrollArrowUp
          tooltipText="Go to Why Us"
          onCallback={() => onScrollTo(navbarConfig.sections.howItWorks)}
        />
      </ScrollArrowUpPosition>

      <Title>Blog.</Title>

      <BlogContainer>
        <BlogCard {...blogConfig.restVsGraphQL}/>
        <BlogCard {...blogConfig.useContextAndReducer}/>
      </BlogContainer>

      <ScrollArrowDownPosition>
        <ScrollArrowDown
          tooltipText="Go to Contact Us"
          onCallback={() => onScrollTo(navbarConfig.sections.contactUs)}
        />
      </ScrollArrowDownPosition>
    </SectionOurTeam>
  );
};
export default Blog;
